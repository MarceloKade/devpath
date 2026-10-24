<script setup lang="ts">
import { ref, watch } from 'vue'
import { VueFlow, type Node, type Edge } from '@vue-flow/core'
import { Background } from '@vue-flow/background'

import '@vue-flow/core/dist/style.css'
import '@vue-flow/core/dist/theme-default.css'

import type { Book } from '@/types/book'
import { findCareerPath } from '@/services/careerService'
import CustomNode from '@/components/flow/CustomNode.vue'
import { devPathInfo } from '@/data/devPathInfo'

const props = defineProps<{
  book: Book
}>()

const nodes = ref<Node[]>([])
const edges = ref<Edge[]>([])

const selectedInfo = ref<{
  title: string
  type: string
  description: string
} | null>(null)

const nodeTypes = {
  custom: CustomNode,
}

function selectNode(data: { label: string; type: string; description?: string }) {
  selectedInfo.value = {
    title: data.label,
    type: data.type,
    description:
      data.description ?? devPathInfo[data.label]?.description ?? 'Informação não disponível.',
  }
}

function createFlow(book: Book) {
  const path = findCareerPath(book)

  const newNodes: Node[] = [
    {
      id: 'book',
      type: 'custom',
      position: { x: 350, y: 40 },
      data: {
        label: book.volumeInfo.title,
        type: 'book',
      },
    },

    {
      id: 'area',
      type: 'custom',
      position: { x: 350, y: 180 },
      data: {
        label: path.area.name,
        description: path.area.description,
        type: 'area',
        onSelect: selectNode,
      },
    },
  ]

  const newEdges: Edge[] = [
    {
      id: 'book-area',
      source: 'book',
      target: 'area',
    },
  ]

  const spacing = 380
  const startX = -(path.paths.length - 1) * (spacing / 2)

  path.paths.forEach((careerPath, index) => {
    const pathId = `path-${index}`
    const technologyId = `technology-${index}`
    const careerId = `career-${index}`

    const x = 350 + startX + index * spacing

    const technologySpacing = 35
    const technologyBaseHeight = 100
    const careerGap = 100

    const technologyHeight =
      technologyBaseHeight + careerPath.technologies.length * technologySpacing

    const careerY = 480 + technologyHeight + careerGap

    newNodes.push(
      {
        id: pathId,
        type: 'custom',
        position: {
          x,
          y: 330,
        },
        data: {
          label: careerPath.name,
          description: careerPath.description,
          type: 'specialization',
          onSelect: selectNode,
        },
      },

      {
        id: technologyId,
        type: 'custom',
        position: {
          x,
          y: 480,
        },
        data: {
          label: 'Tecnologias',
          type: 'technology',
          items: careerPath.technologies,
          onSelect: selectNode,
        },
      },

      {
        id: careerId,
        type: 'custom',
        position: {
          x,
          y: careerY,
        },
        data: {
          label: 'Carreiras',
          type: 'career',
          items: careerPath.careers,
          onSelect: selectNode,
        },
      },
    )

    newEdges.push(
      {
        id: `area-${pathId}`,
        source: 'area',
        target: pathId,
      },
      {
        id: `${pathId}-${technologyId}`,
        source: pathId,
        target: technologyId,
      },
      {
        id: `${technologyId}-${careerId}`,
        source: technologyId,
        target: careerId,
      },
    )
  })

  nodes.value = newNodes
  edges.value = newEdges
}

watch(
  () => props.book,
  (book) => {
    selectedInfo.value = null
    createFlow(book)
  },
  { immediate: true },
)
</script>

<template>
  <div class="flow">
    <VueFlow v-model:nodes="nodes" v-model:edges="edges" :node-types="nodeTypes" fit-view-on-init>
      <Background />
    </VueFlow>

    <aside v-if="selectedInfo" class="info-panel">
      <button class="close" aria-label="Fechar painel" @click="selectedInfo = null">×</button>

      <span>{{ selectedInfo.type }}</span>

      <h2>{{ selectedInfo.title }}</h2>

      <p>
        {{ selectedInfo.description }}
      </p>
    </aside>
  </div>
</template>

<style scoped>
.flow {
  position: relative;
  width: 100%;
  height: 600px;
  overflow: hidden;
  border-radius: 16px;
}

.info-panel {
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 10;
  width: 320px;
  padding: 24px;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  background: white;
  box-shadow: 0 15px 40px rgb(15 23 42 / 15%);
}

.info-panel > span {
  color: #6366f1;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.info-panel h2 {
  margin: 8px 0 12px;
  font-size: 24px;
}

.info-panel p {
  margin: 0;
  color: #64748b;
  font-size: 14px;
  line-height: 1.7;
}

.close {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 30px;
  height: 30px;
  border: 0;
  border-radius: 50%;
  background: #f1f5f9;
  color: #475569;
  font-size: 20px;
  cursor: pointer;
}

.close:hover {
  background: #e2e8f0;
}
</style>
