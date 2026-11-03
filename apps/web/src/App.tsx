import { useState } from 'react'
import { Sidebar, type Page } from './components/layout/Sidebar'
import { Header } from './components/layout/Header'
import { Dashboard } from './pages/Dashboard'

const pageTitles: Record<Page, string> = {
  dashboard: 'Dashboard',
  aprender: 'Aprender',
  conquistas: 'Conquistas',
  perfil: 'Meu perfil',
}

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('dashboard')
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background text-white">
      <Sidebar
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
      />

      <div className="min-h-screen md:ml-64">
        <Header
          title={pageTitles[currentPage]}
          onMenuClick={() => setMenuOpen(true)}
        />

        <main className="p-5 md:p-8">
          {currentPage === 'dashboard' ? (
            <Dashboard
              onStartLearning={() => setCurrentPage('aprender')}
            />
          ) : (
            <section className="mx-auto max-w-6xl rounded-2xl border border-slate-800 bg-surface p-8">
              <p className="mb-2 text-sm font-semibold text-accent">
                EM DESENVOLVIMENTO
              </p>
              <h2 className="mb-3 text-2xl font-bold">
                {pageTitles[currentPage]}
              </h2>
              <p className="text-muted">
                Esta seção será implementada nas próximas etapas da Codexia.
              </p>
            </section>
          )}
        </main>
      </div>
    </div>
  )
}

export default App
