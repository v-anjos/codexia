
import {
  BookOpen,
  CheckCircle2,
  Clock3,
  Code2,
  LockKeyhole,
  Play,
} from 'lucide-react'
import { learningPath} from '../data/learningPath'

type LearnProps = {
  completedLessonIds: string[]
  onStartLesson: () => void
}

export function Learn({
  completedLessonIds,
  onStartLesson,
}: LearnProps) {

  const totalLessons = learningPath.reduce(
    (total, unit) => total + unit.lessons.length,
    0,
  )

  // O progresso será integrado ao sistema de lições futuramente.
  const completedLessons = completedLessonIds.length
  const progress = Math.round((completedLessons / totalLessons) * 100)

  
  return (
    <div className="mx-auto max-w-5xl space-y-8">
      <section className="rounded-2xl border border-violet-500/30 bg-gradient-to-r from-violet-950 to-surface p-6 md:p-8">
        <div className="mb-4 flex items-center gap-3 text-accent">
          <Code2 size={24} />
          <span className="text-sm font-semibold uppercase tracking-wider">
            Trilha de programação
          </span>
        </div>

        <h2 className="text-3xl font-bold md:text-4xl">
          Fundamentos da Linguagem C
        </h2>

        <p className="mt-3 max-w-2xl text-muted">
          Aprenda programação desde o início, avançando por unidades
          e desafios organizados para desenvolver sua lógica.
        </p>

        <div className="mt-8 flex justify-between text-sm">
          <span className="text-muted">
            {completedLessons} de {totalLessons} lições concluídas
          </span>
          <span className="font-semibold text-accent">{progress}%</span>
        </div>

        <div
          role="progressbar"
          aria-label="Progresso da trilha"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={progress}
          className="mt-3 h-3 overflow-hidden rounded-full bg-slate-700"
        >
          <div
            className="h-full rounded-full bg-primary transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </section>

      <div className="space-y-8">
        {learningPath.map((unit, unitIndex) => (
          <section
            key={unit.id}
            className="overflow-hidden rounded-2xl border border-slate-800 bg-surface"
          >
            <div className="border-b border-slate-800 p-6">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-accent">
                Unidade {unitIndex + 1}
              </p>
              <h3 className="text-xl font-bold">{unit.title}</h3>
              <p className="mt-2 text-sm text-muted">
                {unit.description}
              </p>
            </div>

            <div className="space-y-3 p-4 md:p-6">
              {unit.lessons.map((lesson, lessonIndex) => {
                const available = unitIndex === 0 && lessonIndex === 0
		const completed = completedLessonIds.includes(lesson.id)

                return (
                  <div
                    key={lesson.id}
                    className={`flex flex-col gap-4 rounded-xl border p-4 sm:flex-row sm:items-center ${
                      available
                        ? 'border-primary/50 bg-primary/10'
                        : 'border-slate-800 bg-background/40'
                    }`}
                  >
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${
                        available
                          ? 'bg-primary text-white'
                          : 'bg-slate-800 text-muted'
                      }`}
                    >
                      {available ? (
                        <BookOpen size={22} />
                      ) : (
                        <LockKeyhole size={20} />
                      )}
                    </div>

                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold">{lesson.title}</h4>
                      <p className="mt-1 text-sm text-muted">
                        {lesson.description}
                      </p>
                      <p className="mt-2 flex items-center gap-1 text-xs text-muted">
                        <Clock3 size={14} />
                        {lesson.duration} min
                      </p>
                    </div>

                   {available ? (
  <button
    type="button"
    onClick={onStartLesson}
    className="flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2 font-semibold hover:bg-violet-500"
  >
    <Play size={16} />
    {completed ? 'Revisar' : 'Iniciar'}
  </button>
) : (
  <span className="flex items-center gap-2 text-sm text-muted">
    <LockKeyhole size={15} />
    Bloqueada
  </span>
)}
        </div>
        )
      })}
      </div>
          </section>
    ))}
      </div>

      <div className="flex items-center gap-3 rounded-xl border border-slate-800 bg-surface p-5">
        <CheckCircle2 className="shrink-0 text-accent" size={22} />
        <p className="text-sm text-muted">
          Novas lições serão liberadas conforme a evolução do sistema
          de aprendizagem.
        </p>
      </div>
    </div>
  )
}

