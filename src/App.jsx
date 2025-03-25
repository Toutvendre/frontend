import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/contact', formData);
      console.log(response.data); // Vérifie la réponse
      alert('Message envoyé !');
      setFormData({ name: '', email: '', message: '' });
    } catch (_error) {
      console.log(_error); // Vérifie l’erreur
      alert('Erreur lors de l’envoi.');
    }
  };

  return (
    <>
      <header>
        <h1>Salut, je suis [Ton Nom]</h1>
        <p>Développeur de plateformes web</p>
      </header>
      <section id="projects">
        <h2>Mes Projets</h2>
        <div className="project">
          <h3>Projet 1</h3>
          <p>Une plateforme web avec [technos]. <a href="#">Voir le projet</a></p>
        </div>
      </section>
      <section id="contact">
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nom"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
          <textarea
            placeholder="Message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
          />
          <button type="submit">Envoyer</button>
        </form>
      </section>
    </>
  );
}

export default App;