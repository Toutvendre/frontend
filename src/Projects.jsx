import { Link } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { useState, useEffect, useMemo, useContext } from 'react';
import { ThemeContext } from './ThemeContext.jsx';

function Projects() {
    const { primaryColor } = useContext(ThemeContext); // Retiré 'theme' car non utilisé

    const project3Images = useMemo(() => [
        "/images/connect1.png",
        "/images/registre1.png",
        "/images/tes2.png",
        "/images/tes.png",
        "/images/registre2.png",
        "/images/connect2.png",
        "/images/profile.png",
        "/images/accueil.png"
    ], []);

    const [currentImage, setCurrentImage] = useState(project3Images[0]);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);

        const changeImage = () => {
            const randomIndex = Math.floor(Math.random() * project3Images.length);
            setCurrentImage(project3Images[randomIndex]);
        };
        const intervalId = setInterval(changeImage, 5000);
        return () => clearInterval(intervalId);
    }, [project3Images]);

    const projects = useMemo(() => [
        {
            id: 1,
            title: "Projet 1",
            description: "Site e-commerce avec React et Tailwind CSS.",
            video: "/images/accueil.mp4",
            github: "https://github.com/Toutvendre",
            demo: "https://projet1-demo.com",
        },
        {
            id: 2,
            title: "Projet 2",
            description: "App mobile en React Native pour la gestion de tâches.",
            video: "/images/dash.mp4",
            github: "https://github.com/Toutvendre",
            demo: "https://projet2-demo.com",
        },
        {
            id: 3,
            title: "Projets variés",
            description: "Collection de projets variés réalisés et présentés, mettant en avant mes compétences et ma créativité.",
            image: currentImage,
            github: "https://github.com/Toutvendre",
        },
    ], [currentImage]);

    useEffect(() => {
        document.documentElement.style.setProperty('--primary-color', primaryColor);
    }, [primaryColor]);

    return (
        <div
            className="w-full min-h-screen flex flex-col"
            style={{ backgroundColor: 'var(--background-color)', color: 'var(--text-color)' }}
        >
            {/* Header */}
            <header
                className="w-full py-6 px-4 md:px-8 flex justify-center items-center"
                style={{ background: 'transparent' }}
            >
                <nav className="flex space-x-8">
                    {['/', '/about', '/projects', '/skills', '/services', '/contact'].map((path, index) => (
                        <Link
                            key={index}
                            to={path}
                            className="hover:text-[var(--primary-color)] font-medium transition-colors duration-300 px-2"
                            style={{ color: 'var(--gray-text)' }}
                        >
                            {['Accueil', 'A propos', 'Portfolio', 'Compétences', 'Services', 'Contact'][index]}
                        </Link>
                    ))}
                </nav>
            </header>

            {/* Section projets */}
            <section className="flex-1 px-4 md:px-8 py-16 flex flex-col items-center">
                <h1
                    className={`text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    style={{ color: 'var(--primary-color)' }}
                >
                    Mes Projets
                </h1>
                <p
                    className="text-sm sm:text-base md:text-lg leading-relaxed mb-12 text-center max-w-3xl"
                    style={{ color: 'var(--gray-text)' }}
                >
                    Découvrez mes réalisations en développement web et mobile, alliant performance, esthétique et modernité.
                </p>

                {/* Troisième carte élargie en haut */}
                <div className="w-full max-w-8xl flex justify-center mb-12">
                    {projects.slice(2, 3).map((project) => (
                        <div
                            key={project.id}
                            className="group bg-[rgba(var(--background-color-rgb),0.8)] rounded-xl shadow-md overflow-hidden w-full max-w-7xl transition-all duration-500 hover:-translate-y-4"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-100 object-cover transition-transform duration-700 group-hover:scale-[0.95]"
                            />
                            <div className="p-6 md:p-8">
                                <h2
                                    className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3"
                                    style={{ color: 'var(--primary-color)' }}
                                >
                                    {project.title}
                                </h2>
                                <p
                                    className="text-sm md:text-base leading-relaxed mb-6"
                                    style={{ color: 'var(--gray-text)' }}
                                >
                                    {project.description}
                                </p>
                                <div className="flex justify-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:text-[var(--primary-color)] transition-colors duration-300 transform hover:scale-110"
                                            style={{ color: 'var(--gray-text)' }}
                                        >
                                            <FaGithub className="text-xl md:text-2xl" />
                                        </a>
                                    )}
                                    {project.demo && (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:text-[var(--primary-color)] transition-colors duration-300 transform hover:scale-110"
                                            style={{ color: 'var(--gray-text)' }}
                                        >
                                            <FaExternalLinkAlt className="text-xl md:text-2xl" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Grille : Projet 1 et Projet 2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-8xl w-full">
                    {projects.slice(0, 2).map((project, index) => (
                        <div
                            key={project.id}
                            className="group bg-[rgba(var(--background-color-rgb),0.8)] rounded-xl shadow-md overflow-hidden transition-all duration-700 hover:-translate-y-2"
                            style={{ transitionDelay: `${index * 150}ms` }}
                        >
                            {project.video ? (
                                <video
                                    src={project.video}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-70 object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            ) : (
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-70 object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            )}
                            <div className="p-6">
                                <h2
                                    className="text-lg sm:text-xl md:text-2xl font-semibold mb-2"
                                    style={{ color: 'var(--primary-color)' }}
                                >
                                    {project.title}
                                </h2>
                                <p
                                    className="text-sm md:text-base leading-relaxed mb-4"
                                    style={{ color: 'var(--gray-text)' }}
                                >
                                    {project.description}
                                </p>
                                <div className="flex justify-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:text-[var(--primary-color)] transition-colors duration-300 transform hover:scale-110"
                                            style={{ color: 'var(--gray-text)' }}
                                        >
                                            <FaGithub className="text-xl md:text-2xl" />
                                        </a>
                                    )}
                                    {project.demo && (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:text-[var(--primary-color)] transition-colors duration-300 transform hover:scale-110"
                                            style={{ color: 'var(--gray-text)' }}
                                        >
                                            <FaExternalLinkAlt className="text-xl md:text-2xl" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer
                className="w-full py-6 px-4 md:px-8 text-center"
                style={{ background: 'transparent' }}
            >
                <div className="flex justify-center space-x-6 mb-4">
                    {[
                        { href: "https://www.linkedin.com/in/alexis-ki-099781358", icon: FaLinkedin },
                        { href: "https://github.com/Toutvendre", icon: FaGithub },
                        { href: "https://x.com/AlexisKI07", icon: FaTwitter },
                        { href: "https://instagram.com/ton-profil", icon: FaInstagram },
                    ].map((social, index) => (
                        <a
                            key={index}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[var(--primary-color)] transition-colors duration-300 transform hover:scale-110"
                            style={{ color: 'var(--gray-text)' }}
                            aria-label={social.href.split('/')[2]}
                        >
                            <social.icon className="text-xl md:text-2xl" />
                        </a>
                    ))}
                </div>
                <p className="text-sm font-light tracking-wide" style={{ color: 'var(--gray-text)' }}>
                    © 2025 KI Brou Alexis. Tous droits réservés.
                </p>
            </footer>
        </div>
    );
}

export default Projects;