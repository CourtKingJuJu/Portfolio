import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = ({ onRagSume, onHome, currentPage }) => {
  const [open, setOpen] = useState(false);

  const goHome = () => {
    if (onHome) {
      onHome();
    }

    setOpen(false);

    // If we're already on the home page, scroll to the top.
    if (currentPage === 'home') {
      window.location.hash = 'home';
    }
  };

  const goToSection = (section) => {
    setOpen(false);

    if (currentPage !== 'home' && onHome) {
      onHome();

      // Wait for Home to render before scrolling.
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

          <button
            onClick={goToRagSume}
            className={`ml-2 rounded px-3 py-1.5 transition ${
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
          className='md:hidden text-zinc-300'
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className='md:hidden border-t border-white/[0.07] bg-[#111116]'>
          <div className='flex flex-col px-4 py-3 text-[11px] uppercase tracking-[0.08em]'>
            <button
              onClick={goHome}
              className='rounded px-3 py-3 text-left text-zinc-400 hover:bg-[#4F8EF7]/10 hover:text-[#4F8EF7]'
            >
              Home
            </button>

            <button
              onClick={() => goToSection('projects')}
              className='rounded px-3 py-3 text-left text-zinc-400 hover:bg-[#4F8EF7]/10 hover:text-[#4F8EF7]'
            >
              Projects
            </button>

            <button
              onClick={() => goToSection('experience')}
              className='rounded px-3 py-3 text-left text-zinc-400 hover:bg-[#4F8EF7]/10 hover:text-[#4F8EF7]'
            >
              Experience
            </button>

            <button
              onClick={() => goToSection('contact')}
              className='rounded px-3 py-3 text-left text-zinc-400 hover:bg-[#4F8EF7]/10 hover:text-[#4F8EF7]'
            >
              Contact
            </button>

            <button
              onClick={goToRagSume}
              className='rounded px-3 py-3 text-left text-[#4F8EF7] hover:bg-[#4F8EF7]/10'
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
