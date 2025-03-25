import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Envoi POST avec :', formData);
    try {
      const response = await axios.post('http://localhost:8000/api/contact', formData);
      console.log('Réponse API :', response.data);
      alert('Message envoyé !');
      setFormData({ name: '', email: '', message: '' });
    } catch (_error) {
      console.error('Erreur API :', _error.response ? _error.response.data : _error.message);
      alert('Erreur lors de l’envoi.');
    }
  };

  return (
    <div className="container">
      <header>
        <h1>Alexis [Ton Nom]</h1>
        <nav>
          <a href="#projects">Projets</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="intro">
        <div className="intro-content">
          <h2>Développeur de plateformes web</h2>
          <p>Créateur de solutions modernes et performantes avec React, Laravel et plus.</p>
        </div>
      </section>

      <section id="projects">
        <h2>Mes Projets</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>Plateforme E-commerce</h3>
            <p>Une boutique en ligne avec React et Laravel, optimisée pour laa performance.</p>
            <a href="https://github.com/Toutvendre" target="_blank" rel="noopener noreferrer">Voir sur GitHub</a>
          </div>
          <div className="project-card">
            <h3>Dashboard Admin</h3>
            <p>Un tableau de bord interactif pour gérer des données, codé avec Vue et PHP.</p>
            <a href="https://github.com/Toutvendre" target="_blank" rel="noopener noreferrer">Voir sur GitHub</a>
          </div>
        </div>
      </section>

      <section id="contact">
        <h2>Me Contacter</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            placeholder="Votre nom"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Votre email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
          <textarea
            placeholder="Votre message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
          />
          <button type="submit">Envoyer</button>
        </form>
      </section>

      <footer>
        <p>© 2025 Alexis [Ton Nom]. Tous droits réservés.</p>
      </footer>
    </div>
  );
}

export default App;