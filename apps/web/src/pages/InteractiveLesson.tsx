
import { useState } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  RotateCcw,
  Trophy,
  XCircle,
} from 'lucide-react'
import { firstLesson } from '../data/firstLesson'

type InteractiveLessonProps = {
  alreadyCompleted: boolean
  onComplete: () => void
  onExit: () => void
}

export function InteractiveLesson({
  alreadyCompleted,
  onComplete,
  onExit,
}: InteractiveLessonProps) {
  const [step, setStep] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [confirmed, setConfirmed] = useState(false)
  const [finished, setFinished] = useState(false)

  const sectionsCount = firstLesson.sections.length
  const totalSteps = sectionsCount + firstLesson.questions.length
  const isReading = step < sectionsCount
  const questionIndex = step - sectionsCount
  const question = isReading
    ? null
    : firstLesson.questions[questionIndex]

  const correct = question !== null &&
    selected === question.correctAnswer

  function advance() {
    if (step === totalSteps - 1) {
      if (!alreadyCompleted) onComplete()
      setFinished(true)
      return
    }

    setStep((current) => current + 1)
    setSelected(null)
    setConfirmed(false)
  }

  function restart() {
    setStep(0)
    setSelected(null)
    setConfirmed(false)
    setFinished(false)
  }

  if (finished) {
    return (
      <section className="mx-auto max-w-2xl rounded-2xl border border-slate-800 bg-surface p-8 text-center">
        <Trophy className="mx-auto mb-5 text-amber-400" size={64} />

        <h2 className="text-3xl font-bold">
          Lição concluída!
        </h2>

        <p className="mt-4 text-muted">
          Você aprendeu os primeiros conceitos de programação.
        </p>

        <p className="mt-6 text-2xl font-bold text-accent">
          {alreadyCompleted ? 'Lição revisada' : `+${firstLesson.xp} XP`}
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={restart}
            className="flex items-center gap-2 rounded-xl border border-slate-700 px-5 py-3"
          >
            <RotateCcw size={18} />
            Revisar
          </button>

          <button
            type="button"
            onClick={onExit}
            className="rounded-xl bg-primary px-5 py-3 font-semibold"
          >
            Voltar à trilha
          </button>
        </div>
      </section>
    )
  }

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <button
        type="button"
        onClick={onExit}
        className="flex items-center gap-2 text-muted hover:text-white"
      >
        <ArrowLeft size={18} />
        Sair da lição
      </button>

      <div>
        <div className="mb-3 flex justify-between text-sm text-muted">
          <span>{firstLesson.title}</span>
          <span>Etapa {step + 1} de {totalSteps}</span>
        </div>

        <div
          role="progressbar"
          aria-label="Progresso da lição"
          aria-valuemin={0}
          aria-valuemax={totalSteps}
          aria-valuenow={step + 1}
          className="h-3 overflow-hidden rounded-full bg-slate-800"
        >
          <div
            className="h-full rounded-full bg-primary transition-all"
            style={{ width: `${((step + 1) / totalSteps) * 100}%` }}
          />
        </div>
      </div>

      <section className="rounded-2xl border border-slate-800 bg-surface p-6 md:p-8">
        {isReading ? (
          <>
            <BookOpen className="mb-5 text-accent" size={30} />

            <p className="mb-2 text-sm font-semibold text-accent">
              APRENDENDO
            </p>

            <h2 className="text-2xl font-bold">
              {firstLesson.sections[step].title}
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              {firstLesson.sections[step].content}
            </p>

            <button
              type="button"
              onClick={advance}
              className="mt-8 flex items-center gap-2 rounded-xl bg-primary px-5 py-3 font-semibold hover:bg-violet-500"
            >
              Continuar
              <ArrowRight size={18} />
            </button>
          </>
        ) : question ? (
          <>
            <p className="mb-3 text-sm font-semibold text-accent">
              DESAFIO {questionIndex + 1}
            </p>

            <h2 className="mb-6 text-2xl font-bold">
              {question.statement}
            </h2>

            <div className="space-y-3">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  type="button"
                  disabled={confirmed}
                  aria-pressed={selected === index}
                  onClick={() => setSelected(index)}
                  className={`w-full rounded-xl border p-4 text-left transition-colors ${
                    selected === index
                      ? 'border-primary bg-primary/15'
                      : 'border-slate-700 hover:border-slate-500'
                  } disabled:cursor-default`}
                >
                  <span className="mr-3 font-semibold text-accent">
                    {String.fromCharCode(65 + index)}.
                  </span>
                  {option}
                </button>
              ))}
            </div>

            {confirmed && (
              <div
                role="status"
                className={`mt-6 rounded-xl border p-4 ${
                  correct
                    ? 'border-green-500/40 bg-green-500/10'
                    : 'border-red-500/40 bg-red-500/10'
                }`}
              >
                <div className="mb-2 flex items-center gap-2 font-bold">
                  {correct ? (
                    <CheckCircle2 className="text-green-400" />
                  ) : (
                    <XCircle className="text-red-400" />
                  )}
                  {correct ? 'Resposta correta!' : 'Vamos tentar novamente!'}
                </div>

                <p className="text-sm text-slate-300">
                  {question.explanation}
                </p>
              </div>
            )}

            {!confirmed ? (
              <button
                type="button"
                disabled={selected === null}
                onClick={() => setConfirmed(true)}
                className="mt-8 rounded-xl bg-primary px-6 py-3 font-semibold disabled:cursor-not-allowed disabled:opacity-40"
              >
                Verificar resposta
              </button>
            ) : correct ? (
              <button
                type="button"
                onClick={advance}
                className="mt-8 flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold"
              >
                {step === totalSteps - 1 ? 'Concluir lição' : 'Continuar'}
                <ArrowRight size={18} />
              </button>
            ) : (
              <button
                type="button"
                onClick={() => {
                  setSelected(null)
                  setConfirmed(false)
                }}
                className="mt-8 rounded-xl bg-primary px-6 py-3 font-semibold"
              >
                Tentar novamente
              </button>
            )}
          </>
        ) : null}
      </section>
    </div>
  )
}

