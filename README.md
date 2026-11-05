# Codexia 🚀

**Aprenda a programar. Evolua a cada desafio.**

A **Codexia** é uma plataforma web gamificada de ensino de programação, desenvolvida para tornar o aprendizado acessível, interativo e motivador.

Inspirada em experiências de aprendizagem baseadas em progressão, desafios e recompensas, a plataforma tem como objetivo ensinar programação desde os primeiros conceitos até a resolução de problemas práticos.

A primeira trilha educacional será dedicada à **linguagem C**, com foco em iniciantes absolutos.

> **Status:** Em desenvolvimento — Frontend inicial.

## 🎯 Objetivos

- Ensinar programação de forma progressiva e acessível.
- Desenvolver o raciocínio lógico e o pensamento computacional.
- Oferecer exercícios interativos e desafios práticos.
- Incentivar a continuidade dos estudos por meio da gamificação.
- Permitir o acompanhamento individual do progresso.
- Disponibilizar um ambiente para escrever, executar e avaliar códigos.

## ✨ Funcionalidades

### Implementadas

- [x] Protótipo inicial em HTML.
- [x] Configuração do frontend com React e TypeScript.
- [x] Configuração do Vite.
- [x] Identidade visual dark mode.
- [x] Layout responsivo e navegação lateral.
- [x] Dashboard inicial do estudante.
- [x] Trilha introdutória de programação em C.
- [x] Organização das unidades e lições.
- [x] Primeira lição interativa: O que é programação?
- [x] Quiz com feedback imediato.
- [x] Sistema inicial de XP.
- [x] Persistência local do progresso com localStorage.

### Em desenvolvimento

- [ ] Desbloqueio progressivo das lições.
- [ ] Segunda lição: Seu primeiro programa em C.
- [ ] Editor interativo de código.
- [ ] Acompanhamento completo do progresso.

### Planejadas

- [ ] Cadastro e autenticação de usuários.
- [ ] Editor interativo de código C.
- [ ] Compilação e execução segura de programas.
- [ ] Correção automática de exercícios.
- [ ] Sistema de XP e níveis.
- [ ] Conquistas e recompensas.
- [ ] Sequências diárias de estudo.
- [ ] Ranking de estudantes.
- [ ] Painel administrativo.
- [ ] Relatórios de desempenho.
- [ ] Novas linguagens de programação.

## 🛠️ Tecnologias

### Frontend

- **React:** construção de interfaces.
- **TypeScript:** desenvolvimento com tipagem estática.
- **Vite:** ambiente de desenvolvimento e build.
- **Tailwind CSS:** estilização da interface.
- **Lucide React:** biblioteca de ícones.

### Backend — Planejado

- Node.js
- NestJS
- PostgreSQL
- Prisma
- Redis e BullMQ

### Execução de código — Planejada

- GCC para compilação de programas C.
- Ambiente isolado para execução segura.
- Testes automatizados para avaliação das soluções.

codexia/
├── apps/
│   └── web/
│       ├── public/
│       ├── src/
│       │   ├── components/
│       │   │   └── layout/
│       │   │       ├── Header.tsx
│       │   │       └── Sidebar.tsx
│       │   ├── data/
│       │   │   ├── firstLesson.ts
│       │   │   ├── learningPath.ts
│       │   │   └── progress.ts
│       │   ├── pages/
│       │   │   ├── Dashboard.tsx
│       │   │   ├── InteractiveLesson.tsx
│       │   │   └── Learn.tsx
│       │   ├── App.tsx
│       │   ├── index.css
│       │   └── main.tsx
│       ├── package.json
│       └── vite.config.ts
├── docs/
│   └── prototypes/
│       └── index-v0.1.html
└── README.md

A estrutura será expandida conforme os módulos forem implementados.

## 🚀 Como executar o projeto

### Pré-requisitos

É necessário ter instalado:

- Node.js compatível com a versão do Vite utilizada.
- npm.
- Git.

### 1. Clonar o repositório

```bash
git clone https://github.com/v-anjos/codexia.git
```

### 2. Acessar o frontend

```bash
cd codexia/apps/web
```

### 3. Instalar as dependências

```bash
npm install
```

### 4. Iniciar o servidor de desenvolvimento

```bash
npm run dev
```

Abra o endereço informado pelo Vite, normalmente:

`http://localhost:5173`

### 5. Gerar a versão de produção

```bash
npm run build
```

Os arquivos gerados estarão no diretório `dist/`.

## 🎮 Metodologia de aprendizagem

A Codexia será estruturada em trilhas divididas em unidades, lições e desafios.

Cada lição apresentará conceitos fundamentais de programação, seguidos de atividades práticas.

Entre os formatos de exercícios planejados estão:

1. Questões de múltipla escolha.
2. Preenchimento de trechos de código.
3. Organização de instruções.
4. Interpretação da saída de programas.
5. Correção de erros.
6. Desenvolvimento de programas completos.

O desempenho do estudante será utilizado para acompanhar sua evolução e identificar conteúdos que precisam de revisão.

## 🗺️ Roadmap

| Etapa | Descrição | Status |
|---|---|---|
| 1 | Planejamento e requisitos | Concluído |
| 2 | Protótipo HTML inicial | Concluído |
| 3 | Configuração React + TypeScript | Concluído |
| 4 | Design system e identidade visual | Concluído |
| 5 | Layout e navegação | Concluído |
| 6 | Dashboard inicial | Concluído |
| 7 | Trilha introdutória de C | Concluído |
| 8 | Primeira lição interativa e quiz | Concluído |
| 9 | XP e persistência local | Concluído |
| 10 | Segunda lição e desbloqueio progressivo | Próxima etapa |
| 11 | Motor reutilizável de lições | Planejado |
| 12 | Editor e execução de código C | Planejado |
| 13 | Backend e banco de dados | Planejado |
| 14 | Autenticação e perfis | Planejado |
| 15 | Gamificação avançada | Planejado |
| 16 | Testes, segurança e publicação | Planejado |

## 🤝 Contribuições

O projeto está em desenvolvimento inicial.

Futuramente, serão disponibilizadas orientações para contribuições, abertura de issues e envio de pull requests.

## 📄 Licença

A licença do projeto ainda será definida.

Até que uma licença seja publicada, a disponibilização do código no GitHub não implica autorização geral para reutilização, modificação ou redistribuição.

---

**Codexia — Learn. Code. Evolve.**

*Transformando conhecimento em código, um desafio de cada vez.*
