import footballImg from './assets/football.webp';
import consensusImg from './assets/consensus_2025.webp';
import rockClimb from './assets/r_climb.webp';
import Navbar from './components/Navbar';
import { projects } from './data/projects';

function App() {
  return (
    <>
      <Navbar />
      <div className='min-h-screen bg-[#09090b] font-sans text-[#e4e4e7] antialiased'>
        {/* Intro */}
        <section
          id='home'
          className='mx-auto max-w-[860px] px-5 pb-14 pt-[72px] sm:px-10 scroll-mt-11'
          aria-label='Introduction'
        >
          <div className='inline-flex items-center gap-[7px] text-[11px] tracking-[0.12em] uppercase text-[#4F8EF7] border border-[#4F8EF7]/40 bg-[#4F8EF7]/10 px-[14px] py-[5px] rounded-[3px] mb-8'>
            {/* blinking dot */}
            <span className='w-[6px] h-[6px] bg-[#4F8EF7] rounded-full animate-pulse' />
            CS Student @ Dalhousie
          </div>

          <h1 className='font-display text-[clamp(40px,8vw,72px)] font-extrabold leading-[0.96] tracking-[-0.03em] text-white'>
            Julian
            <br />
            <span className='text-[#4F8EF7]'>McCarty</span>
          </h1>

          <p className='mt-5 max-w-[480px] text-[15px] leading-relaxed text-zinc-400 sm:text-base'>
            Fourth Year Co-op Computer Science Student | Dalhousie Football
            Strong intrests in AI/ML!
          </p>

          <div className='mt-8 flex flex-wrap gap-2.5'>
            <a
              className='inline-flex cursor-pointer items-center gap-2 rounded-sm bg-[#4F8EF7] px-[18px] py-2.5 text-xs font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:bg-[#3a7af5]'
              href='https://github.com/CourtKingJuJu'
              target='_blank'
              rel='noreferrer'
            >
              GitHub
            </a>
            <a
              className='inline-flex cursor-pointer items-center gap-2 rounded-sm border border-white/12 px-[18px] py-2.5 text-xs font-medium uppercase tracking-[0.08em] text-zinc-400 transition-colors hover:border-[#4F8EF7] hover:text-[#4F8EF7]'
              href='https://www.linkedin.com/in/julian-mccarty-a34380291/'
              target='_blank'
              rel='noreferrer'
            >
              LinkedIn
            </a>
          </div>

          <div className='mt-12 h-px w-12 bg-linear-to-r from-[#4F8EF7] to-transparent' />
        </section>

        {/* About Me */}
        <section className='mx-auto max-w-[860px] border-t border-white/[0.07] px-5 py-14 sm:px-10'>
          <div className='mb-9 flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-[#4F8EF7]'>
            <span className='shrink-0'>01 — About Me</span>
            <div className='h-px flex-1 bg-white/10'></div>
          </div>

          <div className='grid grid-cols-1 items-start gap-11 lg:grid-cols-[1.2fr_1fr]'>
            {/* Text column */}
            <div className='text-left'>
              <h2 className='text-xl font-semibold tracking-tight text-[#4F8EF7] sm:text-2xl'>
                Background
              </h2>

              <div className='mt-4 space-y-[14px] text-sm leading-relaxed text-zinc-400 sm:text-base sm:leading-[1.9]'>
                <p>
                  My name is Julian McCarty. I am a fourth-year co-op Computer
                  Science student at Dalhousie, and I also play Football! Along
                  with Football, I participated in multiple other
                  extracurricular activities, such as being a Developer with the
                  Dalhousie Blockchain Society.
                </p>

                <p>
                  Additionally, with my CS degree, I am working towards a
                  certificate in ML & AI at Dalhousie. I am very interested in
                  ML & AI, specifically Reinforcement Learning, and would love
                  to continue working in the field to some degree after school.
                  I really enjoy hearing different perspectives about the topic
                  in ethics or just general discussion, and would love to hear
                  what you think about it!
                </p>

                <p>
                  When I am not working on school or projects, I love hanging
                  out with friends, playing pickup sports, specifically
                  basketball, and learning new things.
                </p>
              </div>
            </div>

            {/* Image column */}
            <div className='grid gap-3'>
              <div className='overflow-hidden rounded-lg border border-white/[0.07] bg-[#18181f]'>
                <div className='group overflow-hidden'>
                  <img
                    src={footballImg}
                    alt='Football'
                    className='block h-[150px] w-full object-cover transition duration-500 group-hover:scale-[1.04]'
                  />
                </div>
                <p className='border-t border-white/[0.07] px-2.5 py-2 text-[10px] uppercase tracking-[0.06em] text-zinc-500'>
                  AFL Football Championship Game
                </p>
              </div>

              <div className='overflow-hidden rounded-lg border border-white/[0.07] bg-[#18181f]'>
                <div className='group overflow-hidden'>
                  <img
                    src={consensusImg}
                    alt='Second'
                    className='block h-[150px] w-full object-cover transition duration-500 group-hover:scale-[1.04]'
                  />
                </div>
                <p className='border-t border-white/[0.07] px-2.5 py-2 text-[10px] uppercase tracking-[0.06em] text-zinc-500'>
                  2025 Consensus Hackathon
                </p>
              </div>
              <div className='overflow-hidden rounded-lg border border-white/[0.07] bg-[#18181f]'>
                <div className='group overflow-hidden'>
                  <img
                    src={rockClimb}
                    alt='Second'
                    className='block h-[150px] w-full object-cover transition duration-500 group-hover:scale-[1.04]'
                  />
                </div>
                <p className='border-t border-white/[0.07] px-2.5 py-2 text-[10px] uppercase tracking-[0.06em] text-zinc-500'>
                  Rock Climbing
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section
          id='projects'
          className='mx-auto max-w-[860px] border-t border-white/[0.07] px-5 py-14 sm:px-10 scroll-mt-11'
        >
          <div className='mb-9 flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-[#4F8EF7]'>
            <span className='shrink-0'>02 — Projects</span>
            <div className='h-px flex-1 bg-white/10'></div>
          </div>

          <div>
            <h2 className='flex justify-center text-xl font-semibold tracking-tight text-[#4F8EF7] sm:text-2xl'>
              My Work
            </h2>

            <div className='mt-6 grid gap-3.5 sm:grid-cols-2'>
              {projects.map((project) => (
                <div
                  key={project.title}
                  onClick={() => window.open(project.link, '_blank')}
                  className='cursor-pointer rounded-lg border border-white/[0.07] bg-[#111116] p-[22px] transition-all hover:border-[#4F8EF7] hover:-translate-y-1'
                >
                  <h3 className='text-sm font-semibold text-white'>
                    {project.title}
                  </h3>

                  <p className='mt-2 text-xs leading-[1.7] text-zinc-400'>
                    {project.desc}
                  </p>

                  <div className='mt-3 flex flex-wrap gap-2'>
                    {project.skills.map((skill) => (
                      <span
                        key={skill}
                        className='text-[10px] px-2 py-1 rounded-md bg-[#4F8EF7]/10 text-[#4F8EF7] border border-[#4F8EF7]/20'
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Work Experience */}
        <section
          id='experience'
          className='mx-auto max-w-[860px] border-t border-white/[0.07] px-5 py-14 sm:px-10 scroll-mt-11'
        >
          <div className='mb-9 flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-[#4F8EF7]'>
            <span className='shrink-0'>03 — Work Experience</span>
            <div className='h-px flex-1 bg-white/10'></div>
          </div>

          <div className='mx-auto max-w-[750px] overflow-x-auto px-2'>
            <div className='grid min-w-[min(100%,560px)] grid-cols-[1fr_3px_1fr] text-[#e4e4e7] sm:min-w-0'>
              {/* Row 1 */}
              <div className='m-5 text-right text-[#4F8EF7]'>June 2024</div>
              <div className='relative bg-white/20'>
                <div className='absolute left-1/2 top-0 h-[15px] w-[15px] -translate-x-1/2 rounded-full bg-white' />
              </div>
              <div className='m-5 rounded-lg border border-white/[0.07] bg-[#111116] p-6 shadow-lg'>
                <h2 className='m-0 text-[1.15em] font-bold'>
                  Dexter Construction
                </h2>
                <p className='mt-2 leading-normal text-zinc-400'>
                  After not receiving my first co-op, I decided to stay in the
                  city and work in construction. During this time, I worked on
                  personal projects and built my network. This made me lock in
                  🤣
                </p>
              </div>
              {/* Row 2 */}
              <div className='m-5 rounded-lg border border-white/[0.07] bg-[#111116] p-6 shadow-lg'>
                <h2 className='m-0 text-[1.15em] font-bold'>QuickFacts Inc</h2>
                <p className='mt-2 leading-normal text-zinc-400'>
                  QuickFacts was a startup and my first real co-op experience. I
                  worked as a fully remote Software Intern. During that time, I
                  got experience with both front-end and back-end JavaScript,
                  and worked on moving real data into a custom CMS we were
                  building.
                </p>
              </div>
              <div className='relative bg-white/20'>
                <div className='absolute left-1/2 top-0 h-[15px] w-[15px] -translate-x-1/2 rounded-full bg-white' />
              </div>
              <div className='m-5 text-[#4F8EF7]'>Jan 2025</div>
              {/* Row 3 */}
              <div className='m-5 text-right text-[#4F8EF7]'>Sep 2025</div>
              <div className='relative bg-white/20'>
                <div className='absolute left-1/2 top-0 h-[15px] w-[15px] -translate-x-1/2 rounded-full bg-white' />
              </div>
              <div className='m-5 rounded-lg border border-white/[0.07] bg-[#111116] p-6 shadow-lg'>
                <h2 className='m-0 text-[1.15em] font-bold'>
                  Geospectrum Technologies
                </h2>
                <p className='mt-2 leading-normal text-zinc-400'>
                  For my second co-op, I wanted to try working in person, so I
                  joined GTI as a Software QA Co-op. I helped write tests for
                  their product, RecView, and gained hands-on experience with
                  Unix and Jenkins pipelines. My favorite project at GTI was
                  writing all the tests for their Mission Server using Pytest.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Me */}
        <section
          id='contact'
          className='mx-auto max-w-[860px] border-t border-white/[0.07] px-5 py-14 sm:px-10 scroll-mt-11'
        >
          <div className='mb-9 flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-[#4F8EF7]'>
            <span className='shrink-0'>04 — Contact Me</span>
            <div className='h-px flex-1 bg-white/10'></div>
          </div>

          <div className='mx-auto max-w-2xl text-center'>
            <div>
              <p className='flex justify-center text-xl font-semibold tracking-tight text-[#4F8EF7] sm:text-2xl'>
                Looking to Connect!
              </p>
              <p className='mt-3 text-sm leading-relaxed text-zinc-400 sm:text-base'>
                Reach out about anything. Opportunities, projects, or just to
                chat.
              </p>
            </div>

            <div className='mt-8 rounded-[10px] border border-white/[0.07] bg-[#111116] px-8 py-8'>
              <h3 className='text-sm font-medium text-zinc-300 sm:text-base'>
                JulianMcCarty32@gmail.com
              </h3>
              <h3 className='mt-1 text-sm font-medium text-zinc-300 sm:text-base'>
                JulianMcCarty@dal.ca
              </h3>

              <div className='mt-6 flex flex-wrap justify-center gap-3'>
                <a
                  className='inline-flex items-center gap-2 rounded-md border border-white/0.12 px-4 py-2 text-sm font-medium text-zinc-300 transition-colors hover:border-[#4F8EF7] hover:bg-[#4F8EF7]/10 hover:text-white'
                  href='https://www.linkedin.com/in/julian-mccarty-a34380291/'
                  target='_blank'
                  rel='noreferrer'
                >
                  LinkedIn
                </a>

                <a
                  className='inline-flex items-center gap-2 rounded-md border border-white/0.12 px-4 py-2 text-sm font-medium text-zinc-300 transition-colors hover:border-[#4F8EF7] hover:bg-[#4F8EF7]/10 hover:text-white'
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

        <footer className='mx-auto max-w-[860px] border-t border-white/[0.07] px-5 py-5 text-center text-[10px] uppercase tracking-[0.08em] text-zinc-500 sm:px-10'>
          © {new Date().getFullYear()} Julian McCarty
        </footer>
      </div>
    </>
  );
}

export default App;
