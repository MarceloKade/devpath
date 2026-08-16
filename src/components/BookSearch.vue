<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits<{
  search: [query: string]
}>()

const query = ref('')

function submitSearch() {
  const value = query.value.trim()

  if (!value) return

  emit('search', value)
}
</script>

<template>
  <form class="search" @submit.prevent="submitSearch">
    <input
      v-model="query"
      type="search"
      placeholder="Pesquise por um livro..."
      aria-label="Pesquisar livro"
    />

    <button type="submit">Buscar</button>
  </form>
</template>

<style scoped>
.search {
  display: flex;
  gap: 10px;
  width: min(700px, 100%);
}

input {
  flex: 1;
  padding: 14px 16px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 16px;
}

button {
  padding: 14px 22px;
  border: 0;
  border-radius: 8px;
  cursor: pointer;
}
</style>
