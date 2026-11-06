
import { firstLesson } from './firstLesson'
import { secondLesson } from './secondLesson'

export type LessonContent = {
  id: string
  title: string
  xp: number
  sections: {
    title: string
    content: string
  }[]
  questions: {
    id: string
    statement: string
    options: string[]
    correctAnswer: number
    explanation: string
  }[]
}

export const lessonCatalog: Record<string, LessonContent> = {
  [firstLesson.id]: firstLesson,
  [secondLesson.id]: secondLesson,
}

