import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';

function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [formStatus, setFormStatus] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // État pour le menu hamburger

    useEffect(() => {
        setIsVisible(true);
    }, []);

    // Fonction pour basculer l'état du menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormStatus(null);
        setIsLoading(true);

        setTimeout(async () => {
            console.log('Envoi POST avec :', formData);
            try {
                const response = await axios.post(`${import.meta.env.VITE_API_URL}`, formData, {
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
            } finally {
                setIsLoading(false);
            }
        }, 2000);
    };

    return (
        <div className="w-full h-screen flex flex-col" style={{ backgroundColor: 'var(--background-color)', color: 'var(--text-color)' }}>
            {/* Header */}
            <header className="w-full py-6 px-4 flex justify-between items-center md:justify-center md:flex" style={{ background: 'linear-gradient(to bottom, rgba(var(--primary-color-rgb), 0.1), transparent)' }}>
                {/* Bouton hamburger (petits écrans) */}
                <button
                    className="md:hidden text-[var(--gray-text)] hover:text-[var(--primary-color)] transition-colors duration-300"
                    onClick={toggleMenu}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>

                {/* Menu principal (grands écrans, inchangé) */}
                <nav className="hidden md:flex space-x-8">
                    <Link to="/" className="hover:text-[var(--primary-color)] font-medium transition-colors duration-300 px-2" style={{ color: 'var(--gray-text)' }}>Accueil</Link>
                    <Link to="/about" className="hover:text-[var(--primary-color)] font-medium transition-colors duration-300 px-2" style={{ color: 'var(--gray-text)' }}>A propos</Link>
                    <Link to="/projects" className="hover:text-[var(--primary-color)] font-medium transition-colors duration-300 px-2" style={{ color: 'var(--gray-text)' }}>Portfolio</Link>
                    <Link to="/skills" className="hover:text-[var(--primary-color)] font-medium transition-colors duration-300 px-2" style={{ color: 'var(--gray-text)' }}>Compétences</Link>
                    <Link to="/services" className="hover:text-[var(--primary-color)] font-medium transition-colors duration-300 px-2" style={{ color: 'var(--gray-text)' }}>services</Link>
                    <Link to="/contact" className="hover:text-[var(--primary-color)] font-medium transition-colors duration-300 px-2" style={{ color: 'var(--gray-text)' }}>Contact</Link>
                </nav>
            </header>

            {/* Menu déroulant pour les petits écrans */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-16 left-0 w-full bg-[var(--background-color)] shadow-lg z-50">
                    <nav className="flex flex-col space-y-4 p-4">
                        <Link to="/" className="hover:text-[var(--primary-color)] font-medium transition-colors duration-300" style={{ color: 'var(--gray-text)' }}>Accueil</Link>
                        <Link to="/about" className="hover:text-[var(--primary-color)] font-medium transition-colors duration-300" style={{ color: 'var(--gray-text)' }}>A propos</Link>
                        <Link to="/projects" className="hover:text-[var(--primary-color)] font-medium transition-colors duration-300" style={{ color: 'var(--gray-text)' }}>Portfolio</Link>
                        <Link to="/skills" className="hover:text-[var(--primary-color)] font-medium transition-colors duration-300" style={{ color: 'var(--gray-text)' }}>Compétences</Link>
                        <Link to="/services" className="hover:text-[var(--primary-color)] font-medium transition-colors duration-300" style={{ color: 'var(--gray-text)' }}>Services</Link>
                        <Link to="/contact" className="hover:text-[var(--primary-color)] font-medium transition-colors duration-300" style={{ color: 'var(--gray-text)' }}>Contact</Link>
                    </nav>
                </div>
            )}

            {/* Contact Section (inchangée pour grands écrans) */}
            <section className="flex-1 flex flex-col md:flex-row items-center justify-between px-4 py-9 sm:px-6 md:px-8">
                {/* Animation à droite */}
                <div className="w-full md:w-1/2 px-4 py-9 flex justify-center items-center">
                    <div className="text-center">
                        <h2
                            className={`text-4xl sm:text-3xl md:text-6xl font-bold transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} animate-pulse`}
                            style={{ color: 'var(--text-color)' }}
                        >
                            Let’s <span style={{ color: 'var(--primary-color)' }}>Connect</span>
                        </h2>
                        <p
                            className={`mt-4 text-base sm:text-sm md:text-lg transition-all duration-1000 delay-200 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                            style={{ color: 'var(--gray-text)' }}
                        >
                            Prêt à collaborer ? Envoyez-moi un message !
                        </p>
                    </div>
                </div>
                {/* Formulaire à gauche */}
                <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
                    <h2 className="text-3xl sm:text-2xl md:text-4xl font-semibold text-center mb-12" style={{ color: 'var(--text-color)' }}>Me Contacter</h2>
                    <form onSubmit={handleSubmit} className="p-6 sm:p-4 rounded-xl shadow-lg" style={{ backgroundColor: 'rgba(var(--background-color-rgb), 0.9)' }}>
                        <input
                            type="text"
                            placeholder="Votre nom"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                            disabled={isLoading}
                            className="w-full p-3 sm:p-2 mb-4 bg-transparent border rounded-lg focus:border-[var(--primary-color)] focus:ring-2 focus:ring-[var(--primary-color)] focus:outline-none transition-all duration-300"
                            style={{ borderColor: 'var(--gray-text)', color: 'var(--text-color)', placeholder: 'var(--gray-text)' }}
                        />
                        <input
                            type="email"
                            placeholder="Votre email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                            disabled={isLoading}
                            className="w-full p-3 sm:p-2 mb-4 bg-transparent border rounded-lg focus:border-[var(--primary-color)] focus:ring-2 focus:ring-[var(--primary-color)] focus:outline-none transition-all duration-300"
                            style={{ borderColor: 'var(--gray-text)', color: 'var(--text-color)', placeholder: 'var(--gray-text)' }}
                        />
                        <textarea
                            placeholder="Votre message"
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            required
                            disabled={isLoading}
                            className="w-full p-3 sm:p-2 mb-4 bg-transparent border rounded-lg focus:border-[var(--primary-color)] focus:ring-2 focus:ring-[var(--primary-color)] focus:outline-none resize-y transition-all duration-300"
                            style={{ borderColor: 'var(--gray-text)', color: 'var(--text-color)', placeholder: 'var(--gray-text)' }}
                        />
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full p-3 sm:p-2 text-white rounded-lg hover:bg-[var(--primary-color)]/80 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                            style={{ backgroundColor: 'var(--primary-color)' }}
                        >
                            {isLoading ? 'Veuillez patienter...' : 'Envoyer'}
                        </button>
                        {formStatus && !isLoading && (
                            <p className={`mt-4 text-center ${formStatus.type === 'success' ? 'text-green-500' : 'text-[var(--primary-color)]'}`} style={{ color: formStatus.type === 'success' ? 'green' : 'var(--primary-color)' }}>
                                {formStatus.message}
                            </p>
                        )}
                    </form>
                </div>


            </section>

            {/* Footer (inchangé pour grands écrans) */}
            <footer className="w-full py-6 px-4 sm:px-6 text-center" style={{ background: 'linear-gradient(to top, rgba(var(--primary-color-rgb), 0.1), transparent)', color: 'var(--text-color)' }}>
                <div className="flex justify-center space-x-6 sm:space-x-4 mb-4">
                    <a href="https://linkedin.com/in/ton-profil" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary-color)] transition-colors duration-300" style={{ color: 'var(--gray-text)' }}>
                        <FaLinkedin className="text-2xl sm:text-xl" />
                    </a>
                    <a href="https://github.com/Toutvendre" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary-color)] transition-colors duration-300" style={{ color: 'var(--gray-text)' }}>
                        <FaGithub className="text-2xl sm:text-xl" />
                    </a>
                    <a href="https://x.com/AlexisKI07" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary-color)] transition-colors duration-300" style={{ color: 'var(--gray-text)' }}>
                        <FaTwitter className="text-2xl sm:text-xl" />
                    </a>
                    <a href="https://instagram.com/ton-profil" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary-color)] transition-colors duration-300" style={{ color: 'var(--gray-text)' }}>
                        <FaInstagram className="text-2xl sm:text-xl" />
                    </a>
                </div>
                <p className="text-sm sm:text-xs font-light tracking-wide" style={{ color: 'var(--gray-text)' }}>© 2025 Alex. Tous droits réservés.</p>
            </footer>
        </div>
    );
}

export default Contact;