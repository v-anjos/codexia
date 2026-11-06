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
import { lessonCatalog } from './data/lessons'

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
const [activeLessonId, setActiveLessonId] = useState<string | null>(null)

const activeLesson = activeLessonId
  ? lessonCatalog[activeLessonId]
  : undefined

useEffect(() => {
  saveProgress(progress)
}, [progress])


function completeLesson(lessonId: string) {
  const lesson = lessonCatalog[lessonId]

  if (!lesson) return

  setProgress((current) => {
    if (current.completedLessonIds.includes(lessonId)) {
      return current
    }

    return {
      completedLessonIds: [
        ...current.completedLessonIds,
        lessonId,
      ],
      xp: current.xp + lesson.xp,
    }
  })
}

  return (
    <div className="min-h-screen bg-background text-white">
      <Sidebar
        currentPage={currentPage}
        onNavigate={(page) => {
  setActiveLessonId(null)
  setCurrentPage(page)
}}
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
      />

      <div className="min-h-screen md:ml-64">
        <Header
  title={activeLesson ? activeLesson.title : pageTitles[currentPage]}
  onMenuClick={() => setMenuOpen(true)}
  xp={progress.xp}
/>

        
<main className="p-5 md:p-8">
  {activeLesson ? (
    <InteractiveLesson
      key={activeLesson.id}
      lesson={activeLesson}
      alreadyCompleted={progress.completedLessonIds.includes(
        activeLesson.id,
      )}
      onComplete={() => completeLesson(activeLesson.id)}
      onExit={() => setActiveLessonId(null)}
    />
  ) : currentPage === 'dashboard' ? (
    <Dashboard
      onStartLearning={() => setCurrentPage('aprender')}
    />
  ) : currentPage === 'aprender' ? (
    <Learn
      completedLessonIds={progress.completedLessonIds}
      onStartLesson={setActiveLessonId}
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
