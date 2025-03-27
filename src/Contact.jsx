import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';

function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [formStatus, setFormStatus] = useState(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormStatus(null);
        console.log('Envoi POST avec :', formData);
        try {
            const response = await axios.post('http://localhost:8000/api/contact', formData, {
                headers: { 'Content-Type': 'application/json' },
            });
            console.log('Réponse API :', response.data);
            setFormStatus({ type: 'success', message: 'Message envoyé avec succès !' });
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('Erreur API détaillée :', {
                message: error.message,
                response: error.response ? error.response.data : null,
                status: error.response ? error.response.status : null,
            });
            setFormStatus({ type: 'error', message: 'Erreur lors de l’envoi. Veuillez réessayer.' });
        }
    };

    return (
        <div className="w-full h-screen flex flex-col" style={{ backgroundColor: 'var(--background-color)', color: 'var(--text-color)' }}>
            {/* Header */}
            <header className="w-full py-6 px-4 flex justify-center items-center" style={{ background: 'linear-gradient(to bottom, rgba(var(--primary-color-rgb), 0.1), transparent)' }}>
                <nav className="flex space-x-8">
                    <Link to="/" className="hover:text-[var(--primary-color)] font-medium transition-colors duration-300 px-1" style={{ color: 'var(--gray-text)' }}>Accueil</Link>
                    <a href="/services" className="hover:text-[var(--primary-color)] font-medium transition-colors duration-300 px-1" style={{ color: 'var(--gray-text)' }}>Services</a>
                    <a href="/skills" className="hover:text-[var(--primary-color)] font-medium transition-colors duration-300 px-1" style={{ color: 'var(--gray-text)' }}>Compétences</a>
                    <a href="#education" className="hover:text-[var(--primary-color)] font-medium transition-colors duration-300 px-1" style={{ color: 'var(--gray-text)' }}>Éducation</a>
                    <a href="#experience" className="hover:text-[var(--primary-color)] font-medium transition-colors duration-300 px-1" style={{ color: 'var(--gray-text)' }}>Expérience</a>
                    <Link to="/contact" className="hover:text-[var(--primary-color)] font-medium transition-colors duration-300 px-1" style={{ color: 'var(--gray-text)' }}>Contact</Link>
                </nav>
            </header>

            {/* Contact Section */}
            <section className="flex-1 flex flex-col md:flex-row items-center justify-between px-4 md:px-8">
                {/* Formulaire à gauche */}
                <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
                    <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12" style={{ color: 'var(--text-color)' }}>Me Contacter</h2>
                    <form onSubmit={handleSubmit} className="p-6 rounded-xl shadow-lg" style={{ backgroundColor: 'rgba(var(--background-color-rgb), 0.9)' }}>
                        <input
                            type="text"
                            placeholder="Votre nom"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                            className="w-full p-3 mb-4 bg-transparent border rounded-lg focus:border-[var(--primary-color)] focus:ring-2 focus:ring-[var(--primary-color)] focus:outline-none transition-all duration-300"
                            style={{ borderColor: 'var(--gray-text)', color: 'var(--text-color)', placeholder: 'var(--gray-text)' }}
                        />
                        <input
                            type="email"
                            placeholder="Votre email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                            className="w-full p-3 mb-4 bg-transparent border rounded-lg focus:border-[var(--primary-color)] focus:ring-2 focus:ring-[var(--primary-color)] focus:outline-none transition-all duration-300"
                            style={{ borderColor: 'var(--gray-text)', color: 'var(--text-color)', placeholder: 'var(--gray-text)' }}
                        />
                        <textarea
                            placeholder="Votre message"
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            required
                            className="w-full p-3 mb-4 bg-transparent border rounded-lg focus:border-[var(--primary-color)] focus:ring-2 focus:ring-[var(--primary-color)] focus:outline-none resize-y transition-all duration-300"
                            style={{ borderColor: 'var(--gray-text)', color: 'var(--text-color)', placeholder: 'var(--gray-text)' }}
                        />
                        <button
                            type="submit"
                            className="w-full p-3 text-white rounded-lg hover:bg-[var(--primary-color)]/80 transition-all duration-300 transform hover:scale-105"
                            style={{ backgroundColor: 'var(--primary-color)' }}
                        >
                            Envoyer
                        </button>
                        {formStatus && (
                            <p className={`mt-4 text-center ${formStatus.type === 'success' ? 'text-green-500' : 'text-[var(--primary-color)]'}`} style={{ color: formStatus.type === 'success' ? 'green' : 'var(--primary-color)' }}>
                                {formStatus.message}
                            </p>
                        )}
                    </form>
                </div>

                {/* Animation à droite */}
                <div className="w-full md:w-1/2 px-4 flex justify-center items-center">
                    <div className="text-center">
                        <h2
                            className={`text-4xl md:text-6xl font-bold transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} animate-pulse`}
                            style={{ color: 'var(--text-color)' }}
                        >
                            Let’s <span style={{ color: 'var(--primary-color)' }}>Connect</span>
                        </h2>
                        <p
                            className={`mt-4 text-base md:text-lg transition-all duration-1000 delay-200 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                            style={{ color: 'var(--gray-text)' }}
                        >
                            Prêt à collaborer ? Envoyez-moi un message !
                        </p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="w-full py-6 text-center" style={{ background: 'linear-gradient(to top, rgba(var(--primary-color-rgb), 0.1), transparent)', color: 'var(--text-color)' }}>
                <div className="flex justify-center space-x-6 mb-4">
                    <a href="https://linkedin.com/in/ton-profil" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary-color)] transition-colors duration-300" style={{ color: 'var(--gray-text)' }}>
                        <FaLinkedin className="text-2xl" />
                    </a>
                    <a href="https://github.com/Toutvendre" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary-color)] transition-colors duration-300" style={{ color: 'var(--gray-text)' }}>
                        <FaGithub className="text-2xl" />
                    </a>
                    <a href="https://twitter.com/ton-profil" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary-color)] transition-colors duration-300" style={{ color: 'var(--gray-text)' }}>
                        <FaTwitter className="text-2xl" />
                    </a>
                    <a href="https://instagram.com/ton-profil" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary-color)] transition-colors duration-300" style={{ color: 'var(--gray-text)' }}>
                        <FaInstagram className="text-2xl" />
                    </a>
                </div>
                <p className="text-sm font-light tracking-wide" style={{ color: 'var(--gray-text)' }}>© 2025 Alex. Tous droits réservés.</p>
            </footer>
        </div>
    );
}

export default Contact;