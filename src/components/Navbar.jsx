const Navbar = () => {
  return (
    <nav className='fixed top-0 w-full bg-[#111116]/80 backdrop-blur border-b border-white/[0.07] z-50'>
      <div className='max-w-5xl mx-auto flex justify-between items-center px-10 py-4'>
        <span className='font-extrabold text-[17px] text-white'>
          JM
          <span className='text-[#4F8EF7]'>.</span>
        </span>

        <div className='flex items-center gap-1 text-[11px] tracking-[0.06em] uppercase'>
          <a
            href='#home'
            className='px-3 py-1.5 rounded text-[#4F8EF7] bg-[#4F8EF7]/10 transition'
          >
            Home
          </a>
          <a
            href='#projects'
            className='px-3 py-1.5 rounded text-zinc-400 hover:text-[#4F8EF7] hover:bg-[#4F8EF7]/10 transition'
          >
            Projects
          </a>
          <a
            href='#experience'
            className='px-3 py-1.5 rounded text-zinc-400 hover:text-[#4F8EF7] hover:bg-[#4F8EF7]/10 transition'
          >
            Experience
          </a>
          <a
            href='#contact'
            className='px-3 py-1.5 rounded text-zinc-400 hover:text-[#4F8EF7] hover:bg-[#4F8EF7]/10 transition'
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
