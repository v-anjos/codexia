
export type Lesson = {
  id: string
  title: string
  description: string
  duration: number
}

export type LearningUnit = {
  id: string
  title: string
  description: string
  lessons: Lesson[]
}

export const learningPath: LearningUnit[] = [
  {
    id: 'fundamentos',
    title: 'Primeiros passos em C',
    description: 'Conheça a linguagem C e escreva seu primeiro programa.',
    lessons: [
      {
        id: 'introducao',
        title: 'O que é programação?',
        description: 'Entenda algoritmos, programas e linguagens.',
        duration: 5,
      },
      {
        id: 'primeiro-programa',
        title: 'Seu primeiro programa em C',
        description: 'Descubra como funciona o printf.',
        duration: 8,
      },
      {
        id: 'estrutura',
        title: 'Estrutura de um programa',
        description: 'Conheça main, bibliotecas e instruções.',
        duration: 10,
      },
    ],
  },
  {
    id: 'variaveis',
    title: 'Variáveis e dados',
    description: 'Aprenda a armazenar e manipular informações.',
    lessons: [
      {
        id: 'tipos',
        title: 'Tipos de dados',
        description: 'Explore int, float, char e double.',
        duration: 10,
      },
      {
        id: 'entrada-saida',
        title: 'Entrada e saída',
        description: 'Utilize printf e scanf.',
        duration: 12,
      },
      {
        id: 'operadores',
        title: 'Operadores',
        description: 'Realize operações matemáticas e comparações.',
        duration: 12,
      },
    ],
  },
  {
    id: 'decisoes',
    title: 'Tomada de decisões',
    description: 'Controle o fluxo dos programas.',
    lessons: [
      {
        id: 'if-else',
        title: 'Condições com if e else',
        description: 'Execute instruções conforme condições.',
        duration: 12,
      },
      {
        id: 'switch',
        title: 'Múltiplas escolhas',
        description: 'Conheça o comando switch.',
        duration: 10,
      },
    ],
  },
  {
    id: 'repeticoes',
    title: 'Estruturas de repetição',
    description: 'Automatize tarefas com laços.',
    lessons: [
      {
        id: 'while',
        title: 'Laço while',
        description: 'Repita instruções enquanto uma condição for verdadeira.',
        duration: 12,
      },
      {
        id: 'for',
        title: 'Laço for',
        description: 'Controle repetições com contadores.',
        duration: 12,
      },
    ],
  },
]

