export interface Book {
  id: string

  volumeInfo: {
    title: string
    subtitle?: string
    authors?: string[]
    description?: string

    imageLinks?: {
      thumbnail?: string
    }

    categories?: string[]
  }
}

export interface BookResponse {
  totalItems: number
  items?: Book[]
}
