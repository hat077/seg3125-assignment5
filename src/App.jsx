import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import GlobalView from './views/GlobalView.jsx';
import TeamView from './views/TeamView.jsx';

function App() {
  const [lang, setLang] = useState('en');

  const toggleLanguage = () => {
    setLang(prevLang => (prevLang === 'en' ? 'fr' : 'en'));
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar lang={lang} toggleLanguage={toggleLanguage} />
      
      <main className="flex-grow-1 py-4 bg-light">
        <Routes>
          <Route path="/" element={<GlobalView lang={lang} />} />
          <Route path="/team-analysis" element={<TeamView lang={lang} />} />
        </Routes>
      </main>

      <Footer lang={lang} />
    </div>
  );
}

export default App;