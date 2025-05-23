import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';

function Home() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    // Fonction pour basculer l'état du menu


    return (
        <div className="w-full h-screen flex flex-col" style={{ backgroundColor: 'var(--background-color)', color: 'var(--text-color)' }}>
            {/* Header */}
            <header className="w-full py-6 px-6 flex justify-between items-center md:justify-center" style={{ background: 'linear-gradient(to bottom, rgba(var(--primary-color-rgb), 0.1), transparent)' }}>


                {/* Menu principal (grands écrans) */}
                <nav className="hidden md:flex space-x-8 justify-center select-none ">
                    <NavLink to="/" exact className={({ isActive }) => `font-medium transition-all duration-300 px-2 border-b-2 outline-none focus:outline-none ${isActive ? 'text-[var(--primary-color)] border-[var(--primary-color)]' : 'text-[var(--gray-text)] border-transparent hover:text-[var(--primary-color)] hover:border-[var(--primary-color)]'}`}>Accueil</NavLink>
                    <NavLink to="/about" className={({ isActive }) => `font-medium transition-all duration-300 px-2 border-b-2 outline-none focus:outline-none ${isActive ? 'text-[var(--primary-color)] border-[var(--primary-color)]' : 'text-[var(--gray-text)] border-transparent hover:text-[var(--primary-color)] hover:border-[var(--primary-color)]'}`}>A propos</NavLink>
                    <NavLink to="/projects" className={({ isActive }) => `font-medium transition-all duration-300 px-2 border-b-2 outline-none focus:outline-none ${isActive ? 'text-[var(--primary-color)] border-[var(--primary-color)]' : 'text-[var(--gray-text)] border-transparent hover:text-[var(--primary-color)] hover:border-[var(--primary-color)]'}`}>Portfolio</NavLink>
                    <NavLink to="/skills" className={({ isActive }) => `font-medium transition-all duration-300 px-2 border-b-2 outline-none focus:outline-none ${isActive ? 'text-[var(--primary-color)] border-[var(--primary-color)]' : 'text-[var(--gray-text)] border-transparent hover:text-[var(--primary-color)] hover:border-[var(--primary-color)]'}`}>Compétences</NavLink>
                    <NavLink to="/services" className={({ isActive }) => `font-medium transition-all duration-300 px-2 border-b-2 outline-none focus:outline-none ${isActive ? 'text-[var(--primary-color)] border-[var(--primary-color)]' : 'text-[var(--gray-text)] border-transparent hover:text-[var(--primary-color)] hover:border-[var(--primary-color)]'}`}>Services</NavLink>
                    <NavLink to="/contact" className={({ isActive }) => `font-medium transition-all duration-300 px-2 border-b-2 outline-none focus:outline-none ${isActive ? 'text-[var(--primary-color)] border-[var(--primary-color)]' : 'text-[var(--gray-text)] border-transparent hover:text-[var(--primary-color)] hover:border-[var(--primary-color)]'}`}>Contact</NavLink>
                </nav>
            </header>
            {/* Section principale */}
            <section
                id="home"
                className="flex flex-col sm:flex-row items-center justify-between px-6 py-9 sm:px-6 flex-1 gap-4" // Réduit gap-6 à gap-4
            >
                {/* Image avec cadre */}
                <div className="w-full sm:w-1/2 flex justify-center mt-4 sm:mt-0 relative">
                    <div className="relative w-60 h-56 sm:w-64 sm:h-72 md:w-72 md:h-96 lg:w-80 lg:h-96">
                        <div className="relative w-full h-[125%] ms-auto">
                            <div
                                className={`select-none absolute w-full h-full bg-cover bg-center z-20 transition-all duration-700 ease-out transform hover:scale-105 hover:shadow-xl ${isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-80 translate-y-10'
                                    }`}
                                style={{
                                    top: '-15%',
                                    backgroundImage: 'url("/images/duc.png")',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    boxShadow: '0 0 30px rgba(0, 0, 0, 0)',
                                }}
                            ></div>
                            <div className="tw-absolute tw-inset-0 tw-z-30 tw-pointer-events-none tw-select-none">
                                {/* Bordure du haut */}
                                <div
                                    className="tw-absolute tw-top-[-10%] tw-left-[-8%] tw-w-[12%] tw-h-[8%] tw-border-t-4 tw-border-l-4 tw-hidden md:tw-block sm:tw-w-[10%] sm:tw-h-[6%]"
                                    style={{ borderColor: 'var(--primary-color)' }}
                                ></div>
                                {/* Bordure du bas */}
                                <div
                                    className="tw-absolute tw-bottom-[2%] tw-right-[-8%] tw-w-[12%] tw-h-[8%] tw-border-b-4 tw-border-r-4 tw-hidden md:tw-block sm:tw-w-[10%] sm:tw-h-[6%]"
                                    style={{ borderColor: 'var(--primary-color)' }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Texte et boutons */}
                <div className="w-full sm:w-1/2 px-2 sm:px-4 flex flex-col justify-center text-center sm:text-left"> {/* Réduit px-4 sm:px-8 à px-2 sm:px-4 */}
                    <h1
                        className={`text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                            }`}
                    >
                        Salut, je suis <span style={{ color: 'var(--primary-color)' }}>Alexis</span>
                    </h1>

                    <h2
                        className={`text-lg sm:text-xl md:text-3xl lg:text-4xl font-semibold mb-4 md:mb-6 transition-all duration-1000 delay-200 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                            }`}
                        style={{ color: 'var(--gray-text)' }}
                    >
                        Je suis <span style={{ color: 'var(--primary-color)' }}>Développeur</span>
                    </h2>

                    <p
                        className="mb-6 md:mb-8 text-sm sm:text-base md:text-lg leading-relaxed text-center sm:text-left"
                        style={{ color: 'var(--gray-text)' }}
                    >
                        Développeur Web et Mobile passionné, je maîtrise HTML, CSS, JavaScript, React et PHP pour créer des sites performants et esthétiques, avec des interfaces intuitives, tout en restant à la pointe des dernières technologies pour offrir des solutions modernes et de haute qualité.
                    </p>

                    <div className="flex justify-center sm:justify-center md:justify-start space-x-4 md:space-x-6 mb-6 md:mb-8">
                        <a
                            href="https://www.linkedin.com/in/alexis-ki-099781358"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[var(--primary-color)] transition-colors duration-300 transform hover:scale-110"
                            style={{ color: 'var(--gray-text)' }}
                        >
                            <FaLinkedin className="text-base sm:text-lg md:text-2xl" />
                        </a>
                        <a
                            href="https://github.com/Toutvendre"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[var(--primary-color)] transition-colors duration-300 transform hover:scale-110"
                            style={{ color: 'var(--gray-text)' }}
                        >
                            <FaGithub className="text-base sm:text-lg md:text-2xl" />
                        </a>
                        <a
                            href="https://x.com/AlexisKI07"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[var(--primary-color)] transition-colors duration-300 transform hover:scale-110"
                            style={{ color: 'var(--gray-text)' }}
                        >
                            <FaTwitter className="text-base sm:text-lg md:text-2xl" />
                        </a>
                        <a
                            href="https://instagram.com/ton-profil"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[var(--primary-color)] transition-colors duration-300 transform hover:scale-110"
                            style={{ color: 'var(--gray-text)' }}
                        >
                            <FaInstagram className="text-base sm:text-lg md:text-2xl" />
                        </a>
                    </div>

                    <div className="flex flex-row flex-wrap items-center justify-start gap-5 mt-6">
                        <Link
                            to="/contact"
                            className="inline-block px-4 py-2 sm:px-5 sm:py-3 md:px-6 md:py-3 text-sm sm:text-base md:text-lg text-white rounded-full hover:bg-[var(--secondary-color)] transition-all duration-300 transform hover:scale-105 shadow-md text-center"
                            style={{ backgroundColor: 'var(--primary-color)' }}
                        >
                            Engagez-moi
                        </Link>

                        <a
                            href="/pdf/cv.pdf"
                            download
                            className="inline-block px-4 py-2 sm:px-5 sm:py-3 md:px-6 md:py-3 text-sm sm:text-base md:text-lg text-white rounded-full hover:bg-[var(--secondary-color)] transition-all duration-300 transform hover:scale-105 shadow-md text-center"
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