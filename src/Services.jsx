import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FaCode, FaMobileAlt, FaServer } from 'react-icons/fa';

function Services() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const services = [
        { name: 'Développement Web Personnalisé', icon: <FaCode className="text-5xl text-[var(--primary-color)] drop-shadow-md" />, description: 'Je transforme vos idées en sites web modernes, rapides et adaptés à tous les écrans, en utilisant des technologies comme React, HTML5, et CSS3.' },
        { name: 'Conception d’Applications Mobiles', icon: <FaMobileAlt className="text-5xl text-[var(--primary-color)] drop-shadow-md" />, description: 'Création d’applications mobiles fluides et intuitives avec React Native, pour iOS et Android, adaptées à vos besoins spécifiques.' },
        { name: 'Solutions Backend & API', icon: <FaServer className="text-5xl text-[var(--primary-color)] drop-shadow-md" />, description: 'Développement de backends robustes et d’APIs sécurisées avec PHP, Laravel, et bases de données comme MySQL ou MongoDB.' },
    ];

    return (
        <div className="w-full h-screen flex flex-col" style={{ backgroundColor: 'var(--background-color)', color: 'var(--text-color)' }}>
            {/* Header */}
            <header className="w-full py-6 px-4 flex justify-center items-center" style={{ background: 'linear-gradient(to bottom, rgba(var(--primary-color-rgb), 0.1), transparent)' }}>
                <nav className="flex space-x-8">
                    <Link to="/" className="hover:text-[var(--primary-color)] font-medium transition-colors duration-300 px-2" style={{ color: 'var(--gray-text)' }}>Accueil</Link>
                    <a href="#services" className="hover:text-[var(--primary-color)] font-medium transition-colors duration-300 px-2" style={{ color: 'var(--gray-text)' }}>Services</a>
                    <a href="/skills" className="hover:text-[var(--primary-color)] font-medium transition-colors duration-300 px-2" style={{ color: 'var(--gray-text)' }}>Compétences</a>
                    <a href="#education" className="hover:text-[var(--primary-color)] font-medium transition-colors duration-300 px-2" style={{ color: 'var(--gray-text)' }}>Éducation</a>
                    <a href="#experience" className="hover:text-[var(--primary-color)] font-medium transition-colors duration-300 px-2" style={{ color: 'var(--gray-text)' }}>Expérience</a>
                    <Link to="/contact" className="hover:text-[var(--primary-color)] font-medium transition-colors duration-300 px-2" style={{ color: 'var(--gray-text)' }}>Contact</Link>
                </nav>
            </header>

            {/* Services Section */}
            <section className="flex-1 flex flex-col items-center justify-center px-4 md:px-8">
                <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12" style={{ color: 'var(--text-color)' }}>Mes Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-8xl w-full">
                    {services.map((service, index) => (
                        <div
                            key={service.name}
                            className={`p-6 text-center transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                            style={{ transitionDelay: `${index * 200}ms` }}
                        >
                            <div className="flex justify-center mb-4 transform hover:scale-110 hover:rotate-6 transition-transform duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--text-color)' }}>{service.name}</h3>
                            <p className="text-sm leading-tight" style={{ color: 'var(--gray-text)' }}>{service.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer className="w-full py-6 text-center" style={{ background: 'linear-gradient(to top, rgba(var(--primary-color-rgb), 0.1), transparent)', color: 'var(--text-color)' }}>
                <div className="flex justify-center space-x-6 mb-4">
                    <a href="https://linkedin.com/in/ton-profil" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary-color)] transition-colors duration-300 transform hover:scale-110" style={{ color: 'var(--gray-text)' }}>
                        <FaLinkedin className="text-2xl" />
                    </a>
                    <a href="https://github.com/Toutvendre" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary-color)] transition-colors duration-300 transform hover:scale-110" style={{ color: 'var(--gray-text)' }}>
                        <FaGithub className="text-2xl" />
                    </a>
                    <a href="https://twitter.com/ton-profil" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary-color)] transition-colors duration-300 transform hover:scale-110" style={{ color: 'var(--gray-text)' }}>
                        <FaTwitter className="text-2xl" />
                    </a>
                    <a href="https://instagram.com/ton-profil" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary-color)] transition-colors duration-300 transform hover:scale-110" style={{ color: 'var(--gray-text)' }}>
                        <FaInstagram className="text-2xl" />
                    </a>
                </div>
                <p className="text-sm font-light tracking-wide" style={{ color: 'var(--gray-text)' }}>© 2025 Alex. Tous droits réservés.</p>
            </footer>
        </div>
    );
}

export default Services;