import { useState } from 'react';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import RagSumePage from './pages/RagSumePage';

function App() {
  const [page, setPage] = useState('home');

  return (
    <>
      <Navbar
        currentPage={page}
        onHome={() => setPage('home')}
        onRagSume={() => setPage('ragsume')}
      />

      {page === 'home' && <Home />}
      {page === 'ragsume' && <RagSumePage />}
    </>
  );
}

export default App;
