import type { BookResponse } from '@/types/book'

export async function searchBooks(query: string): Promise<BookResponse> {
  const response = await fetch(`/api/books?q=${encodeURIComponent(query)}`)

  if (!response.ok) {
    throw new Error('Não foi possível buscar os livros.')
  }

  return response.json()
}
