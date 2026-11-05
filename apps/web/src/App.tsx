import { useState } from 'react'
import { Sidebar, type Page } from './components/layout/Sidebar'
import { Header } from './components/layout/Header'
import { Dashboard } from './pages/Dashboard'
import { Learn } from './pages/Learn'
import { useEffect } from 'react'
import { InteractiveLesson } from './pages/InteractiveLesson'
import {
  loadProgress,
  saveProgress,
} from './data/progress'
import { firstLesson } from './data/firstLesson'

const pageTitles: Record<Page, string> = {
  dashboard: 'Dashboard',
  aprender: 'Aprender',
  conquistas: 'Conquistas',
  perfil: 'Meu perfil',
}

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('dashboard')
  const [menuOpen, setMenuOpen] = useState(false)
  const [progress, setProgress] = useState(loadProgress)
const [lessonOpen, setLessonOpen] = useState(false)

useEffect(() => {
  saveProgress(progress)
}, [progress])

function completeFirstLesson() {
  setProgress((current) => {
    if (current.completedLessonIds.includes(firstLesson.id)) {
      return current
    }

    return {
      completedLessonIds: [
        ...current.completedLessonIds,
        firstLesson.id,
      ],
      xp: current.xp + firstLesson.xp,
    }
  })
}

  return (
    <div className="min-h-screen bg-background text-white">
      <Sidebar
        currentPage={currentPage}
        onNavigate={(page) => {
 	setLessonOpen(false)
  	setCurrentPage(page)
	}}
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
      />

      <div className="min-h-screen md:ml-64">
        <Header
          title={pageTitles[currentPage]}
          onMenuClick={() => setMenuOpen(true)}
          xp={progress.xp}
        />

        <main className="p-5 md:p-8">
  {lessonOpen ? (
    <InteractiveLesson
      alreadyCompleted={progress.completedLessonIds.includes(firstLesson.id)}
      onComplete={completeFirstLesson}
      onExit={() => setLessonOpen(false)}
    />
  ) : currentPage === 'dashboard' ? (
    <Dashboard
      onStartLearning={() => setCurrentPage('aprender')}
    />
  ) : currentPage === 'aprender' ? (
    <Learn
      completedLessonIds={progress.completedLessonIds}
      onStartLesson={() => setLessonOpen(true)}
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
