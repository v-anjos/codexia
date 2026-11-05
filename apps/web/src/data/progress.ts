
export type StudentProgress = {
  completedLessonIds: string[]
  xp: number
}

const STORAGE_KEY = 'codexia:progress:v1'

export const initialProgress: StudentProgress = {
  completedLessonIds: [],
  xp: 0,
}

export function loadProgress(): StudentProgress {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)

    if (!saved) return { ...initialProgress, completedLessonIds: [] }

    const parsed: unknown = JSON.parse(saved)

    if (
      typeof parsed !== 'object' ||
      parsed === null ||
      !('completedLessonIds' in parsed) ||
      !Array.isArray(parsed.completedLessonIds) ||
      !parsed.completedLessonIds.every(
        (id: unknown) => typeof id === 'string',
      ) ||
      !('xp' in parsed) ||
      typeof parsed.xp !== 'number' ||
      !Number.isFinite(parsed.xp) ||
      parsed.xp < 0
    ) {
      return { ...initialProgress, completedLessonIds: [] }
    }

    return {
      completedLessonIds: parsed.completedLessonIds,
      xp: parsed.xp,
    }
  } catch {
    return { ...initialProgress, completedLessonIds: [] }
  }
}

export function saveProgress(progress: StudentProgress) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
  } catch {
    // A aplicação continua funcionando se o armazenamento estiver indisponível.
  }
}

