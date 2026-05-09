import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className='fixed top-0 z-50 w-full border-b border-white/[0.07] bg-[#111116]/80 backdrop-blur'>
      <div className='mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6 md:px-10'>
        {/* Logo */}
        <span className='font-extrabold text-[17px] text-white'>
          JM
          <span className='text-[#4F8EF7]'>.</span>
        </span>

        {/* Desktop Nav */}
        <div className='hidden md:flex items-center gap-1 text-[11px] tracking-[0.06em] uppercase'>
          <a
            href='#home'
            className='rounded px-3 py-1.5 text-[#4F8EF7] bg-[#4F8EF7]/10 transition'
          >
            Home
          </a>

          <a
            href='#projects'
            className='rounded px-3 py-1.5 text-zinc-400 transition hover:bg-[#4F8EF7]/10 hover:text-[#4F8EF7]'
          >
            Projects
          </a>

          <a
            href='#experience'
            className='rounded px-3 py-1.5 text-zinc-400 transition hover:bg-[#4F8EF7]/10 hover:text-[#4F8EF7]'
          >
            Experience
          </a>

          <a
            href='#contact'
            className='rounded px-3 py-1.5 text-zinc-400 transition hover:bg-[#4F8EF7]/10 hover:text-[#4F8EF7]'
          >
            Contact
          </a>
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
            <a
              href='#home'
              onClick={() => setOpen(false)}
              className='rounded px-3 py-3 text-[#4F8EF7] bg-[#4F8EF7]/10'
            >
              Home
            </a>

            <a
              href='#projects'
              onClick={() => setOpen(false)}
              className='rounded px-3 py-3 text-zinc-400 hover:bg-[#4F8EF7]/10 hover:text-[#4F8EF7]'
            >
              Projects
            </a>

            <a
              href='#experience'
              onClick={() => setOpen(false)}
              className='rounded px-3 py-3 text-zinc-400 hover:bg-[#4F8EF7]/10 hover:text-[#4F8EF7]'
            >
              Experience
            </a>

            <a
              href='#contact'
              onClick={() => setOpen(false)}
              className='rounded px-3 py-3 text-zinc-400 hover:bg-[#4F8EF7]/10 hover:text-[#4F8EF7]'
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
