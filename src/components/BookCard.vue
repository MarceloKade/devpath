<script setup lang="ts">
import type { Book } from '@/types/book'

const props = defineProps<{
  book: Book
}>()

const emit = defineEmits<{
  explore: [book: Book]
}>()
</script>

<template>
  <article
    class="card"
    role="button"
    tabindex="0"
    @click="emit('explore', props.book)"
    @keydown.enter="emit('explore', props.book)"
    @keydown.space.prevent="emit('explore', props.book)"
  >
    <div class="cover">
      <img
        v-if="book.volumeInfo.imageLinks?.thumbnail"
        :src="book.volumeInfo.imageLinks.thumbnail.replace('http://', 'https://')"
        :alt="`Capa do livro ${book.volumeInfo.title}`"
      />

      <div v-else class="no-cover">📖</div>

      <div class="overlay">
        <span>Explorar Caminho →</span>
      </div>
    </div>

    <div class="content">
      <h2 :title="book.volumeInfo.title">
        {{ book.volumeInfo.title }}
      </h2>

      <p v-if="book.volumeInfo.authors" class="authors">
        {{ book.volumeInfo.authors.join(', ') }}
      </p>

      <p v-else class="authors">Autor desconhecido</p>
    </div>
  </article>
</template>

<style scoped>
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  background: white;
  cursor: pointer;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    border-color 0.2s ease;
}

.card:hover,
.card:focus-visible {
  transform: translateY(-6px);
  border-color: #a5b4fc;
  box-shadow: 0 16px 35px rgb(15 23 42 / 12%);
  outline: none;
}

.cover {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 280px;
  padding: 20px;
  background: #f1f5f9;
}

.cover img {
  max-width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 4px;
  box-shadow: 0 4px 12px rgb(15 23 42 / 12%);
  transition: transform 0.25s ease;
}

.card:hover .cover img {
  transform: scale(1.03);
}

.no-cover {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90px;
  height: 120px;
  border-radius: 6px;
  background: #e2e8f0;
  font-size: 32px;
}

.overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(79 70 229 / 82%);
  opacity: 0;
  transition: opacity 0.2s ease;
}

.overlay span {
  padding: 10px 16px;
  border: 1px solid rgb(255 255 255 / 40%);
  border-radius: 8px;
  background: rgb(255 255 255 / 15%);
  color: white;
  font-size: 14px;
  font-weight: 700;
  backdrop-filter: blur(4px);
}

.card:hover .overlay,
.card:focus-visible .overlay {
  opacity: 1;
}

.content {
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 20px;
}

h2 {
  display: -webkit-box;
  overflow: hidden;
  margin: 0 0 8px;
  font-size: 17px;
  line-height: 1.35;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.authors {
  display: -webkit-box;
  overflow: hidden;
  margin: 0;
  color: #64748b;
  font-size: 14px;
  line-height: 1.4;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
</style>
