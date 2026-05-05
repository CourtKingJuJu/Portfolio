import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-dvh bg-white text-zinc-700 antialiased dark:bg-zinc-950 dark:text-zinc-300">
      <div className="mx-auto flex min-h-dvh w-full max-w-[1126px] flex-col border-x border-zinc-200 px-5 dark:border-zinc-800 sm:px-8">
        <section
          id="center"
          className="flex flex-1 flex-col items-center justify-center gap-6 py-10 text-center sm:gap-7 sm:py-16"
        >
          <div className="space-y-3">
            <h1 className="text-4xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-100 sm:text-6xl">
              Julian McCarty
            </h1>
            <p className="text-base leading-relaxed sm:text-lg">
              Fourth Year Co-op Computer Science Student @ Dalhousie
            </p>
            <div className="mt-5 flex justify-center flex-wrap gap-3">
              <a
                className="inline-flex items-center gap-2 rounded-md bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-900 ring-1 ring-zinc-200 transition hover:bg-zinc-200 dark:bg-zinc-900 dark:text-zinc-100 dark:ring-zinc-800 dark:hover:bg-zinc-800"
                href="https://github.com/CourtKingJuJu"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                className="inline-flex items-center gap-2 rounded-md bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-900 ring-1 ring-zinc-200 transition hover:bg-zinc-200 dark:bg-zinc-900 dark:text-zinc-100 dark:ring-zinc-800 dark:hover:bg-zinc-800"
                href="https://www.linkedin.com/in/julian-mccarty-a34380291/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>

        <div className="h-12 border-t border-zinc-200 dark:border-zinc-800 sm:h-20" />

        <section className="py-10 sm:py-5">
          <div className="mx-auto max-w-3xl text-left">
            <h2 className="text-xl font-semibold flex justify-center tracking-tight text-zinc-950 dark:text-zinc-100 sm:text-2xl">
              About
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-base">
              I'm Julian McCarty. I am a fourth year computer science student at Dalhousie and I also play Football! Along with Football
              I participated in multiple other. 
            </p>
          </div>
        </section>

        <div className="h-12 border-t border-zinc-200 dark:border-zinc-800 sm:h-20" />

        <section className="py-10 sm:py-5">
          <div className="mx-auto max-w-3xl text-left">
            <h2 className="text-xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-100 sm:text-2xl flex justify-center">
              Projects
            </h2>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
                <h3 className="text-base font-semibold text-zinc-950 dark:text-zinc-100">
                  Project Title
                </h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  One sentence description. Add tech stack + outcome.
                </p>
              </div>
              <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
                <h3 className="text-base font-semibold text-zinc-950 dark:text-zinc-100">
                  Project Title
                </h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  One sentence description. Add tech stack + outcome.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="h-12 border-t border-zinc-200 dark:border-zinc-800 sm:h-20" />

        <section className="py-10 sm:py-5">
          <div className="mx-auto max-w-3xl text-left">
            <h2 className="text-xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-100 sm:text-2xl flex justify-center">
              Work Experience
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-base">
              Add roles, impact bullets, and dates here.
            </p>
          </div>
        </section>

        <div className="h-12 border-t border-zinc-200 dark:border-zinc-800 sm:h-20" />

        <section className="py-10 sm:py-5">
          <div className="mx-auto max-w-3xl text-left">
            <h2 className="text-xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-100 sm:text-2xl flex justify-center">
              Contact Me
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-base">
              Add an email link and/or a simple contact form.
            </p>
          </div>
        </section>

        <footer className="mt-auto border-t border-zinc-200 py-8 text-center text-xs text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
          © {new Date().getFullYear()} Julian McCarty
        </footer>
      </div>
    </div>
  )
}

export default App
