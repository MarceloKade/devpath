# DevPath

Aplicação web que transforma livros de tecnologia em **caminhos de carreira**, relacionando o conteúdo de cada livro com áreas de conhecimento, especializações, tecnologias e possíveis carreiras.

O projeto utiliza uma representação visual interativa para mostrar as relações entre **área → especialização → tecnologias → carreira**, permitindo que o usuário explore diferentes possibilidades de carreira a partir da leitura.

## 🎯 Objetivo

O DevPath foi desenvolvido como um projeto de portfólio com foco em **desenvolvimento frontend**, combinando consumo de API, processamento de dados e visualização interativa.

O projeto busca responder a uma pergunta:

> **"O que este livro pode representar dentro de uma carreira em tecnologia?"**

A partir do conteúdo do livro, o usuário pode descobrir possíveis:

- áreas de atuação;
- especializações;
- tecnologias;
- carreiras.

Além de apresentar essas relações, o projeto permite explorar o significado dos elementos encontrados no caminho de carreira.

## 🧪 Sugestões para testar

**Teste o DevPath:** [devpath-s2s2.vercel.app](https://devpath-s2s2.vercel.app/)

Experimente pesquisar pelos seguintes livros para explorar diferentes áreas e especializações:

| Livro                                     | Área / Especialização esperada                                 |
| ----------------------------------------- | -------------------------------------------------------------- |
| **Learning React**                        | Desenvolvimento Web → Frontend                                 |
| **Don't Make Me Think**                   | Design e UX → UX Design + UI Design                            |
| **Python for Data Analysis**              | Dados e Inteligência Artificial → Análise de Dados             |
| **Kubernetes: Up and Running**            | Cloud e DevOps → DevOps + Site Reliability Engineering         |
| **The Web Application Hacker's Handbook** | Segurança da Informação → Cybersecurity + Application Security |

Esses exemplos permitem testar diferentes cenários e observar como o DevPath identifica áreas e especializações com base no conteúdo dos livros.

## 🚀 Funcionalidades

- 🔎 Busca de livros por título, autor ou assunto
- 📚 Exibição dos resultados em cards
- 🧭 Identificação da área de tecnologia relacionada ao livro
- 🌳 Identificação de especializações com base no conteúdo do livro
- 💼 Sugestão de possíveis carreiras relacionadas
- 🗺️ Visualização interativa dos caminhos de carreira
- 🔍 Exploração das especializações, tecnologias e carreiras através do grafo
- 💬 Exibição de descrições ao selecionar os elementos do caminho

## 🎨 Interface

- 📱 Design responsivo
- 🎨 Interface construída com componentes Vue.js
- 🗺️ Representação visual dos caminhos de carreira através de um grafo interativo
- 💬 Exibição de descrições dos elementos selecionados

## 🧠 Classificação de Carreira

O DevPath possui uma lógica própria para relacionar o conteúdo dos livros com áreas, especializações e carreiras de tecnologia.

A classificação considera informações como:

- título;
- subtítulo;
- categorias;
- descrição.

Essas informações são comparadas com palavras-chave associadas às diferentes áreas e especializações.

A aplicação primeiro identifica a **área de conhecimento mais relevante** e, em seguida, verifica quais **especializações possuem evidências no conteúdo do livro**.

Uma especialização somente é apresentada quando existem termos relevantes relacionados a ela. Dessa forma, o sistema evita apresentar caminhos que não possuem relação com o conteúdo analisado.

Por exemplo:

```text
Learning React
       │
       ▼
Desenvolvimento Web
       │
       ▼
   Frontend
```

Já um livro que aborda conceitos de frontend, backend e desenvolvimento full stack pode apresentar múltiplas ramificações:

```text
                 Desenvolvimento Web
                  /       |        \
                 ▼        ▼         ▼
            Frontend   Backend   Full Stack
```

O objetivo é fazer com que as ramificações representem o conteúdo do livro, em vez de simplesmente exibir todas as especializações existentes naquela área.

## 🗺️ Visualização dos caminhos

O **Vue Flow** é utilizado para representar visualmente os caminhos identificados pela aplicação.

A estrutura pode ser representada como:

```text
Área
 │
 ├── Especialização
 │      ├── Tecnologias
 │      └── Carreiras
 │
 ├── Especialização
 │      ├── Tecnologias
 │      └── Carreiras
 │
 └── Especialização
        ├── Tecnologias
        └── Carreiras
```

Os elementos do grafo são interativos. Ao selecionar uma especialização, tecnologia ou carreira, a aplicação apresenta uma descrição explicando o conceito selecionado.

Por exemplo:

```text
Desenvolvimento Web
        │
        ▼
     Frontend  ← selecionar
        │
        ▼
┌────────────────────────────────┐
│ Frontend                       │
│                                │
│ Especialização voltada para a │
│ construção de interfaces e    │
│ experiências de usuário.      │
└────────────────────────────────┘
```

Essa abordagem transforma a recomendação em uma experiência visual e explorável.

## 🛠️ Tecnologias

### Frontend

- Vue.js
- TypeScript
- Vue Flow
- HTML5
- CSS3

## 🔌 Integrações

- Google Books API

## ☁️ Deploy

- Vercel
- Vercel Serverless Functions

## 🔧 Ferramentas

- Git
- GitHub
- Visual Studio Code

## 📂 Estrutura do projeto

```text
src/
├── components/
├── data/
├── services/
├── types/
├── ...
```

A aplicação separa os componentes de interface, os tipos utilizados pelo projeto, os dados das áreas e especializações e a lógica responsável pela classificação dos livros.

## 🚀 Executando localmente

Clone o repositório:

```bash
git clone https://github.com/MarceloKade/devpath.git
```

Entre no diretório:

```bash
cd devpath
```

Instale as dependências:

```bash
npm install
```

Configure as variáveis de ambiente:

```bash
cp .env.example .env
```

Edite o arquivo `.env` e informe sua chave da Google Books API:

```env
GOOGLE_BOOKS_API_KEY="SUA_CHAVE_DA_API_AQUI"
```

Execute o projeto:

```bash
vercel dev
```

A aplicação estará disponível no endereço local informado pelo Vercel CLI.

## 🔐 Variáveis de ambiente

O projeto utiliza uma variável de ambiente para acessar a Google Books API.

O arquivo `.env.example` é disponibilizado no repositório como modelo:

```env
GOOGLE_BOOKS_API_KEY="SUA_CHAVE_DA_API_AQUI"
```

Após clonar o projeto, copie o arquivo `.env.example` para `.env` e substitua o valor pela sua chave da API.

O arquivo `.env` contém informações sensíveis e **não deve ser versionado no Git**.

> Nunca publique chaves de API ou outras credenciais no repositório.

## 📌 Roadmap

- [ ] Ampliar a base de áreas e especializações
- [ ] Adicionar novos critérios de classificação
- [ ] Adicionar novas fontes de informação além da Google Books API
- [ ] Evoluir a personalização dos caminhos de carreira
- [ ] Adicionar novos recursos de interação e exploração do grafo

## 👨‍💻 Autor

**Marcelo Cardoso Kade**
