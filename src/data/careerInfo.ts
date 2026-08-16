export interface CareerInfo {
  description: string
  related?: string[]
}

export const careerInfo: Record<string, CareerInfo> = {
  HTML: {
    description: 'Linguagem usada para estruturar páginas e aplicações web.',
  },

  CSS: {
    description: 'Linguagem usada para estilizar e definir o layout de páginas web.',
  },

  JavaScript: {
    description: 'Linguagem de programação muito utilizada no desenvolvimento web.',
  },

  TypeScript: {
    description: 'Superset do JavaScript que adiciona tipagem estática ao desenvolvimento.',
  },

  Vue: {
    description: 'Framework progressivo para construção de interfaces web.',
  },

  React: {
    description: 'Biblioteca JavaScript para construção de interfaces de usuário.',
  },

  'Node.js': {
    description: 'Runtime que permite executar JavaScript no lado do servidor.',
  },

  Python: {
    description: 'Linguagem versátil utilizada em desenvolvimento, dados, automação e IA.',
  },

  Java: {
    description: 'Linguagem amplamente utilizada em aplicações corporativas e sistemas backend.',
  },

  PostgreSQL: {
    description: 'Sistema de gerenciamento de banco de dados relacional.',
  },

  'Software Developer': {
    description:
      'Profissional responsável por projetar, desenvolver e manter aplicações de software.',
  },

  'Frontend Developer': {
    description:
      'Profissional especializado na construção da interface e experiência das aplicações web.',
  },

  'Backend Developer': {
    description: 'Profissional responsável pela lógica, APIs, serviços e dados de uma aplicação.',
  },

  'Data Analyst': {
    description: 'Profissional que analisa dados para gerar informações e apoiar decisões.',
  },

  'Data Engineer': {
    description:
      'Profissional responsável por construir sistemas e pipelines para processamento de dados.',
  },

  'Security Analyst': {
    description: 'Profissional que monitora e protege sistemas contra ameaças de segurança.',
  },
}
