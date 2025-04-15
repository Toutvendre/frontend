import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';

function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [formStatus, setFormStatus] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormStatus(null);
        setIsLoading(true);

        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/contact`, formData, {
                headers: { 'Content-Type': 'application/json' },
            });
            setFormStatus(response.data);
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('Erreur API :', {
                message: error.message,
                response: error.response ? error.response.data : null,
                status: error.response ? error.response.status : null,
            });
            setFormStatus({ type: 'error', message: 'Erreur lors de l’envoi. Veuillez réessayer.' });
        } finally {
            setTimeout(() => {
                setIsLoading(false);
            }, 2000);
        }
    };

    return (
        <div className="w-full h-screen flex flex-col" style={{ backgroundColor: 'var(--background-color)', color: 'var(--text-color)' }}>
            {/* Header */}
            <header className="w-full py-6 px-4 flex justify-between items-center md:justify-center md:flex" style={{ background: 'linear-gradient(to bottom, rgba(var(--primary-color-rgb), 0.1), transparent)' }}>
                <nav className="hidden md:flex space-x-8 justify-center select-none">
                    <NavLink to="/" exact className={({ isActive }) => `font-medium transition-all duration-300 px-2 border-b-2 outline-none focus:outline-none ${isActive ? 'text-[var(--primary-color)] border-[var(--primary-color)]' : 'text-[var(--gray-text)] border-transparent hover:text-[var(--primary-color)] hover:border-[var(--primary-color)]'}`}>Accueil</NavLink>
                    <NavLink to="/about" className={({ isActive }) => `font-medium transition-all duration-300 px-2 border-b-2 outline-none focus:outline-none ${isActive ? 'text-[var(--primary-color)] border-[var(--primary-color)]' : 'text-[var(--gray-text)] border-transparent hover:text-[var(--primary-color)] hover:border-[var(--primary-color)]'}`}>A propos</NavLink>
                    <NavLink to="/projects" className={({ isActive }) => `font-medium transition-all duration-300 px-2 border-b-2 outline-none focus:outline-none ${isActive ? 'text-[var(--primary-color)] border-[var(--primary-color)]' : 'text-[var(--gray-text)] border-transparent hover:text-[var(--primary-color)] hover:border-[var(--primary-color)]'}`}>Portfolio</NavLink>
                    <NavLink to="/skills" className={({ isActive }) => `font-medium transition-all duration-300 px-2 border-b-2 outline-none focus:outline-none ${isActive ? 'text-[var(--primary-color)] border-[var(--primary-color)]' : 'text-[var(--gray-text)] border-transparent hover:text-[var(--primary-color)] hover:border-[var(--primary-color)]'}`}>Compétences</NavLink>
                    <NavLink to="/services" className={({ isActive }) => `font-medium transition-all duration-300 px-2 border-b-2 outline-none focus:outline-none ${isActive ? 'text-[var(--primary-color)] border-[var(--primary-color)]' : 'text-[var(--gray-text)] border-transparent hover:text-[var(--primary-color)] hover:border-[var(--primary-color)]'}`}>Services</NavLink>
                    <NavLink to="/contact" className={({ isActive }) => `font-medium transition-all duration-300 px-2 border-b-2 outline-none focus:outline-none ${isActive ? 'text-[var(--primary-color)] border-[var(--primary-color)]' : 'text-[var(--gray-text)] border-transparent hover:text-[var(--primary-color)] hover:border-[var(--primary-color)]'}`}>Contact</NavLink>
                </nav>

            </header>
            {/* Contact Section */}
            <section className="flex-1 flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-8 py-8">
                {/* Formulaire à gauche */}
                <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0 order-2 md:order-1">
                    <h2 className="text-3xl sm:text-2xl md:text-4xl font-semibold text-center mb-12" style={{ color: 'var(--text-color)' }}>Me Contacter</h2>
                    <form onSubmit={handleSubmit} className="p-6 sm:p-4 rounded-xl shadow-lg" style={{ backgroundColor: 'rgba(var(--background-color-rgb), 0.9)' }}>
                        <input
                            type="text"
                            placeholder="Votre nom"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                            disabled={isLoading}
                            className="w-full p-3 sm:p-2 mb-4 bg-transparent border rounded-lg focus:border-[var(--primary-color)] focus:ring-2 focus:ring-[var(--primary-color)] focus:outline-none transition-all duration-300 placeholder-[var(--gray-text)]"
                            style={{ borderColor: 'var(--gray-text)', color: 'var(--text-color)' }}
                        />
                        <input
                            type="email"
                            placeholder="Votre email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                            disabled={isLoading}
                            className="w-full p-3 sm:p-2 mb-4 bg-transparent border rounded-lg focus:border-[var(--primary-color)] focus:ring-2 focus:ring-[var(--primary-color)] focus:outline-none transition-all duration-300 placeholder-[var(--gray-text)]"
                            style={{ borderColor: 'var(--gray-text)', color: 'var(--text-color)' }}
                        />
                        <textarea
                            placeholder="Votre message"
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            required
                            disabled={isLoading}
                            className="w-full p-3 sm:p-2 mb-4 bg-transparent border rounded-lg focus:border-[var(--primary-color)] focus:ring-2 focus:ring-[var(--primary-color)] focus:outline-none resize-y transition-all duration-300 placeholder-[var(--gray-text)]"
                            style={{ borderColor: 'var(--gray-text)', color: 'var(--text-color)' }}
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
                {/* Animation à droite */}
                <div className="w-full md:w-1/2 px-4 flex justify-center items-center order-1 md:order-2">
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
            </section>
            {/* Footer */}
            <footer className="w-full py-6 px-4 sm:px-6 text-center" style={{ background: 'linear-gradient(to top, rgba(var(--primary-color-rgb), 0.1), transparent)', color: 'var(--text-color)' }}>
                <div className="flex justify-center space-x-6 sm:space-x-4 mb-4">
                    <a href="https://www.linkedin.com/in/alexis-ki-099781358" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary-color)] transition-colors duration-300" style={{ color: 'var(--gray-text)' }}>
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