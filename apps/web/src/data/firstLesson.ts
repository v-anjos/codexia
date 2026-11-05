
export type Question = {
  id: string
  statement: string
  options: string[]
  correctAnswer: number
  explanation: string
}

export const firstLesson = {
  id: 'introducao',
  title: 'O que é programação?',
  xp: 50,
  sections: [
    {
      title: 'Programar é resolver problemas',
      content:
        'Programar significa criar instruções para que um computador realize tarefas. Essas instruções precisam ser claras, organizadas e compreensíveis para a máquina.',
    },
    {
      title: 'O que é um algoritmo?',
      content:
        'Um algoritmo é uma sequência finita de passos para resolver um problema. Uma receita de bolo, por exemplo, pode ser entendida como um algoritmo: há ingredientes, instruções e uma ordem de execução.',
    },
    {
      title: 'O que é uma linguagem de programação?',
      content:
        'É uma forma de escrever instruções que podem ser traduzidas ou interpretadas para execução pelo computador. Na Codexia, começaremos pela linguagem C.',
    },
  ],
  questions: [
    {
      id: 'q1',
      statement: 'Qual é a principal finalidade da programação?',
      options: [
        'Criar instruções para resolver problemas',
        'Apenas desenhar interfaces',
        'Substituir todos os componentes físicos',
        'Armazenar arquivos sem processamento',
      ],
      correctAnswer: 0,
      explanation:
        'Programar envolve construir instruções que permitem resolver problemas e automatizar tarefas.',
    },
    {
      id: 'q2',
      statement: 'O que melhor descreve um algoritmo?',
      options: [
        'Um tipo de computador',
        'Uma sequência organizada de passos',
        'Um componente eletrônico',
        'Um programa obrigatoriamente escrito em C',
      ],
      correctAnswer: 1,
      explanation:
        'Algoritmos descrevem passos para resolver problemas e podem existir mesmo sem uma linguagem de programação.',
    },
    {
      id: 'q3',
      statement: 'Qual linguagem será utilizada na primeira trilha da Codexia?',
      options: ['Python', 'Java', 'C', 'JavaScript'],
      correctAnswer: 2,
      explanation:
        'A primeira trilha da Codexia ensinará os fundamentos da linguagem C.',
    },
  ] satisfies Question[],
}

