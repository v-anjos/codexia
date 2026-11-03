import {
  ArrowRight,
  BookOpen,
  Code2,
  Target,
  Trophy,
} from 'lucide-react'

type DashboardProps = {
  onStartLearning: () => void
}

export function Dashboard({ onStartLearning }: DashboardProps) {
  return (
    <div className="mx-auto max-w-6xl space-y-8">
      <section className="rounded-2xl border border-violet-500/30 bg-gradient-to-r from-violet-950 to-surface p-6 md:p-8">
        <p className="mb-3 text-sm font-semibold text-accent">
          BEM-VINDO À CODEXIA
        </p>

        <h2 className="mb-3 text-3xl font-bold">
          Sua jornada começa aqui! 🚀
        </h2>

        <p className="mb-6 max-w-2xl text-muted">
          Aprenda programação em C, desenvolva sua lógica e
          evolua resolvendo desafios práticos.
        </p>

        <button
          type="button"
          onClick={onStartLearning}
          className="flex items-center gap-2 rounded-xl bg-primary px-5 py-3 font-semibold transition-colors hover:bg-violet-500"
        >
          Começar a aprender
          <ArrowRight size={18} />
        </button>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        <StatCard
          icon={<BookOpen size={22} />}
          label="Lições concluídas"
          value="0"
          detail="Sua jornada está começando"
        />

        <StatCard
          icon={<Target size={22} />}
          label="Desafios resolvidos"
          value="0"
          detail="Pratique para evoluir"
        />

        <StatCard
          icon={<Trophy size={22} />}
          label="Conquistas"
          value="0"
          detail="Desbloqueie recompensas"
        />
      </section>

      <section className="rounded-2xl border border-slate-800 bg-surface p-6">
        <div className="mb-6 flex items-center gap-3">
          <Code2 className="text-accent" size={24} />
          <h3 className="text-xl font-bold">
            Sua primeira trilha
          </h3>
        </div>

        <div className="mb-4 flex items-center justify-between gap-3">
          <div>
            <h4 className="font-semibold">
              Fundamentos da Linguagem C
            </h4>
            <p className="mt-1 text-sm text-muted">
              Comece pelos conceitos essenciais.
            </p>
          </div>

          <span className="shrink-0 text-sm text-accent">
            0%
          </span>
        </div>

        <div
          role="progressbar"
          aria-label="Progresso da trilha de C"
          aria-valuenow={0}
          aria-valuemin={0}
          aria-valuemax={100}
          className="h-2 overflow-hidden rounded-full bg-slate-700"
        >
          <div className="h-full w-0 bg-primary" />
        </div>

        <button
          type="button"
          onClick={onStartLearning}
          className="mt-6 flex items-center gap-2 font-semibold text-accent hover:underline"
        >
          Explorar trilha
          <ArrowRight size={17} />
        </button>
      </section>
    </div>
  )
}

type StatCardProps = {
  icon: React.ReactNode
  label: string
  value: string
  detail: string
}

function StatCard({ icon, label, value, detail }: StatCardProps) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-surface p-6">
      <div className="mb-4 text-primary">{icon}</div>
      <p className="text-sm text-muted">{label}</p>
      <p className="my-2 text-3xl font-bold">{value}</p>
      <p className="text-xs text-muted">{detail}</p>
    </div>
  )
}
