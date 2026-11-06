
import type { Question } from './firstLesson'

export const secondLesson = {
  id: 'primeiro-programa',
  title: 'Seu primeiro programa em C',
  xp: 50,
  sections: [
    {
      title: 'Conhecendo a linguagem C',
      content:
        'A linguagem C permite escrever programas que são compilados para execução pelo computador. Ela é utilizada em sistemas operacionais, aplicações e sistemas embarcados.',
    },
    {
      title: 'Nossa primeira biblioteca',
      content:
        '#include <stdio.h> disponibiliza declarações de funções de entrada e saída, incluindo printf. Essa diretiva é processada antes da compilação.',
    },
    {
      title: 'A função main',
      content:
        'A função main é o ponto de entrada de um programa C convencional. Escrever int main(void) indica que ela não recebe argumentos e retorna um número inteiro.',
    },
    {
      title: 'Exibindo mensagens',
      content:
        'printf("Olá, mundo!\\n"); exibe uma mensagem na saída padrão. O caractere especial \\n representa uma quebra de linha.',
    },
    {
      title: 'Seu primeiro código',
      content:
        '#include <stdio.h>\n\nint main(void) {\n    printf("Olá, mundo!\\n");\n    return 0;\n}',
    },
  ],
  questions: [
    {
      id: 'q1',
      statement: 'Qual biblioteca declara a função printf?',
      options: [
        'math.h',
        'stdio.h',
        'string.h',
        'stdlib.h',
      ],
      correctAnswer: 1,
      explanation:
        'O cabeçalho stdio.h contém a declaração de printf, utilizada para produzir saída formatada.',
    },
    {
      id: 'q2',
      statement: 'Qual é a função de main em um programa C convencional?',
      options: [
        'Declarar todas as variáveis globais',
        'Substituir o compilador',
        'Servir como ponto de entrada do programa',
        'Imprimir mensagens automaticamente',
      ],
      correctAnswer: 2,
      explanation:
        'A execução de um programa C hospedado começa por meio da função main.',
    },
    {
      id: 'q3',
      statement: 'O que printf("Codexia\\n"); exibe?',
      options: [
        'Codexia seguida de uma quebra de linha',
        'A palavra printf',
        'Uma mensagem de erro',
        'Nada, porque printf não imprime texto',
      ],
      correctAnswer: 0,
      explanation:
        'printf exibe o texto Codexia, e a sequência \\n representa uma quebra de linha.',
    },
  ] satisfies Question[],
}

