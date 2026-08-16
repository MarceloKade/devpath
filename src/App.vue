<script setup lang="ts">
import { ref } from 'vue'

import BookSearch from '@/components/BookSearch.vue'
import BookCard from '@/components/BookCard.vue'
import CareerFlow from '@/components/CareerFlow.vue'

import { searchBooks } from '@/services/bookService'
import type { Book } from '@/types/book'

const books = ref<Book[]>([])
const selectedBook = ref<Book | null>(null)
const loading = ref(false)
const error = ref('')

async function handleSearch(query: string) {
  loading.value = true
  error.value = ''
  selectedBook.value = null

  try {
    const data = await searchBooks(query)
    books.value = data.items ?? []

    if (books.value.length === 0) {
      error.value = 'Nenhum livro encontrado.'
    }
  } catch {
    books.value = []
    error.value = 'Não foi possível buscar os livros.'
  } finally {
    loading.value = false
  }
}

function handleExplore(book: Book) {
  selectedBook.value = book

  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth',
  })
}
</script>

<template>
  <div class="app">
    <header class="hero">
      <div class="hero-content">
        <span class="brand">📚 DevPath</span>

        <h1>
          Descubra para onde sua
          <span>leitura</span> pode levar você.
        </h1>

        <p>
          Encontre um livro e explore possíveis caminhos, tecnologias e carreiras na área de
          tecnologia.
        </p>

        <BookSearch @search="handleSearch" />
      </div>
    </header>

    <main class="content">
      <section v-if="loading" class="status">
        <div class="loader"></div>
        <p>Buscando livros...</p>
      </section>

      <section v-else-if="error" class="status">
        <span class="status-icon">📚</span>
        <p>{{ error }}</p>
      </section>

      <section v-else-if="books.length && !selectedBook" class="results">
        <div class="section-heading">
          <h2>Livros encontrados</h2>
          <span>{{ books.length }} resultados</span>
        </div>

        <div class="books">
          <BookCard v-for="book in books" :key="book.id" :book="book" @explore="handleExplore" />
        </div>
      </section>

      <section v-if="selectedBook" class="career-section">
        <div class="career-heading">
          <div>
            <span>SEU CAMINHO</span>
            <h2>Possíveis caminhos na tecnologia</h2>
            <p>Baseado nos temas e conteúdos relacionados ao livro selecionado.</p>
          </div>

          <button class="back-button" @click="selectedBook = null">← Voltar aos livros</button>
        </div>

        <CareerFlow :book="selectedBook" />
      </section>

      <section v-if="!books.length && !loading && !error" class="how-it-works">
        <div class="section-heading centered">
          <span>COMO FUNCIONA</span>
          <h2>Do livro ao seu próximo caminho</h2>
        </div>

        <div class="steps">
          <article>
            <div class="step-icon">📖</div>
            <span>01</span>
            <h3>Escolha um livro</h3>
            <p>Pesquise por um livro que você já leu ou que gostaria de conhecer.</p>
          </article>

          <article>
            <div class="step-icon">🧭</div>
            <span>02</span>
            <h3>Descubra áreas</h3>
            <p>O DevPath identifica temas relacionados ao conteúdo do livro.</p>
          </article>

          <article>
            <div class="step-icon">👨‍💻</div>
            <span>03</span>
            <h3>Explore carreiras</h3>
            <p>Visualize possíveis tecnologias e caminhos profissionais.</p>
          </article>
        </div>
      </section>
    </main>
  </div>
</template>

<style>
:root {
  font-family:
    Inter,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    sans-serif;

  color: #172033;
  background: #f8fafc;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
}

button,
input {
  font: inherit;
}

.app {
  min-height: 100vh;
  background: #f8fafc;
}

.hero {
  padding: 90px 20px 80px;
  background: linear-gradient(135deg, #eef2ff 0%, #f8fafc 65%);
  border-bottom: 1px solid #e2e8f0;
}

.hero-content {
  width: min(800px, 100%);
  margin: 0 auto;
  text-align: center;
}

.brand {
  display: inline-block;
  margin-bottom: 24px;
  font-size: 18px;
  font-weight: 700;
}

.hero h1 {
  margin: 0;
  font-size: clamp(38px, 6vw, 64px);
  line-height: 1.05;
  letter-spacing: -2px;
}

.hero h1 span {
  color: #6366f1;
}

.hero p {
  max-width: 650px;
  margin: 24px auto 34px;
  color: #64748b;
  font-size: 18px;
  line-height: 1.6;
}

.hero :deep(.search) {
  width: min(680px, 100%);
  margin: 0 auto;
}

.content {
  width: min(1200px, calc(100% - 40px));
  margin: 0 auto;
  padding: 70px 0;
}

.section-heading {
  display: flex;
  align-items: end;
  justify-content: space-between;
  margin-bottom: 28px;
}

.section-heading h2 {
  margin: 0;
  font-size: 28px;
}

.section-heading span,
.career-heading > div > span {
  color: #6366f1;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 1px;
}

.books {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 24px;
}

.status {
  padding: 80px 20px;
  text-align: center;
  color: #64748b;
}

.status-icon {
  display: block;
  margin-bottom: 12px;
  font-size: 40px;
}

.loader {
  width: 34px;
  height: 34px;
  margin: 0 auto 16px;
  border: 3px solid #e2e8f0;
  border-top-color: #6366f1;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

.career-section {
  padding-top: 10px;
}

.career-heading {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 30px;
  margin-bottom: 28px;
}

.career-heading h2 {
  margin: 8px 0;
  font-size: 32px;
}

.career-heading p {
  margin: 0;
  color: #64748b;
}

.back-button {
  flex-shrink: 0;
  padding: 11px 18px;
  border: 1px solid #dbe2ea;
  border-radius: 8px;
  background: white;
  color: #334155;
  cursor: pointer;
}

.back-button:hover {
  background: #f1f5f9;
}

.how-it-works {
  padding-top: 20px;
}

.centered {
  display: block;
  text-align: center;
}

.centered h2 {
  margin-top: 8px;
}

.steps {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.steps article {
  padding: 28px;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  background: white;
}

.step-icon {
  margin-bottom: 22px;
  font-size: 32px;
}

.steps article > span {
  color: #94a3b8;
  font-size: 12px;
  font-weight: 700;
}

.steps h3 {
  margin: 8px 0;
}

.steps p {
  margin: 0;
  color: #64748b;
  line-height: 1.6;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@media (max-width: 700px) {
  .hero {
    padding: 60px 20px;
  }

  .hero h1 {
    letter-spacing: -1px;
  }

  .content {
    width: min(100% - 28px, 1200px);
    padding: 45px 0;
  }

  .section-heading,
  .career-heading {
    align-items: flex-start;
    flex-direction: column;
  }

  .steps {
    grid-template-columns: 1fr;
  }
}
</style>
