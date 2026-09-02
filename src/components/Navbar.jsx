import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = ({ onRagSume, onHome, currentPage }) => {
  const [open, setOpen] = useState(false);

  const goHome = () => {
    if (currentPage !== 'home' && onHome) {
      onHome();

      setTimeout(() => {
        document.getElementById('home')?.scrollIntoView({
          behavior: 'smooth',
        });
      }, 0);
    } else {
      document.getElementById('home')?.scrollIntoView({
        behavior: 'smooth',
      });
    }

    setOpen(false);
  };

  const goToSection = (section) => {
    setOpen(false);

    if (currentPage !== 'home' && onHome) {
      onHome();

      setTimeout(() => {
        document.getElementById(section)?.scrollIntoView({
          behavior: 'smooth',
        });
      }, 0);

      return;
    }

    document.getElementById(section)?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  const goToRagSume = () => {
    setOpen(false);

    if (onRagSume) {
      onRagSume();
    }
  };

  return (
    <nav className='fixed top-0 z-50 w-full border-b border-white/[0.07] bg-[#111116]/80 backdrop-blur'>
      <div className='mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6 md:px-10'>
        {/* Logo */}
        <button
          onClick={goHome}
          className='font-extrabold text-[17px] text-white'
        >
          JM
          <span className='text-[#4F8EF7]'>.</span>
        </button>

        {/* Desktop Nav */}
        <div className='hidden md:flex items-center gap-1 text-[11px] tracking-[0.06em] uppercase'>
          <button
            onClick={goHome}
            className={`rounded px-3 py-1.5 transition ${
              currentPage === 'home'
                ? 'bg-[#4F8EF7]/10 text-[#4F8EF7]'
                : 'text-zinc-400 hover:bg-[#4F8EF7]/10 hover:text-[#4F8EF7]'
            }`}
          >
            Home
          </button>

          <button
            onClick={() => goToSection('projects')}
            className='rounded px-3 py-1.5 text-zinc-400 transition hover:bg-[#4F8EF7]/10 hover:text-[#4F8EF7]'
          >
            Projects
          </button>

          <button
            onClick={() => goToSection('experience')}
            className='rounded px-3 py-1.5 text-zinc-400 transition hover:bg-[#4F8EF7]/10 hover:text-[#4F8EF7]'
          >
            Experience
          </button>

          <button
            onClick={() => goToSection('contact')}
            className='rounded px-3 py-1.5 text-zinc-400 transition hover:bg-[#4F8EF7]/10 hover:text-[#4F8EF7]'
          >
            Contact
          </button>

          {/* Separator */}
          <div className='mx-2 h-4 w-px bg-white/15' />

          <button
            onClick={goToRagSume}
            className={`rounded px-3 py-1.5 transition ${
              currentPage === 'ragsume'
                ? 'bg-[#4F8EF7]/10 text-[#4F8EF7]'
                : 'text-zinc-400 hover:bg-[#4F8EF7]/10 hover:text-[#4F8EF7]'
            }`}
          >
            RagSume
          </button>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className='text-zinc-300 md:hidden'
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className='border-t border-white/[0.07] bg-[#111116] md:hidden'>
          <div className='flex flex-col px-4 py-3 text-[11px] uppercase tracking-[0.08em]'>
            <button
              onClick={goHome}
              className={`rounded px-3 py-3 text-left transition ${
                currentPage === 'home'
                  ? 'bg-[#4F8EF7]/10 text-[#4F8EF7]'
                  : 'text-zinc-400 hover:bg-[#4F8EF7]/10 hover:text-[#4F8EF7]'
              }`}
            >
              Home
            </button>

            <button
              onClick={() => goToSection('projects')}
              className='rounded px-3 py-3 text-left text-zinc-400 transition hover:bg-[#4F8EF7]/10 hover:text-[#4F8EF7]'
            >
              Projects
            </button>

            <button
              onClick={() => goToSection('experience')}
              className='rounded px-3 py-3 text-left text-zinc-400 transition hover:bg-[#4F8EF7]/10 hover:text-[#4F8EF7]'
            >
              Experience
            </button>

            <button
              onClick={() => goToSection('contact')}
              className='rounded px-3 py-3 text-left text-zinc-400 transition hover:bg-[#4F8EF7]/10 hover:text-[#4F8EF7]'
            >
              Contact
            </button>

            {/* Mobile Separator */}
            <div className='my-1 h-px bg-white/[0.07]' />

            <button
              onClick={goToRagSume}
              className={`rounded px-3 py-3 text-left transition ${
                currentPage === 'ragsume'
                  ? 'bg-[#4F8EF7]/10 text-[#4F8EF7]'
                  : 'text-[#4F8EF7] hover:bg-[#4F8EF7]/10'
              }`}
            >
              RagSume
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
