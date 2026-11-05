import { Flame, Menu, Zap } from 'lucide-react'

type HeaderProps = {
  title: string
  onMenuClick: () => void
  xp: number
}

export function Header({ title, onMenuClick, xp}: HeaderProps) {
  return (
    <header className="flex min-h-20 items-center justify-between gap-4 border-b border-slate-800 px-5 md:px-8">
      <div className="flex items-center gap-3">
        <button
          type="button"
          aria-label="Abrir menu"
          onClick={onMenuClick}
          className="rounded-lg p-2 hover:bg-surface md:hidden"
        >
          <Menu size={24} />
        </button>

        <h1 className="text-xl font-bold md:text-2xl">
          {title}
        </h1>
      </div>

      <div className="flex items-center gap-3 md:gap-6">
        <div className="flex items-center gap-2 text-amber-400">
          <Flame size={20} />
          <span className="font-semibold">0</span>
        </div>

        <div className="flex items-center gap-2 text-accent">
          <Zap size={20} />
          <span className="font-semibold">{xp} XP</span>
        </div>

        <div
          aria-label="Perfil demonstrativo"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-primary font-bold"
        >
          C
        </div>
      </div>
    </header>
  )
}
