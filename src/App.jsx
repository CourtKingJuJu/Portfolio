import { useState } from 'react';

import Navbar from './components/Navbar';

import Home from './pages/Home';
import RagSumePage from './pages/RagSumePage';
import Travel from './pages/Travel';

function App() {
  const [page, setPage] = useState('home');

  return (
    <>
      <Navbar
        currentPage={page}
        onHome={() => setPage('home')}
        onRagSume={() => setPage('ragsume')}
        onTravel={() => setPage('travel')}
      />

      {page === 'home' && <Home />}
      {page === 'ragsume' && <RagSumePage />}
      {page === 'travel' && <Travel />}
    </>
  );
}

export default App;
