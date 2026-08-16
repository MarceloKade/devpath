import type { VercelRequest, VercelResponse } from '@vercel/node'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { q, startIndex = '0', maxResults = '12' } = req.query

  if (!q || typeof q !== 'string') {
    return res.status(400).json({
      error: 'O parâmetro q é obrigatório.',
    })
  }

  try {
    const url =
      `https://www.googleapis.com/books/v1/volumes` +
      `?q=${encodeURIComponent(q)}` +
      `&startIndex=${startIndex}` +
      `&maxResults=${maxResults}` +
      `&key=${process.env.GOOGLE_BOOKS_API_KEY}`

    const response = await fetch(url)
    const data = await response.json()

    return res.status(response.status).json(data)
  } catch (error) {
    console.error(error)

    return res.status(500).json({
      error: 'Erro ao consultar a Google Books API.',
    })
  }
}
