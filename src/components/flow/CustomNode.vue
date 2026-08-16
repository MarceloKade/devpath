<script setup lang="ts">
import { Handle, Position } from '@vue-flow/core'

defineProps<{
  data: {
    label: string
    type: 'book' | 'area' | 'specialization' | 'technology' | 'career'
    description?: string
    items?: string[]
    onSelect?: (data: { label: string; type: string; description?: string }) => void
  }
}>()

const icons = {
  book: '📖',
  area: '💻',
  specialization: '🎯',
  technology: '🛠️',
  career: '👨‍💻',
}
</script>

<template>
  <div class="node" :class="`node-${data.type}`">
    <Handle type="target" :position="Position.Top" />

    <div
      class="header"
      :class="{ clickable: data.description }"
      @click.stop="
        data.onSelect &&
        data.onSelect({
          label: data.label,
          type: data.type,
          description: data.description,
        })
      "
    >
      <span class="icon">
        {{ icons[data.type] }}
      </span>

      <div>
        <span class="type">
          {{ data.type }}
        </span>

        <strong>{{ data.label }}</strong>
      </div>
    </div>

    <ul v-if="data.items?.length" class="items">
      <li
        v-for="item in data.items"
        :key="item"
        @click.stop="
          data.onSelect &&
          data.onSelect({
            label: item,
            type: data.type === 'technology' ? 'Tecnologia' : 'Carreira',
          })
        "
      >
        {{ item }}
      </li>
    </ul>

    <Handle type="source" :position="Position.Bottom" />
  </div>
</template>

<style scoped>
.node {
  width: 280px;
  padding: 18px;
  border: 1px solid #e2e8f0;
  border-radius: 14px;
  background: white;
  box-shadow: 0 4px 15px rgb(15 23 42 / 8%);
}

.header {
  display: flex;
  align-items: center;
  gap: 12px;
}

.header.clickable {
  cursor: pointer;
}

.header.clickable:hover strong {
  color: #4f46e5;
}

.icon {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 42px;
  height: 42px;
  border-radius: 10px;
  background: #f1f5f9;
  font-size: 21px;
}

.header > div {
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
}

.type {
  color: #64748b;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.8px;
  text-transform: uppercase;
}

strong {
  font-size: 14px;
  line-height: 1.4;
}

.items {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin: 16px 0 0;
  padding: 0;
  list-style: none;
}

.items li {
  padding: 6px 8px;
  border-radius: 6px;
  cursor: pointer;
  transition:
    background 0.15s ease,
    transform 0.15s ease;
}

.items li:hover {
  transform: translateX(3px);
  background: #eef2ff;
  color: #4f46e5;
}

.node-book {
  border-color: #cbd5e1;
}

.node-area {
  border-color: #93c5fd;
}

.node-specialization {
  border-color: #c4b5fd;
}

.node-technology {
  border-color: #c4b5fd;
}

.node-career {
  border-color: #86efac;
}
</style>
