import React, { useState } from 'react'; // Ajout de useState
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './ThemeProvider.jsx';
import { ThemeContext } from './ThemeContext.jsx';
import Services from './Services.jsx';
import Home from './Home.jsx';
import Skills from './Skills.jsx';
import Contact from './Contact.jsx';
import Projects from './Projects.jsx';
import About from './About.jsx';
import { FaSun, FaMoon, FaPalette, FaCog } from 'react-icons/fa'; // Ajout de FaCog

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ThemeControls />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

function ThemeControls() {
  const { theme, setTheme, setPrimaryColor } = React.useContext(ThemeContext);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false); // État pour le menu déroulant

  const colors = [
    { name: 'Turquoise', value: '#167D7F' },
    { name: 'Corail', value: '#FF6F61' },
    { name: 'Violet', value: '#6B5B95' },
    { name: 'bleu', value: '#0E86D4' },
  ];

  const toggleSettings = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      {/* Bouton de réglages */}
      <button
        onClick={toggleSettings}
        className="p-2 px-2 m-2 bg-[var(--primary-color)] text-white rounded-full hover:bg-opacity-80 transition-all duration-300 flex items-center justify-center"
        title="Réglages"
      >
        <FaCog className="text-xl" />
      </button>

      {/* Menu déroulant */}
      <div
        className={`absolute top-12 right-0 bg-[var(--background-color)] p-4 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform ${isSettingsOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
          }`}
      >
        {/* Bouton pour changer le thème */}
        <div className="flex items-center space-x-2 mb-3">
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 bg-[var(--primary-color)] text-white rounded-full hover:bg-opacity-80 transition-all duration-300 flex items-center justify-center"
            title={theme === 'dark' ? 'Passer au mode clair' : 'Passer au mode sombre'}
          >
            {theme === 'dark' ? <FaSun className="text-lg" /> : <FaMoon className="text-lg" />}
          </button>
          <span style={{ color: 'var(--text-color)' }}>
            {theme === 'dark' ? 'Mode clair' : 'Mode sombre'}
          </span>
        </div>

        {/* Palette de couleurs */}
        <div className="flex items-center space-x-2">
          <div className="p-2 bg-[var(--primary-color)] text-white rounded-full flex items-center justify-center">
            <FaPalette className="text-lg" />
          </div>
          <div className="flex space-x-2">
            {colors.map((color) => (
              <button
                key={color.name}
                onClick={() => {
                  setPrimaryColor(color.value);
                  setIsSettingsOpen(false); // Ferme le menu après sélection
                }}
                className="w-6 h-6 rounded-full border-2 border-[var(--text-color)] hover:scale-110 transition-transform duration-300"
                style={{ backgroundColor: color.value }}
                title={color.name}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;