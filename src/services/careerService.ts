import { careerPaths, type CareerPath } from '@/data/careerPaths'
import type { Book } from '@/types/book'

const priorityKeywords: Record<string, string[]> = {
  'Segurança da Informação': [
    'security',
    'cybersecurity',
    'hacking',
    'hacker',
    'vulnerability',
    'vulnerabilities',
    'penetration testing',
    'web application security',
    'application security',
    'ethical hacking',
    'web application hacker',
    'web security',
  ],

  'Dados e Inteligência Artificial': [
    'data science',
    'data analysis',
    'data analytics',
    'machine learning',
    'artificial intelligence',
    'deep learning',
    'data engineering',
    'data mining',
  ],

  'Cloud e DevOps': [
    'cloud computing',
    'aws',
    'azure',
    'kubernetes',
    'docker',
    'terraform',
    'devops',
    'site reliability',
    'infrastructure as code',
    'infrastructure',
  ],

  'Design e UX': [
    'user experience',
    'ux',
    'usability',
    'usabilidade',
    'user interface',
    'ui design',
    'interaction design',
    'product design',
    'human computer interaction',
  ],

  'Desenvolvimento Web': [
    'react',
    'vue',
    'angular',
    'frontend',
    'front-end',
    'javascript',
    'typescript',
    'web development',
    'web application',
  ],
}

function calculateScore(text: string, keywords: string[]): number {
  return keywords.reduce((score, keyword) => {
    return text.includes(keyword.toLowerCase()) ? score + 1 : score
  }, 0)
}

function calculatePriorityScore(text: string, area: string): number {
  const keywords = priorityKeywords[area]

  if (!keywords) {
    return 0
  }

  return keywords.reduce((score, keyword) => {
    return text.includes(keyword.toLowerCase()) ? score + 10 : score
  }, 0)
}

function selectRelevantPaths(text: string, path: CareerPath): CareerPath {
  const scoredPaths = path.paths
    .map((item) => ({
      item,
      score: calculateScore(text, item.keywords),
    }))
    .filter(({ score }) => score > 0)

  return {
    ...path,
    paths: scoredPaths.map(({ item }) => item),
  }
}

export function findCareerPath(book: Book): CareerPath {
  const { title = '', subtitle = '', categories = [], description = '' } = book.volumeInfo

  const text = [title, subtitle, ...categories, description].join(' ').toLowerCase()

  const rankedPaths = careerPaths
    .map((path) => {
      const normalScore = calculateScore(text, path.keywords)

      const priorityScore = calculatePriorityScore(text, path.area.name)

      return {
        path,
        score: normalScore + priorityScore,
      }
    })
    .sort((a, b) => b.score - a.score)

  const bestMatch = rankedPaths[0]

  if (bestMatch && bestMatch.score > 0) {
    return selectRelevantPaths(text, bestMatch.path)
  }

  return {
    keywords: [],

    area: {
      name: 'Tecnologia',
      description:
        'Área relacionada ao desenvolvimento e uso de tecnologias para solucionar problemas.',
    },

    paths: [
      {
        keywords: [],
        name: 'Desenvolvimento de Software',
        description:
          'Especialização voltada para a criação, manutenção e evolução de aplicações e sistemas.',

        technologies: ['JavaScript', 'TypeScript'],

        careers: ['Software Developer'],
      },
    ],
  }
}
