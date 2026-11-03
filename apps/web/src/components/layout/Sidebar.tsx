import {
  BookOpen,
  LayoutDashboard,
  Trophy,
  UserRound,
  Terminal,
  X,
} from 'lucide-react'

export type Page = 'dashboard' | 'aprender' | 'conquistas' | 'perfil'

type SidebarProps = {
  currentPage: Page
  onNavigate: (page: Page) => void
  isOpen: boolean
  onClose: () => void
}

const navigation = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'aprender', label: 'Aprender', icon: BookOpen },
  { id: 'conquistas', label: 'Conquistas', icon: Trophy },
  { id: 'perfil', label: 'Perfil', icon: UserRound },
] as const

export function Sidebar({
  currentPage,
  onNavigate,
  isOpen,
  onClose,
}: SidebarProps) {
  return (
    <>
      {isOpen && (
        <button
          type="button"
          aria-label="Fechar menu"
          className="fixed inset-0 z-30 bg-black/60 md:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`
          fixed inset-y-0 left-0 z-40 w-64
          border-r border-slate-800 bg-surface p-5
          transition-transform duration-200
          md:translate-x-0
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <div className="mb-12 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-primary p-2">
              <Terminal size={24} />
            </div>

            <span className="text-2xl font-bold">
              codexia<span className="text-accent">_</span>
            </span>
          </div>

          <button
            type="button"
            className="md:hidden"
            aria-label="Fechar menu"
            onClick={onClose}
          >
            <X size={22} />
          </button>
        </div>

        <p className="mb-4 px-3 text-xs font-semibold uppercase tracking-wider text-muted">
          Menu principal
        </p>

        <nav aria-label="Navegação principal" className="space-y-2">
          {navigation.map((item) => {
            const Icon = item.icon
            const active = currentPage === item.id

            return (
              <button
                key={item.id}
                type="button"
                aria-current={active ? 'page' : undefined}
                onClick={() => {
                  onNavigate(item.id)
                  onClose()
                }}
                className={`
                  flex w-full items-center gap-3 rounded-xl
                  px-4 py-3 text-left transition-colors
                  ${
                    active
                      ? 'bg-primary font-semibold text-white'
                      : 'text-muted hover:bg-slate-800 hover:text-white'
                  }
                `}
              >
                <Icon size={20} />
                {item.label}
              </button>
            )
          })}
        </nav>

        <div className="absolute bottom-6 left-5 right-5 rounded-xl border border-slate-700 p-4">
          <p className="text-sm font-semibold text-accent">
            Codexia Alpha
          </p>
          <p className="mt-1 text-xs text-muted">
            Sua jornada na programação está começando.
          </p>
        </div>
      </aside>
    </>
  )
}
