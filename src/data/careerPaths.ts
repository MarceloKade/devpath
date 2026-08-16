export interface CareerPath {
  keywords: string[]

  area: {
    name: string
    description: string
  }

  paths: {
    keywords: string[]
    name: string
    description: string
    technologies: string[]
    careers: string[]
  }[]
}

export const careerPaths: CareerPath[] = [
  {
    keywords: [
      'web development',
      'desenvolvimento web',
      'web application',
      'web applications',
      'frontend',
      'front-end',
      'front end',
      'javascript',
      'typescript',
      'react',
      'vue',
      'angular',
      'html',
      'css',
    ],

    area: {
      name: 'Desenvolvimento Web',
      description: 'Área dedicada à criação de aplicações e experiências digitais para a web.',
    },

    paths: [
      {
        keywords: [
          'frontend',
          'front-end',
          'front end',
          'react',
          'vue',
          'angular',
          'html',
          'css',
          'user interface',
          'ui',
          'web interface',
        ],

        name: 'Frontend',

        description:
          'Especialização voltada para a construção de interfaces e experiências de usuário.',

        technologies: ['HTML', 'CSS', 'JavaScript', 'Vue', 'React'],

        careers: ['Frontend Developer', 'UI Developer'],
      },

      {
        keywords: [
          'full stack',
          'full-stack',
          'fullstack',
          'frontend and backend',
          'front-end and back-end',
          'web application development',
        ],

        name: 'Full Stack',

        description:
          'Especialização que combina desenvolvimento frontend e backend para construir aplicações completas.',

        technologies: ['JavaScript', 'TypeScript', 'Node.js', 'React'],

        careers: ['Full Stack Developer', 'Software Developer'],
      },

      {
        keywords: [
          'backend',
          'back-end',
          'back end',
          'api',
          'server',
          'server-side',
          'database',
          'rest api',
        ],

        name: 'Backend',

        description:
          'Especialização voltada para APIs, regras de negócio, servidores e integração com dados.',

        technologies: ['Node.js', 'Python', 'Java', 'PostgreSQL'],

        careers: ['Backend Developer', 'Software Engineer'],
      },
    ],
  },

  {
    keywords: [
      'software engineering',
      'engenharia de software',
      'software architecture',
      'arquitetura de software',
      'software design',
      'system design',
      'design patterns',
      'padrões de projeto',
      'clean code',
      'clean architecture',
      'refactoring',
      'refatoração',
      'software testing',
      'quality assurance',
      'quality engineering',
      'software quality',
      'software development',
      'desenvolvimento de software',
    ],

    area: {
      name: 'Engenharia de Software',
      description:
        'Área dedicada à criação, manutenção, arquitetura, qualidade e evolução de sistemas de software.',
    },

    paths: [
      {
        keywords: [
          'software architecture',
          'arquitetura de software',
          'software architect',
          'architecture',
          'system architecture',
          'arquitetura de sistemas',
          'system design',
          'design de sistemas',
          'software design',
          'design patterns',
          'design pattern',
          'padrões de projeto',
          'microservices',
          'microsserviços',
          'distributed systems',
          'sistemas distribuídos',
          'clean architecture',
          'arquitetura limpa',
          'hexagonal architecture',
          'layered architecture',
          'event-driven architecture',
          'arquitetura orientada a eventos',
        ],

        name: 'Arquitetura de Software',
        description:
          'Especialização voltada para a definição da estrutura, componentes e decisões técnicas de sistemas.',

        technologies: ['Java', 'C#', 'Node.js', 'Docker'],

        careers: ['Software Architect', 'Software Engineer'],
      },

      {
        keywords: [
          'software testing',
          'software test',
          'testing',
          'testes de software',
          'testes',
          'quality assurance',
          'qa',
          'quality engineering',
          'engenharia de qualidade',
          'software quality',
          'qualidade de software',
          'automated testing',
          'automação de testes',
          'test automation',
          'unit testing',
          'testes unitários',
          'integration testing',
          'testes de integração',
          'end-to-end testing',
          'e2e testing',
          'functional testing',
          'test cases',
          'casos de teste',
          'test strategy',
          'estratégia de testes',
        ],

        name: 'Qualidade de Software',
        description:
          'Especialização focada em garantir a qualidade, confiabilidade e funcionamento correto das aplicações.',

        technologies: ['Cypress', 'Playwright', 'Selenium', 'Jest'],

        careers: ['QA Engineer', 'Test Analyst'],
      },

      {
        keywords: [
          'software development',
          'desenvolvimento de software',
          'software developer',
          'software programming',
          'programming',
          'programação',
          'application development',
          'desenvolvimento de aplicações',
          'application development',
          'software implementation',
          'implementação de software',
          'software engineering',
          'engenharia de software',
          'coding',
          'coding practices',
          'object-oriented programming',
          'programação orientada a objetos',
          'oop',
          'refactoring',
          'refatoração',
          'clean code',
          'maintainable code',
          'código sustentável',
        ],

        name: 'Desenvolvimento de Software',
        description:
          'Especialização voltada para a implementação, manutenção e evolução de aplicações.',

        technologies: ['Java', 'C#', 'Python', 'JavaScript'],

        careers: ['Software Developer', 'Software Engineer'],
      },
    ],
  },

  {
    keywords: [
      'data analysis',
      'data analytics',
      'análise de dados',
      'analytics',
      'data engineering',
      'engenharia de dados',
      'data science',
      'ciência de dados',
      'machine learning',
      'aprendizado de máquina',
      'artificial intelligence',
      'inteligência artificial',
      'deep learning',
      'big data',
      'data mining',
      'statistics',
      'estatística',
      'data visualization',
      'visualização de dados',
    ],

    area: {
      name: 'Dados e Inteligência Artificial',
      description:
        'Área dedicada à coleta, processamento, análise e utilização de dados para gerar informações, previsões e apoiar decisões.',
    },

    paths: [
      {
        keywords: [
          'data analysis',
          'data analytics',
          'análise de dados',
          'data analyst',
          'analytics',
          'business analytics',
          'business intelligence',
          'bi',
          'data visualization',
          'visualização de dados',
          'data reporting',
          'relatórios de dados',
          'exploratory data analysis',
          'eda',
          'descriptive statistics',
          'estatística descritiva',
          'excel',
          'power bi',
          'tableau',
        ],

        name: 'Análise de Dados',
        description:
          'Especialização focada em analisar dados e transformar informações em insights para apoiar decisões.',

        technologies: ['SQL', 'Python', 'Power BI'],

        careers: ['Data Analyst'],
      },

      {
        keywords: [
          'data engineering',
          'engenharia de dados',
          'data engineer',
          'data pipeline',
          'data pipelines',
          'pipeline de dados',
          'etl',
          'elt',
          'extract transform load',
          'data warehouse',
          'data lake',
          'data platform',
          'data infrastructure',
          'infraestrutura de dados',
          'distributed data processing',
          'processamento distribuído',
          'big data',
          'apache spark',
          'spark',
          'apache kafka',
          'kafka',
          'airflow',
          'apache airflow',
        ],

        name: 'Engenharia de Dados',
        description:
          'Especialização focada na construção de pipelines, sistemas e infraestrutura para processamento de dados.',

        technologies: ['Python', 'SQL', 'Apache Spark'],

        careers: ['Data Engineer'],
      },

      {
        keywords: [
          'data science',
          'ciência de dados',
          'data scientist',
          'machine learning',
          'aprendizado de máquina',
          'artificial intelligence',
          'inteligência artificial',
          'deep learning',
          'deep neural networks',
          'neural networks',
          'redes neurais',
          'predictive modeling',
          'modelagem preditiva',
          'supervised learning',
          'aprendizado supervisionado',
          'unsupervised learning',
          'aprendizado não supervisionado',
          'natural language processing',
          'processamento de linguagem natural',
          'computer vision',
          'visão computacional',
          'reinforcement learning',
          'aprendizado por reforço',
          'scikit-learn',
          'tensorflow',
          'pytorch',
        ],

        name: 'Data Science e IA',
        description:
          'Especialização voltada para análise estatística, machine learning e desenvolvimento de soluções baseadas em dados.',

        technologies: ['Python', 'Pandas', 'Scikit-learn', 'TensorFlow'],

        careers: ['Data Scientist', 'Machine Learning Engineer'],
      },
    ],
  },

  {
    keywords: [
      'security',
      'cybersecurity',
      'cyber',
      'segurança',
      'segurança da informação',
      'information security',
      'ethical hacking',
      'hacking',
      'penetration testing',
      'pentest',
      'vulnerability',
      'vulnerabilidade',
      'malware',
      'firewall',
      'authentication',
      'autenticação',
      'cryptography',
      'criptografia',
    ],

    area: {
      name: 'Segurança da Informação',
      description:
        'Área dedicada à proteção de sistemas, redes, aplicações e dados contra ameaças e acessos não autorizados.',
    },

    paths: [
      {
        keywords: [
          'cybersecurity',
          'cyber security',
          'cyber',
          'information security',
          'segurança da informação',
          'security analyst',
          'security operations',
          'soc',
          'security monitoring',
          'threat detection',
          'threat analysis',
          'incident response',
          'security incident',
          'malware',
          'phishing',
          'network security',
          'network security monitoring',
        ],

        name: 'Cybersecurity',

        description:
          'Especialização focada na identificação, prevenção e resposta a ameaças de segurança digital.',

        technologies: ['Linux', 'Networking', 'Python'],

        careers: ['Security Analyst', 'Cybersecurity Analyst'],
      },

      {
        keywords: [
          'application security',
          'application security testing',
          'web application security',
          'web security',
          'web application',
          'web applications',
          'secure coding',
          'secure software',
          'software security',
          'code security',
          'application vulnerability',
          'web vulnerability',
          'vulnerability assessment',
          'penetration testing',
          'penetration test',
          'pentest',
          'ethical hacking',
          'web hacking',
          'owasp',
          'burp suite',
        ],

        name: 'Application Security',

        description:
          'Especialização voltada para identificar e prevenir vulnerabilidades em aplicações e sistemas.',

        technologies: ['OWASP', 'Burp Suite', 'Linux'],

        careers: ['Application Security Engineer', 'Security Engineer'],
      },

      {
        keywords: [
          'cloud security',
          'cloud security architecture',
          'cloud security engineer',
          'cloud infrastructure security',
          'cloud infrastructure',
          'aws security',
          'azure security',
          'cloud identity',
          'cloud iam',
          'cloud access control',
          'cloud compliance',
          'secure cloud',
        ],

        name: 'Cloud Security',

        description:
          'Especialização voltada para a proteção de aplicações, dados e infraestrutura em ambientes de computação em nuvem.',

        technologies: ['AWS', 'Docker', 'Linux'],

        careers: ['Cloud Security Engineer'],
      },
    ],
  },

  {
    keywords: [
      'cloud',
      'cloud computing',
      'computação em nuvem',
      'aws',
      'amazon web services',
      'azure',
      'google cloud',
      'gcp',
      'devops',
      'docker',
      'kubernetes',
      'container',
      'containers',
      'terraform',
      'infrastructure as code',
      'infraestrutura como código',
      'continuous integration',
      'continuous deployment',
      'ci/cd',
      'sre',
      'site reliability',
    ],

    area: {
      name: 'Cloud e DevOps',
      description:
        'Área dedicada à infraestrutura, automação, implantação e operação de aplicações em ambientes modernos de computação.',
    },

    paths: [
      {
        keywords: [
          'cloud computing',
          'cloud architecture',
          'cloud infrastructure',
          'cloud services',
          'aws',
          'amazon web services',
          'azure',
          'google cloud',
          'gcp',
          'cloud deployment',
          'cloud infrastructure architecture',
        ],

        name: 'Cloud Computing',

        description:
          'Especialização voltada para arquitetura, implantação e gerenciamento de aplicações e infraestrutura em nuvem.',

        technologies: ['AWS', 'Azure', 'Docker', 'Terraform'],

        careers: ['Cloud Engineer', 'Cloud Architect'],
      },

      {
        keywords: [
          'devops',
          'continuous integration',
          'continuous delivery',
          'continuous deployment',
          'ci/cd',
          'ci cd',
          'deployment automation',
          'infrastructure as code',
          'infrastructure automation',
          'docker',
          'containers',
          'containerization',
          'kubernetes',
          'terraform',
          'github actions',
          'automation',
        ],

        name: 'DevOps',

        description:
          'Especialização que une desenvolvimento e operações para automatizar processos de entrega e infraestrutura.',

        technologies: ['Docker', 'Kubernetes', 'GitHub Actions', 'Terraform'],

        careers: ['DevOps Engineer', 'Platform Engineer'],
      },

      {
        keywords: [
          'site reliability',
          'site reliability engineering',
          'sre',
          'reliability engineering',
          'system reliability',
          'service reliability',
          'availability',
          'high availability',
          'system availability',
          'observability',
          'monitoring',
          'distributed systems',
          'incident management',
          'incident response',
          'performance engineering',
          'service level objective',
          'slo',
          'service level indicator',
          'sli',
          'error budget',
          'prometheus',
          'grafana',
        ],

        name: 'Site Reliability Engineering',

        description:
          'Especialização focada em confiabilidade, disponibilidade, desempenho e operação de sistemas em escala.',

        technologies: ['Kubernetes', 'Linux', 'Prometheus', 'Grafana'],

        careers: ['SRE', 'Site Reliability Engineer'],
      },
    ],
  },
  {
    keywords: [
      'user experience',
      'ux',
      'usability',
      'usabilidade',
      'user interface',
      'interface design',
      'interaction design',
      'design thinking',
      'web design',
      'graphic design',
      'product design',
    ],

    area: {
      name: 'Design e UX',
      description:
        'Área dedicada à criação de experiências, interfaces e produtos digitais centrados nas necessidades dos usuários.',
    },

    paths: [
      {
        keywords: [
          'user experience',
          'ux',
          'user research',
          'user-centered design',
          'user centered design',
          'usability',
          'usabilidade',
          'information architecture',
          'arquitetura da informação',
          'interaction design',
          'design thinking',
          'user journey',
          'customer journey',
          'user testing',
          'usability testing',
          'user interview',
          'persona',
          'wireframe',
        ],

        name: 'UX Design',

        description:
          'Especialização focada em pesquisa, usabilidade, arquitetura da informação e experiência do usuário.',

        technologies: ['Figma', 'Prototyping', 'User Research'],

        careers: ['UX Designer', 'Product Designer'],
      },

      {
        keywords: [
          'user interface',
          'ui design',
          'interface design',
          'visual design',
          'web design',
          'interface',
          'ui',
          'typography',
          'color theory',
          'layout',
          'visual hierarchy',
          'design system',
          'design systems',
          'components',
          'component design',
          'responsive design',
          'prototyping',
        ],

        name: 'UI Design',

        description:
          'Especialização voltada para a criação visual e interação de interfaces digitais.',

        technologies: ['Figma', 'Design Systems', 'Prototyping'],

        careers: ['UI Designer', 'UI Developer'],
      },
    ],
  },
]
