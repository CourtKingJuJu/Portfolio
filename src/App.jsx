import { useState } from 'react';
import footballImg from './assets/football.webp';
import consensusImg from './assets/consensus_2025.webp';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className='min-h-dvh bg-white text-zinc-700 antialiased dark:bg-zinc-950 dark:text-zinc-300'>
        <div className='mx-auto flex min-h-dvh w-full max-w-[1126px] flex-col'>
          <section
            id='center'
            className='flex flex-1 flex-col items-center justify-center gap-6 py-10 text-center sm:gap-7 sm:py-16'
          >
            <div className='space-y-3'>
              <h1 className='text-4xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-100 sm:text-6xl'>
                Julian McCarty
              </h1>
              <p className='text-base leading-relaxed sm:text-lg'>
                Fourth Year Co-op Computer Science Student @ Dalhousie
              </p>
              <div className='mt-5 flex justify-center flex-wrap gap-3'>
                <a
                  className='inline-flex items-center gap-2 rounded-md bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-900 ring-1 ring-zinc-200 transition hover:bg-zinc-200 dark:bg-zinc-900 dark:text-zinc-100 dark:ring-zinc-800 dark:hover:bg-zinc-800'
                  href='https://github.com/CourtKingJuJu'
                  target='_blank'
                  rel='noreferrer'
                >
                  GitHub
                </a>
                <a
                  className='inline-flex items-center gap-2 rounded-md bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-900 ring-1 ring-zinc-200 transition hover:bg-zinc-200 dark:bg-zinc-900 dark:text-zinc-100 dark:ring-zinc-800 dark:hover:bg-zinc-800'
                  href='https://www.linkedin.com/in/julian-mccarty-a34380291/'
                  target='_blank'
                  rel='noreferrer'
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </section>

          {/* About Me */}
          <section className='py-10 sm:py-5'>
            {/* Section Label */}
            <div className='flex items-center gap-3 mb-10 text-[10px] tracking-[0.2em] uppercase text-[#4F8EF7]'>
              <span>01 — About Me</span>
              <div className='flex-1 h-px bg-white/10'></div>
            </div>

            {/* Text Content */}
            <div className='mx-auto max-w-3xl text-center'>
              <h2 className='text-xl font-semibold tracking-tight text-[#4F8EF7] sm:text-2xl'>
                About
              </h2>

              <p className='mt-4 text-sm sm:text-base leading-relaxed text-zinc-400'>
                My name is Julian McCarty. I am a fourth year co-op computer
                science student at Dalhousie and I also play Football! Along
                with Football I participated in multiple other extra criculars
                such as hackathons and the Dalhousie Blockchain society as a
                developer. I am always open connecting or trying something new,
                so feel free to reach out.
              </p>

              <p className='mt-4 text-sm sm:text-base leading-relaxed text-zinc-400'>
                long with my CS degree I am working towards a certificate in ML
                & AI at Dalhousie. I am very intrested in ML & AI specifically
                Reinforcement Learning and would love to continue working in the
                field in some degree after school. I really enjoy hearing
                different perspectives about ML & AI in ethics or just general
                discussion and would love to hear what you think about it!
              </p>

              <p className='mt-4 text-sm sm:text-base leading-relaxed text-zinc-400'>
                When I am not working on school or projects I love hanging out
                with firends, playing pickup sports specifcally basketball and
                learning new things.
              </p>
            </div>

            {/* Image Section */}
            <div className='mt-12 grid gap-6 sm:grid-cols-2 max-w-4xl mx-auto'>
              {/* Image 1 */}
              <div className='group'>
                <div className='overflow-hidden rounded-xl border border-white/10'>
                  <img
                    src={footballImg}
                    alt='Football'
                    className='w-full h-64 object-cover transition duration-500 group-hover:scale-105'
                  />
                </div>
                <p className='mt-3 text-xs tracking-wide text-zinc-500'>
                  AFL Football Championship Game
                </p>
              </div>

              {/* Image 2 */}
              <div className='group'>
                <div className='overflow-hidden rounded-xl border border-white/10'>
                  <img
                    src={consensusImg}
                    alt='Second'
                    className='w-full h-64 object-cover transition duration-500 group-hover:scale-105'
                  />
                </div>
                <p className='mt-3 text-xs tracking-wide text-zinc-500'>
                  2025 Consensus Hackathon
                </p>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section className='py-10 sm:py-5'>
            <div className='flex items-center gap-3 mb-10 text-[10px] tracking-[0.2em] uppercase text-[#4F8EF7]'>
              <span>02 — Projects</span>
              <div className='flex-1 h-px bg-white/10'></div>
            </div>
            <div className='mx-auto max-w-3xl text-left'>
              <h2 className='text-xl font-semibold flex justify-center tracking-tight text-[#4F8EF7] sm:text-2xl'>
                Projects
              </h2>

              <div className='mt-6 grid gap-4 sm:grid-cols-2'>
                <div className='rounded-xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-950'>
                  <h3 className='text-base font-semibold text-zinc-950 dark:text-zinc-100'>
                    Project Title
                  </h3>
                  <p className='mt-2 text-sm text-zinc-600 dark:text-zinc-400'>
                    One sentence description. Add tech stack + outcome.
                  </p>
                </div>
                <div className='rounded-xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-950'>
                  <h3 className='text-base font-semibold text-zinc-950 dark:text-zinc-100'>
                    Project Title
                  </h3>
                  <p className='mt-2 text-sm text-zinc-600 dark:text-zinc-400'>
                    One sentence description. Add tech stack + outcome.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Work Experience */}
          <section className='py-10 sm:py-5'>
            <div className='flex items-center gap-3 mb-10 text-[10px] tracking-[0.2em] uppercase text-[#4F8EF7]'>
              <span>03 — Work Experience</span>
              <div className='flex-1 h-px bg-white/10'></div>
            </div>

            <div className='font-serif grid grid-cols-[1fr_3px_1fr] max-w-[750px] mx-auto p-6 text-white'>
              <div className='m-5 text-right text-[#4F8EF7]'>June 2024</div>

              <div className='relative bg-white'>
                <div className='absolute top-0 left-1/2 -translate-x-1/2 w-[15px] h-[15px] bg-white rounded-full' />
              </div>

              <div className='m-5 p-6 bg-white/20 shadow rounded-lg'>
                <h2 className='text-[1.15em] font-bold m-0'>
                  Dexter Construction
                </h2>
                <p className='leading-normal'>
                  After not reciving my first co-op I decided to stay in the
                  city and work Construction, work on personal projects and
                  build my network. This made me lock in 🤣
                </p>
              </div>

              <div className='m-5 p-6 bg-white/20 shadow rounded-lg'>
                <h2 className='text-[1.15em] font-bold m-0'>QuickFacts Inc</h2>
                <p className='leading-normal'>
                  My first real co-op as a Software Intern at a step up company
                  QuickFacts. I worked on the front and backend and got
                  experience moving data to the new custom CMS system we we're
                  making.
                </p>
                <p className='leading-normal'>
                  I didn't even remove the jumper 🤣
                </p>
              </div>

              <div className='relative bg-white'>
                <div className='absolute top-0 left-1/2 -translate-x-1/2 w-[15px] h-[15px] bg-white rounded-full' />
              </div>

              <div className='m-5 text-[#4F8EF7]'>Jan 2025</div>

              <div className='m-5 text-right text-[#4F8EF7]'>Sep 2025</div>

              <div className='relative bg-white'>
                <div className='absolute top-0 left-1/2 -translate-x-1/2 w-[15px] h-[15px] bg-white rounded-full' />
              </div>

              <div className='m-5 p-6 bg-white/20 shadow rounded-lg'>
                <h2 className='text-[1.15em] font-bold'>
                  Geospectrum Technologies Inc.
                </h2>
                <p className='leading-normal'>
                  I worked as a Software Quality Assurance co-op at GTI. At GTI
                  I got to learn multiple tools like Unix, along with test
                  autmation. Notably I got to test their mission server and help
                  desgin extend the PLC simulator with an HTTP Server.
                </p>
              </div>
            </div>
          </section>

          <section className='w-full'>
            <div className='flex items-center gap-3 mb-10 text-[10px] tracking-[0.2em] uppercase text-[#4F8EF7]'>
              <span>04 — Contact Me</span>
              <div className='flex-1 h-px bg-white/10'></div>
            </div>

            <div className='max-w-2xl mx-auto text-center'>
              <div>
                <p className='text-xl font-semibold flex justify-center tracking-tight text-[#4F8EF7] sm:text-2xl'>
                  Looking to Connect!
                </p>
                <p className='mt-3 text-sm sm:text-base leading-relaxed text-zinc-400'>
                  Reach out about anything — opportunities, projects, or just to
                  chat.
                </p>
              </div>

              <div className='mt-8 rounded-2xl border border-white/10 bg-zinc-900/40 backdrop-blur p-6'>
                <h3 className='text-sm sm:text-base font-medium text-zinc-300'>
                  JulianMcCarty32@gmail.com
                </h3>
                <h3 className='text-sm sm:text-base font-medium text-zinc-300 mt-1'>
                  JulianMcCarty@dal.ca
                </h3>

                <div className='mt-6 flex justify-center flex-wrap gap-3'>
                  <a
                    className='inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium text-zinc-300 border border-white/10 transition hover:text-white hover:border-[#4F8EF7] hover:bg-[#4F8EF7]/10'
                    href='https://www.linkedin.com/in/julian-mccarty-a34380291/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    LinkedIn
                  </a>

                  <a
                    className='inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium text-zinc-300 border border-white/10 transition hover:text-white hover:border-[#4F8EF7] hover:bg-[#4F8EF7]/10'
                    href='https://x.com/KingJuju00'
                    target='_blank'
                    rel='noreferrer'
                  >
                    Twitter
                  </a>
                </div>
              </div>
            </div>
          </section>

          <footer className='mt-auto border-t border-zinc-200 py-8 text-center text-xs text-zinc-500 dark:border-zinc-800 dark:text-zinc-400'>
            © {new Date().getFullYear()} Julian McCarty
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;
