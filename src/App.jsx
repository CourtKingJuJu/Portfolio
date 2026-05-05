import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-dvh bg-white text-zinc-700 antialiased dark:bg-zinc-950 dark:text-zinc-300">
        <div className="mx-auto flex min-h-dvh w-full max-w-[1126px] flex-col">
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

          {/* About Me */}
          <section className="py-10 sm:py-5">
            <div className="flex items-center gap-3 mb-10 text-[10px] tracking-[0.2em] uppercase text-[#4F8EF7]">
              <span>01 — About Me</span>
              <div className="flex-1 h-px bg-white/10"></div>
            </div>
            <div className="mx-auto max-w-3xl text-left">
              <h2 className="text-xl font-semibold flex justify-center tracking-tight text-[#4F8EF7] sm:text-2xl">
                About
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-base">
                I'm Julian McCarty. I am a fourth year computer science student at Dalhousie and I also play Football! Along with Football
                I participated in multiple other. 
              </p>
            </div>
          </section>

          {/* Projects */}
          <section className="py-10 sm:py-5">
            <div className="flex items-center gap-3 mb-10 text-[10px] tracking-[0.2em] uppercase text-[#4F8EF7]">
              <span>02 — Projects</span>
              <div className="flex-1 h-px bg-white/10"></div>
            </div>
            <div className="mx-auto max-w-3xl text-left">
              <h2 className="text-xl font-semibold flex justify-center tracking-tight text-[#4F8EF7] sm:text-2xl">
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

          {/* Work Experience */}
          <section className="py-10 sm:py-5">
            <div className="flex items-center gap-3 mb-10 text-[10px] tracking-[0.2em] uppercase text-[#4F8EF7]">
              <span>03 — Work Experience</span>
              <div className="flex-1 h-px bg-white/10"></div>
            </div>
            <div className="mx-auto max-w-3xl text-left">
              <h2 className="text-xl font-semibold flex justify-center tracking-tight text-[#4F8EF7] sm:text-2xl">
                Work Experience
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-base">
                Add roles, impact bullets, and dates here.
              </p>
            </div>
          </section>


          {/* Contact Me */}
          <section className="w-full">
            {/* Full-width Section Label */}
            <div className="flex items-center gap-3 mb-10 text-[10px] tracking-[0.2em] uppercase text-[#4F8EF7]">
              <span>04 — Contact Me</span>
              <div className="flex-1 h-px bg-white/10"></div>
            </div>

            {/* Centered Content */}
            <div className="max-w-2xl mx-auto text-center">
              <div>
                <p className="text-xl font-semibold flex justify-center tracking-tight text-[#4F8EF7] sm:text-2xl">
                  Looking to Connect!
                </p>
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-zinc-400">
                  Reach out about anything — opportunities, projects, or just to chat.
                </p>
              </div>

              <div className="mt-8 rounded-2xl border border-white/10 bg-zinc-900/40 backdrop-blur p-6">
                <h3 className="text-sm sm:text-base font-medium text-zinc-300">
                  JulianMcCarty32@gmail.com
                </h3>
                <h3 className="text-sm sm:text-base font-medium text-zinc-300 mt-1">
                  JulianMcCarty@dal.ca
                </h3>

                <div className="mt-6 flex justify-center flex-wrap gap-3">
                  <a
                    className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium text-zinc-300 border border-white/10 transition hover:text-white hover:border-[#4F8EF7] hover:bg-[#4F8EF7]/10"
                    href="https://www.linkedin.com/in/julian-mccarty-a34380291/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>

                  <a
                    className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium text-zinc-300 border border-white/10 transition hover:text-white hover:border-[#4F8EF7] hover:bg-[#4F8EF7]/10"
                    href="https://x.com/KingJuju00"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Twitter
                  </a>
                </div>
              </div>
            </div>
          </section>

          <footer className="mt-auto border-t border-zinc-200 py-8 text-center text-xs text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
            © {new Date().getFullYear()} Julian McCarty
          </footer>
        </div>
      </div>
    </>
  )
}

export default App
