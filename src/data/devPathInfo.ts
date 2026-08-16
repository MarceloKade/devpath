export interface DevPathInfo {
  title: string
  type: 'Área' | 'Especialização' | 'Tecnologia' | 'Carreira'
  description: string
}

export const devPathInfo: Record<string, DevPathInfo> = {
  // Áreas

  'Desenvolvimento Web': {
    title: 'Desenvolvimento Web',
    type: 'Área',
    description: 'Área dedicada à criação de aplicações e experiências digitais para a web.',
  },

  'Engenharia de Software': {
    title: 'Engenharia de Software',
    type: 'Área',
    description:
      'Área dedicada à criação, manutenção, arquitetura, qualidade e evolução de sistemas de software.',
  },

  'Dados e Inteligência Artificial': {
    title: 'Dados e Inteligência Artificial',
    type: 'Área',
    description:
      'Área dedicada à coleta, processamento, análise e utilização de dados para gerar informações, previsões e apoiar decisões.',
  },

  'Segurança da Informação': {
    title: 'Segurança da Informação',
    type: 'Área',
    description:
      'Área dedicada à proteção de sistemas, redes, aplicações e dados contra ameaças e acessos não autorizados.',
  },

  'Cloud e DevOps': {
    title: 'Cloud e DevOps',
    type: 'Área',
    description:
      'Área dedicada à infraestrutura, automação, implantação e operação de aplicações em ambientes modernos de computação.',
  },

  // Especializações

  Frontend: {
    title: 'Frontend',
    type: 'Especialização',
    description:
      'Especialização voltada para a construção de interfaces e experiências de usuário para aplicações web.',
  },

  Backend: {
    title: 'Backend',
    type: 'Especialização',
    description:
      'Especialização voltada para APIs, regras de negócio, servidores e integração com dados.',
  },

  'Full Stack': {
    title: 'Full Stack',
    type: 'Especialização',
    description:
      'Especialização que combina desenvolvimento frontend e backend para construir aplicações completas.',
  },

  'Arquitetura de Software': {
    title: 'Arquitetura de Software',
    type: 'Especialização',
    description:
      'Especialização voltada para a definição da estrutura, componentes e decisões técnicas de sistemas.',
  },

  'Qualidade de Software': {
    title: 'Qualidade de Software',
    type: 'Especialização',
    description:
      'Especialização focada em garantir a qualidade, confiabilidade e funcionamento correto das aplicações.',
  },

  'Desenvolvimento de Software': {
    title: 'Desenvolvimento de Software',
    type: 'Especialização',
    description:
      'Especialização voltada para a implementação, manutenção e evolução de aplicações.',
  },

  'Análise de Dados': {
    title: 'Análise de Dados',
    type: 'Especialização',
    description:
      'Especialização focada em analisar dados e transformar informações em insights para apoiar decisões.',
  },

  'Engenharia de Dados': {
    title: 'Engenharia de Dados',
    type: 'Especialização',
    description:
      'Especialização focada na construção de pipelines, sistemas e infraestrutura para processamento de dados.',
  },

  'Data Science e IA': {
    title: 'Data Science e IA',
    type: 'Especialização',
    description:
      'Especialização voltada para análise estatística, machine learning e desenvolvimento de soluções baseadas em dados.',
  },

  Cybersecurity: {
    title: 'Cybersecurity',
    type: 'Especialização',
    description:
      'Especialização focada na identificação, prevenção e resposta a ameaças de segurança digital.',
  },

  'Application Security': {
    title: 'Application Security',
    type: 'Especialização',
    description:
      'Especialização voltada para identificar e prevenir vulnerabilidades em aplicações e sistemas.',
  },

  'Cloud Security': {
    title: 'Cloud Security',
    type: 'Especialização',
    description:
      'Especialização voltada para a proteção de aplicações, dados e infraestrutura em ambientes de computação em nuvem.',
  },

  'Cloud Computing': {
    title: 'Cloud Computing',
    type: 'Especialização',
    description:
      'Especialização voltada para arquitetura, implantação e gerenciamento de aplicações e infraestrutura em nuvem.',
  },

  DevOps: {
    title: 'DevOps',
    type: 'Especialização',
    description:
      'Especialização que une desenvolvimento e operações para automatizar processos de entrega e infraestrutura.',
  },

  'Site Reliability Engineering': {
    title: 'Site Reliability Engineering',
    type: 'Especialização',
    description:
      'Especialização focada em confiabilidade, disponibilidade, desempenho e operação de sistemas em escala.',
  },

  // Design e UX

  'Design e UX': {
    title: 'Design e UX',
    type: 'Área',
    description:
      'Área dedicada à criação de experiências, interfaces e produtos digitais centrados nas necessidades dos usuários.',
  },

  'UX Design': {
    title: 'UX Design',
    type: 'Especialização',
    description:
      'Especialização focada em pesquisa, usabilidade, arquitetura da informação e experiência do usuário.',
  },

  'UI Design': {
    title: 'UI Design',
    type: 'Especialização',
    description: 'Especialização voltada para a criação visual e interação de interfaces digitais.',
  },

  // Tecnologias de Design

  Figma: {
    title: 'Figma',
    type: 'Tecnologia',
    description:
      'Ferramenta colaborativa utilizada para criação de interfaces, protótipos e sistemas de design.',
  },

  Prototyping: {
    title: 'Prototyping',
    type: 'Tecnologia',
    description:
      'Processo de criação de representações interativas de produtos digitais para testar ideias e experiências antes da implementação.',
  },

  'User Research': {
    title: 'User Research',
    type: 'Tecnologia',
    description:
      'Conjunto de métodos utilizados para compreender necessidades, comportamentos e expectativas dos usuários.',
  },

  'Design Systems': {
    title: 'Design Systems',
    type: 'Tecnologia',
    description:
      'Conjunto de componentes, padrões e diretrizes utilizado para criar interfaces consistentes e escaláveis.',
  },

  // Tecnologias

  HTML: {
    title: 'HTML',
    type: 'Tecnologia',
    description: 'Linguagem utilizada para estruturar o conteúdo de páginas e aplicações web.',
  },

  CSS: {
    title: 'CSS',
    type: 'Tecnologia',
    description: 'Linguagem utilizada para definir estilos, layouts e apresentação de páginas web.',
  },

  JavaScript: {
    title: 'JavaScript',
    type: 'Tecnologia',
    description:
      'Linguagem de programação amplamente utilizada para criar aplicações web interativas.',
  },

  TypeScript: {
    title: 'TypeScript',
    type: 'Tecnologia',
    description:
      'Superset do JavaScript que adiciona tipagem estática e recursos para aplicações maiores.',
  },

  Vue: {
    title: 'Vue',
    type: 'Tecnologia',
    description: 'Framework progressivo para construção de interfaces de usuário.',
  },

  React: {
    title: 'React',
    type: 'Tecnologia',
    description: 'Biblioteca JavaScript utilizada para construção de interfaces de usuário.',
  },

  Angular: {
    title: 'Angular',
    type: 'Tecnologia',
    description: 'Framework para construção de aplicações web utilizando TypeScript.',
  },

  'Node.js': {
    title: 'Node.js',
    type: 'Tecnologia',
    description:
      'Runtime que permite executar JavaScript fora do navegador, sendo muito utilizado no backend.',
  },

  Python: {
    title: 'Python',
    type: 'Tecnologia',
    description:
      'Linguagem versátil utilizada em desenvolvimento, automação, dados, inteligência artificial e backend.',
  },

  Java: {
    title: 'Java',
    type: 'Tecnologia',
    description:
      'Linguagem amplamente utilizada em sistemas corporativos, backend e aplicações de grande escala.',
  },

  PostgreSQL: {
    title: 'PostgreSQL',
    type: 'Tecnologia',
    description: 'Sistema de gerenciamento de banco de dados relacional de código aberto.',
  },

  SQL: {
    title: 'SQL',
    type: 'Tecnologia',
    description:
      'Linguagem utilizada para consultar, manipular e gerenciar dados em bancos de dados relacionais.',
  },

  'Power BI': {
    title: 'Power BI',
    type: 'Tecnologia',
    description:
      'Plataforma utilizada para análise de dados, criação de relatórios e visualização de informações.',
  },

  'Apache Spark': {
    title: 'Apache Spark',
    type: 'Tecnologia',
    description: 'Framework utilizado para processamento distribuído de grandes volumes de dados.',
  },

  Pandas: {
    title: 'Pandas',
    type: 'Tecnologia',
    description: 'Biblioteca Python utilizada para manipulação e análise de dados.',
  },

  'Scikit-learn': {
    title: 'Scikit-learn',
    type: 'Tecnologia',
    description: 'Biblioteca Python utilizada para aprendizado de máquina e análise preditiva.',
  },

  TensorFlow: {
    title: 'TensorFlow',
    type: 'Tecnologia',
    description:
      'Framework utilizado para desenvolvimento de modelos de aprendizado de máquina e inteligência artificial.',
  },

  Linux: {
    title: 'Linux',
    type: 'Tecnologia',
    description:
      'Sistema operacional amplamente utilizado em servidores, infraestrutura, desenvolvimento e segurança.',
  },

  Networking: {
    title: 'Networking',
    type: 'Tecnologia',
    description:
      'Conjunto de tecnologias e conceitos utilizados para comunicação entre dispositivos e sistemas em redes.',
  },

  Docker: {
    title: 'Docker',
    type: 'Tecnologia',
    description: 'Plataforma utilizada para criar, executar e distribuir aplicações em containers.',
  },

  Kubernetes: {
    title: 'Kubernetes',
    type: 'Tecnologia',
    description:
      'Plataforma de orquestração de containers utilizada para executar e gerenciar aplicações distribuídas.',
  },

  Terraform: {
    title: 'Terraform',
    type: 'Tecnologia',
    description:
      'Ferramenta de infraestrutura como código utilizada para provisionar e gerenciar recursos de infraestrutura.',
  },

  AWS: {
    title: 'AWS',
    type: 'Tecnologia',
    description:
      'Plataforma de computação em nuvem que oferece serviços de infraestrutura, armazenamento, banco de dados e muito mais.',
  },

  Azure: {
    title: 'Azure',
    type: 'Tecnologia',
    description:
      'Plataforma de computação em nuvem da Microsoft para desenvolvimento, implantação e gerenciamento de aplicações.',
  },

  'GitHub Actions': {
    title: 'GitHub Actions',
    type: 'Tecnologia',
    description:
      'Plataforma de automação utilizada para implementar pipelines de integração e entrega contínuas.',
  },

  'Burp Suite': {
    title: 'Burp Suite',
    type: 'Tecnologia',
    description:
      'Plataforma utilizada para testes de segurança e identificação de vulnerabilidades em aplicações web.',
  },

  OWASP: {
    title: 'OWASP',
    type: 'Tecnologia',
    description:
      'Projeto dedicado a melhorar a segurança de aplicações e fornecer conhecimento sobre vulnerabilidades e boas práticas.',
  },

  Prometheus: {
    title: 'Prometheus',
    type: 'Tecnologia',
    description:
      'Sistema de monitoramento e coleta de métricas utilizado em ambientes de infraestrutura e aplicações.',
  },

  Grafana: {
    title: 'Grafana',
    type: 'Tecnologia',
    description: 'Plataforma utilizada para visualização e monitoramento de métricas e dados.',
  },

  // Carreiras

  'Frontend Developer': {
    title: 'Frontend Developer',
    type: 'Carreira',
    description:
      'Profissional responsável pela construção das interfaces e experiências que os usuários utilizam diretamente.',
  },

  'Backend Developer': {
    title: 'Backend Developer',
    type: 'Carreira',
    description:
      'Profissional responsável pela lógica de negócio, APIs, serviços, autenticação e integração com dados.',
  },

  'Full Stack Developer': {
    title: 'Full Stack Developer',
    type: 'Carreira',
    description:
      'Profissional que atua tanto no desenvolvimento frontend quanto backend de aplicações.',
  },

  'Software Developer': {
    title: 'Software Developer',
    type: 'Carreira',
    description:
      'Profissional responsável por projetar, desenvolver e manter aplicações de software.',
  },

  'Software Engineer': {
    title: 'Software Engineer',
    type: 'Carreira',
    description:
      'Profissional que atua no desenvolvimento e evolução de sistemas, considerando arquitetura, qualidade e manutenção.',
  },

  'Software Architect': {
    title: 'Software Architect',
    type: 'Carreira',
    description:
      'Profissional responsável por definir a arquitetura e principais decisões técnicas de sistemas de software.',
  },

  'QA Engineer': {
    title: 'QA Engineer',
    type: 'Carreira',
    description:
      'Profissional responsável por garantir a qualidade e confiabilidade de aplicações por meio de processos e testes.',
  },

  'Test Analyst': {
    title: 'Test Analyst',
    type: 'Carreira',
    description:
      'Profissional responsável por planejar, executar e analisar testes para validar aplicações e sistemas.',
  },

  'Data Analyst': {
    title: 'Data Analyst',
    type: 'Carreira',
    description: 'Profissional que analisa dados para gerar informações e apoiar decisões.',
  },

  'Data Engineer': {
    title: 'Data Engineer',
    type: 'Carreira',
    description:
      'Profissional responsável por construir sistemas e pipelines para processamento de dados.',
  },

  'Data Scientist': {
    title: 'Data Scientist',
    type: 'Carreira',
    description:
      'Profissional que utiliza estatística, programação e machine learning para extrair conhecimento de dados.',
  },

  'Machine Learning Engineer': {
    title: 'Machine Learning Engineer',
    type: 'Carreira',
    description:
      'Profissional responsável por desenvolver, implementar e manter soluções baseadas em aprendizado de máquina.',
  },

  'Security Analyst': {
    title: 'Security Analyst',
    type: 'Carreira',
    description: 'Profissional que monitora e protege sistemas contra ameaças de segurança.',
  },

  'Cybersecurity Analyst': {
    title: 'Cybersecurity Analyst',
    type: 'Carreira',
    description:
      'Profissional especializado na identificação, análise e resposta a ameaças de segurança digital.',
  },

  'Application Security Engineer': {
    title: 'Application Security Engineer',
    type: 'Carreira',
    description:
      'Profissional especializado em identificar e reduzir vulnerabilidades de segurança em aplicações.',
  },

  'Security Engineer': {
    title: 'Security Engineer',
    type: 'Carreira',
    description:
      'Profissional responsável por projetar e implementar soluções para proteger sistemas e infraestrutura.',
  },

  'Cloud Security Engineer': {
    title: 'Cloud Security Engineer',
    type: 'Carreira',
    description:
      'Profissional especializado na proteção de infraestrutura, aplicações e dados em ambientes de nuvem.',
  },

  'Cloud Engineer': {
    title: 'Cloud Engineer',
    type: 'Carreira',
    description:
      'Profissional responsável por projetar, implementar e administrar infraestrutura em ambientes de nuvem.',
  },

  'Cloud Architect': {
    title: 'Cloud Architect',
    type: 'Carreira',
    description:
      'Profissional responsável por projetar arquiteturas de soluções utilizando serviços de computação em nuvem.',
  },

  'DevOps Engineer': {
    title: 'DevOps Engineer',
    type: 'Carreira',
    description:
      'Profissional responsável por automação, infraestrutura e processos de entrega contínua de software.',
  },

  'Platform Engineer': {
    title: 'Platform Engineer',
    type: 'Carreira',
    description:
      'Profissional responsável por criar e manter plataformas e ferramentas que facilitam o desenvolvimento e operação de aplicações.',
  },

  SRE: {
    title: 'SRE',
    type: 'Carreira',
    description:
      'Profissional focado em confiabilidade, disponibilidade, desempenho e operação de sistemas em escala.',
  },

  'Site Reliability Engineer': {
    title: 'Site Reliability Engineer',
    type: 'Carreira',
    description:
      'Profissional responsável por aplicar práticas de engenharia para garantir a confiabilidade e disponibilidade de sistemas.',
  },
  'UX Designer': {
    title: 'UX Designer',
    type: 'Carreira',
    description:
      'Profissional responsável por pesquisar usuários, identificar problemas e projetar experiências digitais úteis, acessíveis e eficientes.',
  },

  'UI Designer': {
    title: 'UI Designer',
    type: 'Carreira',
    description:
      'Profissional especializado na criação visual de interfaces, trabalhando com layouts, tipografia, cores, componentes e sistemas de design.',
  },

  'Product Designer': {
    title: 'Product Designer',
    type: 'Carreira',
    description:
      'Profissional que atua no design de produtos digitais, combinando experiência do usuário, interface, negócio e necessidades dos usuários.',
  },
  'UI Developer': {
    title: 'UI Developer',
    type: 'Carreira',
    description:
      'Profissional especializado na implementação de interfaces digitais, transformando designs e protótipos em componentes funcionais, responsivos e acessíveis.',
  },
}
