import { Terminal, ArrowRight, Code2 } from 'lucide-react'

function App() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="max-w-xl text-center">

        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="bg-primary p-3 rounded-xl">
            <Terminal size={30} />
          </div>

          <h1 className="text-4xl font-bold tracking-tight">
            codexia<span className="text-accent">_</span>
          </h1>
        </div>

        <div className="inline-flex items-center gap-2 bg-surface border border-slate-700 rounded-full px-4 py-2 mb-6 text-sm text-accent">
          <Code2 size={16} />
          Sua jornada começa aqui
        </div>

        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Aprenda a programar.
          <span className="text-primary"> Evolua a cada desafio.</span>
        </h2>

        <p className="text-muted text-lg mb-8">
          Domine os fundamentos da linguagem C com lições
          interativas, desafios práticos e uma jornada gamificada.
        </p>

        <button
          type="button"
          className="inline-flex items-center gap-2 bg-primary hover:bg-violet-500 transition-colors px-6 py-3 rounded-xl font-semibold"
        >
          Começar jornada
          <ArrowRight size={18} />
        </button>

      </div>
    </main>
  )
}

export default App
