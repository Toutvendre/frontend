import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';

function Home() {
    const [isVisible, setIsVisible] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // État pour le menu hamburger

    useEffect(() => {
        setIsVisible(true);
    }, []);

    // Fonction pour basculer l'état du menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="w-full h-screen flex flex-col" style={{ backgroundColor: 'var(--background-color)', color: 'var(--text-color)' }}>
            {/* Header */}
            <header className="w-full py-6 px-6 flex justify-between items-center md:justify-center" style={{ background: 'linear-gradient(to bottom, rgba(var(--primary-color-rgb), 0.1), transparent)' }}>
                {/* Bouton hamburger (petits écrans) */}
                <button
                    className="md:hidden text-[var(--gray-text)] hover:text-[var(--primary-color)] transition-colors duration-300"
                    onClick={toggleMenu}
                >
                    {/* Icône hamburger */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>

                {/* Menu principal (grands écrans) */}
                <nav className="hidden md:flex space-x-8 justify-center select-none">
                    <NavLink to="/" exact className={({ isActive }) => `font-medium transition-all duration-300 px-2 border-b-2 outline-none focus:outline-none ${isActive ? 'text-[var(--primary-color)] border-[var(--primary-color)]' : 'text-[var(--gray-text)] border-transparent hover:text-[var(--primary-color)] hover:border-[var(--primary-color)]'}`}>Accueil</NavLink>
                    <NavLink to="/about" className={({ isActive }) => `font-medium transition-all duration-300 px-2 border-b-2 outline-none focus:outline-none ${isActive ? 'text-[var(--primary-color)] border-[var(--primary-color)]' : 'text-[var(--gray-text)] border-transparent hover:text-[var(--primary-color)] hover:border-[var(--primary-color)]'}`}>A propos</NavLink>
                    <NavLink to="/projects" className={({ isActive }) => `font-medium transition-all duration-300 px-2 border-b-2 outline-none focus:outline-none ${isActive ? 'text-[var(--primary-color)] border-[var(--primary-color)]' : 'text-[var(--gray-text)] border-transparent hover:text-[var(--primary-color)] hover:border-[var(--primary-color)]'}`}>Portfolio</NavLink>
                    <NavLink to="/skills" className={({ isActive }) => `font-medium transition-all duration-300 px-2 border-b-2 outline-none focus:outline-none ${isActive ? 'text-[var(--primary-color)] border-[var(--primary-color)]' : 'text-[var(--gray-text)] border-transparent hover:text-[var(--primary-color)] hover:border-[var(--primary-color)]'}`}>Compétences</NavLink>
                    <NavLink to="/services" className={({ isActive }) => `font-medium transition-all duration-300 px-2 border-b-2 outline-none focus:outline-none ${isActive ? 'text-[var(--primary-color)] border-[var(--primary-color)]' : 'text-[var(--gray-text)] border-transparent hover:text-[var(--primary-color)] hover:border-[var(--primary-color)]'}`}>Services</NavLink>
                    <NavLink to="/contact" className={({ isActive }) => `font-medium transition-all duration-300 px-2 border-b-2 outline-none focus:outline-none ${isActive ? 'text-[var(--primary-color)] border-[var(--primary-color)]' : 'text-[var(--gray-text)] border-transparent hover:text-[var(--primary-color)] hover:border-[var(--primary-color)]'}`}>Contact</NavLink>
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

            {/* Section principale */}
            <section id="home" className="flex flex-col md:flex-row items-center justify-between px-6 py-10 md:px-6 flex-1">

                {/* Image avec cadre */}
                <div className="w-full md:w-1/2 flex justify-center mt-4 md:mt-2 relative ms-5">
                    <div className="relative w-64 h-72 sm:w-90 sm:h-50 md:w-96 md:h-96">
                        <div className="relative w-full h-[125%] ms-auto">
                            <div
                                className={` select-none absolute w-full h-full bg-cover bg-center z-20 transition-all duration-700 ease-out transform hover:scale-105 hover:shadow-xl ${isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-80 translate-y-10'}`}

                                style={{
                                    top: '-15%',
                                    backgroundImage: 'url("/images/duc.png")',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    boxShadow: '0 0 30px rgba(0, 0, 0, 0)',
                                }}
                            ></div>
                            <div className="absolute inset-0 z-30 pointer-events-none select-none">
                                <div className="absolute top-[-15%] left-[-10%] w-[15%] h-[10%] border-t-4 border-l-4 sm:w-[13%] sm:h-[8%]" style={{ borderColor: 'var(--primary-color)' }}></div>
                                <div className="absolute bottom-[5%] right-[-15%] w-[15%] h-[10%] border-b-4 border-r-4 sm:w-[12%] sm:h-[8%]" style={{ borderColor: 'var(--primary-color)' }}></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Texte et boutons */}
                <div className="w-full md:w-1/2 px-4 select-none">
                    <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        Salut, je suis <span style={{ color: 'var(--primary-color)' }}>Alexis</span>
                    </h1>
                    <h2 className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 md:mb-6 transition-all duration-1000 delay-200 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ color: 'var(--gray-text)' }}>
                        Je suis <span style={{ color: 'var(--primary-color)' }}>Développeur</span>
                    </h2>
                    <p className="mb-6 md:mb-8 text-sm sm:text-base md:text-lg leading-relaxed" style={{ color: 'var(--gray-text)' }}>
                        Développeur Web et Mobile passionné, je maîtrise HTML, CSS, JavaScript, React et PHP pour créer des sites performants et esthétiques, avec des interfaces intuitives, tout en restant à la pointe des dernières technologies pour offrir des solutions modernes et de haute qualité.
                    </p>
                    <div className="flex space-x-4 md:space-x-6 mb-6 md:mb-8">
                        <a href="https://www.linkedin.com/in/alexis-ki-099781358" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary-color)] transition-colors duration-300 transform hover:scale-110" style={{ color: 'var(--gray-text)' }}>
                            <FaLinkedin className="text-xl md:text-2xl" />
                        </a>
                        <a href="https://github.com/Toutvendre" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary-color)] transition-colors duration-300 transform hover:scale-110" style={{ color: 'var(--gray-text)' }}>
                            <FaGithub className="text-xl md:text-2xl" />
                        </a>
                        <a href="https://x.com/AlexisKI07" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary-color)] transition-colors duration-300 transform hover:scale-110" style={{ color: 'var(--gray-text)' }}>
                            <FaTwitter className="text-xl md:text-2xl" />
                        </a>
                        <a href="https://instagram.com/ton-profil" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary-color)] transition-colors duration-300 transform hover:scale-110" style={{ color: 'var(--gray-text)' }}>
                            <FaInstagram className="text-xl md:text-2xl" />
                        </a>
                    </div>
                    <div className="flex flex-row flex-wrap items-center justify-start gap-4 mt-6">
                        <Link
                            to="/contact"
                            className="inline-block px-4 py-2 md:px-6 md:py-3 text-white rounded-full hover:bg-[var(--secondary-color)] transition-all duration-300 transform hover:scale-105 shadow-md"
                            style={{ backgroundColor: 'var(--primary-color)' }}
                        >
                            Engagez-moi
                        </Link>

                        <a
                            href="/pdf/cv.pdf"
                            download
                            className="inline-block px-4 py-2 md:px-6 md:py-3 text-white rounded-full hover:bg-[var(--secondary-color)] transition-all duration-300 transform hover:scale-105 shadow-md"
                            style={{ backgroundColor: 'var(--primary-color)' }}
                        >
                            Télécharger CV
                        </a>
                    </div>

                </div>
            </section>
        </div>
    );
}

export default Home;