import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';

function Home() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="w-full h-screen flex flex-col" style={{ backgroundColor: 'var(--background-color)', color: 'var(--text-color)' }}>
            <header className="w-full py-6 px-4 flex justify-center items-center" style={{ background: 'linear-gradient(to bottom, rgba(var(--primary-color-rgb), 0.1), transparent)' }}>
                <nav className="flex space-x-4 sm:space-x-6 md:space-x-8">
                    <a href="#home" className="hover:text-[var(--primary-color)] font-medium transition-colors duration-300 text-sm sm:text-base" style={{ color: 'var(--gray-text)' }}>Accueil</a>
                    <a href="/services" className="hover:text-[var(--primary-color)] font-medium transition-colors duration-300 text-sm sm:text-base" style={{ color: 'var(--gray-text)' }}>Services</a>
                    <a href="/skills" className="hover:text-[var(--primary-color)] font-medium transition-colors duration-300 text-sm sm:text-base" style={{ color: 'var(--gray-text)' }}>Compétences</a>
                    <a href="#education" className="hover:text-[var(--primary-color)] font-medium transition-colors duration-300 text-sm sm:text-base" style={{ color: 'var(--gray-text)' }}>Éducation</a>
                    <a href="#experience" className="hover:text-[var(--primary-color)] font-medium transition-colors duration-300 text-sm sm:text-base" style={{ color: 'var(--gray-text)' }}>Expérience</a>
                    <Link to="/contact" className="hover:text-[var(--primary-color)] font-medium transition-colors duration-300 text-sm sm:text-base" style={{ color: 'var(--gray-text)' }}>Contact</Link>
                </nav>
            </header>
            <section id="home" className="flex flex-col md:flex-row items-center justify-between px-4 md:px-8 flex-1">
                <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0 relative">
                    <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">
                        {/* Conteneur pour l'image et le cadre */}
                        <div className="relative w-full h-[110%]">
                            {/* Image */}
                            <div
                                className={`absolute w-full h-full bg-cover bg-center z-20 transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-80 translate-y-10'}`}
                                style={{
                                    top: '-15%',
                                    backgroundImage: 'url("/images/alex.png")',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    boxShadow: '0 0 30px rgba(0, 0, 0, 0)',
                                }}
                            ></div>
                            {/* Cadre indépendant */}
                            <div className="absolute inset-0 z-30 pointer-events-none">
                                <div className="absolute top-[-10%] left-[-9%] w-[15%] h-[10%] border-t-4 border-l-4 sm:w-[12%] sm:h-[8%]" style={{ borderColor: 'var(--primary-color)' }}></div>
                                <div className="absolute bottom-[5%] right-[-15%] w-[15%] h-[10%] border-b-4 border-r-4 sm:w-[12%] sm:h-[8%]" style={{ borderColor: 'var(--primary-color)' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 px-4">
                    <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        Salut, je suis <span style={{ color: 'var(--primary-color)' }}>Alexis</span>
                    </h1>
                    <h2 className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 md:mb-6 transition-all duration-1000 delay-200 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ color: 'var(--gray-text)' }}>
                        Je suis <span style={{ color: 'var(--primary-color)' }}>Développeur</span>
                    </h2>
                    <p className="mb-6 md:mb-8 text-sm sm:text-base md:text-lg leading-relaxed" style={{ color: 'var(--gray-text)' }}>
                        Web et Mobile passionné. Spécialisé en HTML, CSS, JavaScript, React et PHP, je conçois des sites performants et esthétiques, avec des interfaces intuitives. À jour sur les dernières technos, je livre des solutions modernes et de qualité.
                    </p>
                    <div className="flex space-x-4 md:space-x-6 mb-6 md:mb-8">
                        <a href="https://linkedin.com/in/ton-profil" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary-color)] transition-colors duration-300 transform hover:scale-110" style={{ color: 'var(--gray-text)' }}>
                            <FaLinkedin className="text-xl md:text-2xl" />
                        </a>
                        <a href="https://github.com/Toutvendre" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary-color)] transition-colors duration-300 transform hover:scale-110" style={{ color: 'var(--gray-text)' }}>
                            <FaGithub className="text-xl md:text-2xl" />
                        </a>
                        <a href="https://twitter.com/ton-profil" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary-color)] transition-colors duration-300 transform hover:scale-110" style={{ color: 'var(--gray-text)' }}>
                            <FaTwitter className="text-xl md:text-2xl" />
                        </a>
                        <a href="https://instagram.com/ton-profil" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary-color)] transition-colors duration-300 transform hover:scale-110" style={{ color: 'var(--gray-text)' }}>
                            <FaInstagram className="text-xl md:text-2xl" />
                        </a>
                    </div>
                    <Link
                        to="/contact"
                        className="inline-block px-4 py-2 md:px-6 md:py-3 text-white rounded-full hover:bg-[var(--secondary-color)] transition-all duration-300 transform hover:scale-105 shadow-md"
                        style={{ backgroundColor: 'var(--primary-color)' }}
                    >
                        Engagez-moi
                    </Link>
                </div>
            </section>
        </div>
    );
}

export default Home;