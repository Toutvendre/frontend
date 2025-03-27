import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './ThemeProvider.jsx';
import { ThemeContext } from './ThemeContext.jsx';
import Services from './Services.jsx';
import Home from './Home.jsx';
import Skills from './Skills.jsx';
import Contact from './Contact.jsx';
import { FaSun, FaMoon, FaPalette } from 'react-icons/fa';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ThemeControls />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

function ThemeControls() {
  const { theme, setTheme, setPrimaryColor } = React.useContext(ThemeContext);
  const colors = [
    { name: 'Turquoise', value: '#167D7F' },
    { name: 'Corail', value: '#FF6F61' },
    { name: 'Violet', value: '#6B5B95' },
    { name: 'Vert', value: '#2ECC71' },
  ];

  return (
    <div className="fixed top-4 right-4 z-50 flex space-x-4 items-center">
      <button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="p-2 bg-[var(--primary-color)] text-white rounded-full hover:bg-opacity-80 transition-all duration-300 flex items-center justify-center"
        title={theme === 'dark' ? 'Passer au mode clair' : 'Passer au mode sombre'}
      >
        {theme === 'dark' ? <FaSun className="text-xl" /> : <FaMoon className="text-xl" />}
      </button>
      <div className="relative group">
        <button className="p-2 bg-[var(--primary-color)] text-white rounded-full hover:bg-opacity-80 transition-all duration-300 flex items-center justify-center">
          <FaPalette className="text-xl" />
        </button>
        <div className="absolute top-12 right-0 flex space-x-2 bg-[var(--background-color)] p-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {colors.map((color) => (
            <button
              key={color.name}
              onClick={() => setPrimaryColor(color.value)}
              className="w-6 h-6 rounded-full border-2 border-[var(--text-color)]"
              style={{ backgroundColor: color.value }}
              title={color.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;