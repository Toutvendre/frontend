import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FaCode, FaMobileAlt, FaServer } from 'react-icons/fa';

function Services() {
    const [isVisible, setIsVisible] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // État pour le menu hamburger

    useEffect(() => {
        setIsVisible(true);
    }, []);

    // Fonction pour basculer l'état du menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const services = [
        { name: 'Développement Web Personnalisé', icon: <FaCode className="text-5xl text-[var(--primary-color)] drop-shadow-md" />, description: 'Je transforme vos idées en sites web modernes, rapides et adaptés à tous les écrans, en utilisant des technologies comme React, HTML5, et CSS3.' },
        { name: 'Conception d’Applications Mobiles', icon: <FaMobileAlt className="text-5xl text-[var(--primary-color)] drop-shadow-md" />, description: 'Création d’applications mobiles fluides et intuitives avec React Native, pour iOS et Android, adaptées à vos besoins spécifiques.' },
        { name: 'Solutions Backend & API', icon: <FaServer className="text-5xl text-[var(--primary-color)] drop-shadow-md" />, description: 'Développement de backends robustes et d’APIs sécurisées avec PHP, Laravel, et bases de données comme MySQL, Postgres ou MongoDB.' },
    ];

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

            {/* Services Section (inchangée pour grands écrans) */}
            <section className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 md:px-8">
                <h2 className="text-3xl sm:text-2xl md:text-4xl font-semibold text-center mb-12" style={{ color: 'var(--text-color)' }}>Mes Services</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-8xl w-full">
                    {services.map((service, index) => (
                        <div
                            key={service.name}
                            className={`p-6 text-center transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                            style={{ transitionDelay: `${index * 200}ms` }}
                        >
                            <div className="flex justify-center mb-4 transform hover:scale-110 hover:rotate-6 transition-transform duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-xl sm:text-lg md:text-xl font-semibold mb-2" style={{ color: 'var(--text-color)' }}>{service.name}</h3>
                            <p className="text-sm sm:text-xs md:text-sm leading-tight" style={{ color: 'var(--gray-text)' }}>{service.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer (inchangé pour grands écrans) */}
            <footer className="w-full py-6 px-4 sm:px-6 text-center" style={{ background: 'linear-gradient(to top, rgba(var(--primary-color-rgb), 0.1), transparent)', color: 'var(--text-color)' }}>
                <div className="flex justify-center space-x-6 sm:space-x-4 mb-4">
                    <a href="https://www.linkedin.com/in/alexis-ki-099781358" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary-color)] transition-colors duration-300 transform hover:scale-110" style={{ color: 'var(--gray-text)' }}>
                        <FaLinkedin className="text-2xl sm:text-xl" />
                    </a>
                    <a href="https://github.com/Toutvendre" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary-color)] transition-colors duration-300 transform hover:scale-110" style={{ color: 'var(--gray-text)' }}>
                        <FaGithub className="text-2xl sm:text-xl" />
                    </a>
                    <a href="https://x.com/AlexisKI07" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary-color)] transition-colors duration-300 transform hover:scale-110" style={{ color: 'var(--gray-text)' }}>
                        <FaTwitter className="text-2xl sm:text-xl" />
                    </a>
                    <a href="https://instagram.com/ton-profil" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary-color)] transition-colors duration-300 transform hover:scale-110" style={{ color: 'var(--gray-text)' }}>
                        <FaInstagram className="text-2xl sm:text-xl" />
                    </a>
                </div>
                <p className="text-sm sm:text-xs font-light tracking-wide" style={{ color: 'var(--gray-text)' }}>© 2025 Alex. Tous droits réservés.</p>
            </footer>
        </div>
    );
}

export default Services;