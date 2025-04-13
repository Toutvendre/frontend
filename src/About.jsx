import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';

function About() {
    const [isVisible, setIsVisible] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // État pour le menu hamburger

    useEffect(() => {
        setIsVisible(true);
    }, []);

    // Fonction pour basculer l'état du menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Données pour la timeline
    const timelineData = [
        {
            year: '2020 - Présent',
            title: 'Community Manager - BurkinaBeaute',
            description: 'Gestion des réseaux sociaux et création de contenu pour BurkinaBeaute, une entreprise de savonnerie à Bobo-Dioulasso.',
        },
        {
            year: '2025',
            title: 'Stagiaire en Développement - Ministère de l’Urbanisme',
            description: 'Participation au développement de solutions web au sein du Ministère de l’Urbanisme et de l’Habitat, Burkina Faso.',
        },
        {
            year: '2024',
            title: 'Certificat en Cybersécurité - Cisco Networking Academy',
            description: 'Obtention du certificat "Introduction to Cybersecurity", apprentissage des bases de la sécurité en ligne et des menaces cyber.',
        },
        {
            year: '2025',
            title: 'Certificat JavaScript Essentials 1 - Cisco Networking Academy',
            description: 'Validation des compétences en JavaScript, incluant la syntaxe, les types de données, et la résolution algorithmique.',
        },
    ];

    return (
        <div className="w-full min-h-screen flex flex-col" style={{ backgroundColor: 'var(--background-color)', color: 'var(--text-color)' }}>
            {/* Header */}
            <header className="w-full py-6 px-4 flex justify-between items-center md:justify-center" style={{ background: 'linear-gradient(to bottom, rgba(var(--primary-color-rgb), 0.1), transparent)' }}>
                {/* Bouton hamburger (petits écrans) */}
                <button
                    className="md:hidden text-[var(--gray-text)] hover:text-[var(--primary-color)] transition-colors duration-300"
                    onClick={toggleMenu}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>

                {/* Menu principal (grands écrans) */}
                <nav className="hidden md:flex space-x-8 justify-center">
                    <Link to="/" className="hover:text-[var(--primary-color)] font-medium transition-colors duration-300 px-2" style={{ color: 'var(--gray-text)' }}>Accueil</Link>
                    <Link to="/about" className="hover:text-[var(--primary-color)] font-medium transition-colors duration-300 px-2" style={{ color: 'var(--gray-text)' }}>A propos</Link>
                    <Link to="/projects" className="hover:text-[var(--primary-color)] font-medium transition-colors duration-300 px-2" style={{ color: 'var(--gray-text)' }}>Portfolio</Link>
                    <Link to="/skills" className="hover:text-[var(--primary-color)] font-medium transition-colors duration-300 px-2" style={{ color: 'var(--gray-text)' }}>Compétences</Link>
                    <Link to="/services" className="hover:text-[var(--primary-color)] font-medium transition-colors duration-300 px-2" style={{ color: 'var(--gray-text)' }}>Services</Link>
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

            {/* Première section : About Me */}
            <section className="px-4 sm:px-6 md:px-8 py-12 md:py-20 max-w-8xl ">
                <div className={`transition-all duration-700 ease-in-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 tracking-tight" style={{ color: 'var(--primary-color)' }}>À propos de moi</h1>
                    <div className="w-16 sm:w-20 h-1 bg-[var(--primary-color)] mb-6 sm:mb-8" />
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 sm:mb-6 tracking-wide" style={{ color: 'var(--text-color)' }}>
                        KI Brou Alexis, Étudiant en Informatique
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-8 md:mb-10 max-w-4xl" style={{ color: 'var(--gray-text)' }}>
                        Je suis KI Brou Alexis, étudiant en informatique à l'Université Aube Nouvelle basé à Ouagadougou, Burkina Faso. Passionné par le développement web et mobile, j’ai acquis des compétences solides en autodidacte et à travers des certifications. Mon objectif est de concevoir des solutions numériques performantes et esthétiques, tout en continuant à me former dans des domaines comme la cybersécurité et le design UX/UI.
                    </p>

                    {/* Informations personnelles et compétences */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mb-8 md:mb-12">
                        <div className="space-y-4 sm:space-y-6">
                            <div className="flex justify-between">
                                <span className="font-semibold text-xs sm:text-sm md:text-base" style={{ color: 'var(--text-color)' }}>Email :</span>
                                <span className="text-xs sm:text-sm md:text-base" style={{ color: 'var(--gray-text)' }}>alexis07ki@gmail.com</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="font-semibold text-xs sm:text-sm md:text-base" style={{ color: 'var(--text-color)' }}>Ville :</span>
                                <span className="text-xs sm:text-sm md:text-base" style={{ color: 'var(--gray-text)' }}>Ouagadougou, Burkina Faso</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="font-semibold text-xs sm:text-sm md:text-base" style={{ color: 'var(--text-color)' }}>Freelance :</span>
                                <span className="text-xs sm:text-sm md:text-base" style={{ color: 'var(--gray-text)' }}>Disponible</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="font-semibold text-xs sm:text-sm md:text-base" style={{ color: 'var(--text-color)' }}>Formation :</span>
                                <span className="text-xs sm:text-sm md:text-base text-right" style={{ color: 'var(--gray-text)' }}>
                                    Autodidacte en Communication Digitale <br /> & Stage au Ministère de l’Urbanisme et de l’Habitat
                                </span>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <div className="flex justify-between mb-2">
                                    <span className="text-xs sm:text-sm md:text-base font-semibold" style={{ color: 'var(--text-color)' }}>Laravel</span>
                                    <span className="text-xs sm:text-sm md:text-base" style={{ color: 'var(--gray-text)' }}>80%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2 sm:h-2.5">
                                    <div className="h-2 sm:h-2.5 rounded-full transition-all duration-1000 ease-out" style={{ width: '80%', backgroundColor: 'var(--primary-color)' }}></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between mb-2">
                                    <span className="text-xs sm:text-sm md:text-base font-semibold" style={{ color: 'var(--text-color)' }}>React</span>
                                    <span className="text-xs sm:text-sm md:text-base" style={{ color: 'var(--gray-text)' }}>70%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2 sm:h-2.5">
                                    <div className="h-2 sm:h-2.5 rounded-full transition-all duration-1000 ease-out" style={{ width: '70%', backgroundColor: 'var(--primary-color)' }}></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between mb-2">
                                    <span className="text-xs sm:text-sm md:text-base font-semibold" style={{ color: 'var(--text-color)' }}>JavaScript</span>
                                    <span className="text-xs sm:text-sm md:text-base" style={{ color: 'var(--gray-text)' }}>70%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2 sm:h-2.5">
                                    <div className="h-2 sm:h-2.5 rounded-full transition-all duration-1000 ease-out" style={{ width: '70%', backgroundColor: 'var(--primary-color)' }}></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between mb-2">
                                    <span className="text-xs sm:text-sm md:text-base font-semibold" style={{ color: 'var(--text-color)' }}>Adobe Photoshop</span>
                                    <span className="text-xs sm:text-sm md:text-base" style={{ color: 'var(--gray-text)' }}>85%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2 sm:h-2.5">
                                    <div className="h-2 sm:h-2.5 rounded-full transition-all duration-1000 ease-out" style={{ width: '85%', backgroundColor: 'var(--primary-color)' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Boutons */}
                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                        <a
                            href="/pdf/Web.pdf"
                            download
                            className="px-4 py-2 sm:px-6 sm:py-3 bg-[var(--primary-color)] text-white rounded-lg font-medium hover:bg-opacity-90 transition-all duration-300 shadow-sm text-center"
                        >
                            Télécharger CV
                        </a>
                        <Link
                            to="/contact"
                            className="px-4 py-2 sm:px-6 sm:py-3 bg-transparent border border-[var(--primary-color)] text-[var(--primary-color)] rounded-lg font-medium hover:bg-[var(--primary-color)] hover:text-white transition-all duration-300 shadow-sm text-center"
                        >
                            Me contacter
                        </Link>
                    </div>
                </div>
            </section>

            {/* Deuxième section : Timeline */}
            <section className="px-4 sm:px-6 md:px-16 py-12 md:py-20 max-w-7xl mx-auto bg-[var(--background-color)]">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center tracking-tight" style={{ color: 'var(--primary-color)' }}>Mon Parcours</h2>
                <div className="w-16 sm:w-20 h-1 bg-[var(--primary-color)] mb-8 md:mb-12 mx-auto" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                    {timelineData.map((item, index) => (
                        <div
                            key={index}
                            className={`relative pl-8 transition-all duration-700 ease-in-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                            style={{ transitionDelay: `${index * 150}ms` }}
                        >
                            <div className="absolute left-0 top-2 w-4 h-4 bg-[var(--primary-color)] rounded-full border-2 border-[var(--background-color)]"></div>
                            <div className="absolute left-2 top-2 h-full w-0.5 bg-[var(--primary-color)] opacity-50"></div>
                            <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-1" style={{ color: 'var(--text-color)' }}>{item.year}</h3>
                            <h4 className="text-sm sm:text-base md:text-lg font-medium mb-2 text-[var(--primary-color)]">{item.title}</h4>
                            <p className="text-xs sm:text-sm md:text-base leading-relaxed" style={{ color: 'var(--gray-text)' }}>{item.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer className="w-full py-6 px-4 sm:px-6 md:px-8 text-center border-t" style={{ background: 'linear-gradient(to top, rgba(var(--primary-color-rgb), 0.1), transparent)', color: 'var(--text-color)' }}>
                <div className="flex justify-center space-x-4 sm:space-x-6 mb-4">
                    <a href="https://www.linkedin.com/in/alexis-ki-099781358" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary-color)] transition-colors duration-300 transform hover:scale-105" style={{ color: 'var(--gray-text)' }} aria-label="LinkedIn">
                        <FaLinkedin className="text-lg sm:text-xl md:text-2xl" />
                    </a>
                    <a href="https://github.com/Toutvendre" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary-color)] transition-colors duration-300 transform hover:scale-105" style={{ color: 'var(--gray-text)' }} aria-label="GitHub">
                        <FaGithub className="text-lg sm:text-xl md:text-2xl" />
                    </a>
                    <a href="https://x.com/AlexisKI07" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary-color)] transition-colors duration-300 transform hover:scale-105" style={{ color: 'var(--gray-text)' }} aria-label="Twitter">
                        <FaTwitter className="text-lg sm:text-xl md:text-2xl" />
                    </a>
                    <a href="https://instagram.com/ton-profil" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary-color)] transition-colors duration-300 transform hover:scale-105" style={{ color: 'var(--gray-text)' }} aria-label="Instagram">
                        <FaInstagram className="text-lg sm:text-xl md:text-2xl" />
                    </a>
                </div>
                <p className="text-xs sm:text-sm font-light tracking-wide" style={{ color: 'var(--gray-text)' }}>© 2025 KI Brou Alexis. Tous droits réservés.</p>
            </footer>
        </div>
    );
}

export default About;