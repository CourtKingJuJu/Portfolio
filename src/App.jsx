import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-dvh bg-white text-zinc-700 antialiased dark:bg-zinc-950 dark:text-zinc-300">
      <div className="mx-auto flex min-h-dvh w-full max-w-[1126px] flex-col border-x border-zinc-200 px-5 dark:border-zinc-800 sm:px-8">
        <section
          id="center"
          className="flex flex-1 flex-col items-center justify-center gap-6 py-10 text-center sm:gap-7 sm:py-16"
        >
          <div className="relative h-[179px] w-[170px]">
            <img
              src={heroImg}
              className="absolute inset-0 m-auto h-[179px] w-[170px]"
              width="170"
              height="179"
              alt=""
            />
            <img
              src={reactLogo}
              className="absolute left-1/2 top-[34px] z-10 h-7 -translate-x-1/2 transform-[perspective(2000px)_rotateZ(300deg)_rotateX(44deg)_rotateY(39deg)_scale(1.4)]"
              alt="React logo"
            />
            <img
              src={viteLogo}
              className="absolute left-1/2 top-[107px] z-0 h-[26px] w-auto -translate-x-1/2 transform-[perspective(2000px)_rotateZ(300deg)_rotateX(40deg)_rotateY(39deg)_scale(0.8)]"
              alt="Vite logo"
            />
          </div>

          <div className="space-y-3">
            <h1 className="text-4xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-100 sm:text-6xl">
              Julian McCarty
            </h1>
            <p className="text-base leading-relaxed sm:text-lg">
              Fourth Year Computer Science Student @ Dalhousie
            </p>
          </div>

          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md bg-violet-600 px-4 py-2 text-sm font-medium text-white shadow-sm ring-1 ring-violet-600/20 transition hover:bg-violet-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-400"
              onClick={() => setCount((count) => count + 1)}
            >
              Count is {count}
            </button>

            <span className="text-sm text-zinc-500 dark:text-zinc-400">
              Editing <code className="rounded bg-zinc-100 px-2 py-1 font-mono text-[13px] text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100">src/App.jsx</code> will hot reload.
            </span>
          </div>
        </section>

        <div className="h-12 border-t border-zinc-200 dark:border-zinc-800 sm:h-20" />

        <section className="py-10 sm:py-14">
          <div id="social" className="mx-auto max-w-3xl text-left">
            <h2 className="text-xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-100 sm:text-2xl">
              Quick Intro
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-base">
              Add a short intro here: what you build, what you’re looking for, and what makes you different.
            </p>
          </div>
        </section>

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-3xl text-left">
            <h2 className="text-xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-100 sm:text-2xl">
              Quick Connections
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-base">
              LinkedIn, GitHub, (maybe) X/Twitter — put them as buttons below.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <a
                className="inline-flex items-center gap-2 rounded-md bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-900 ring-1 ring-zinc-200 transition hover:bg-zinc-200 dark:bg-zinc-900 dark:text-zinc-100 dark:ring-zinc-800 dark:hover:bg-zinc-800"
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                className="inline-flex items-center gap-2 rounded-md bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-900 ring-1 ring-zinc-200 transition hover:bg-zinc-200 dark:bg-zinc-900 dark:text-zinc-100 dark:ring-zinc-800 dark:hover:bg-zinc-800"
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>

        <div className="h-12 border-t border-zinc-200 dark:border-zinc-800 sm:h-20" />

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-3xl text-left">
            <h2 className="text-xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-100 sm:text-2xl">
              About
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-base">
              Replace this with a short paragraph about your interests, tech stack, and what you enjoy building.
            </p>
          </div>
        </section>

        <div className="h-12 border-t border-zinc-200 dark:border-zinc-800 sm:h-20" />

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-3xl text-left">
            <h2 className="text-xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-100 sm:text-2xl">
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

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-3xl text-left">
            <h2 className="text-xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-100 sm:text-2xl">
              Work Experience
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-base">
              Add roles, impact bullets, and dates here.
            </p>
          </div>
        </section>

        <div className="h-12 border-t border-zinc-200 dark:border-zinc-800 sm:h-20" />

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-3xl text-left">
            <h2 className="text-xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-100 sm:text-2xl">
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
