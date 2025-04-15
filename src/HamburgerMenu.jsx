import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function HamburgerMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="fixed top-4 left-4 z-50">
            {/* Icône hamburger */}
            <button
                className="md:hidden text-[var(--gray-text)] hover:text-[var(--primary-color)] transition-colors duration-300"
                onClick={toggleMenu}
                title="Menu"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>

            {/* Menu déroulant */}
            {isOpen && (
                <div className="fixed top-16 left-0 w-full bg-[var(--background-color)] shadow-lg z-40 p-4 flex flex-col space-y-4 md:hidden transition-all duration-300">
                    <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-[var(--primary-color)] font-medium" style={{ color: 'var(--gray-text)' }}>Accueil</Link>
                    <Link to="/about" onClick={() => setIsOpen(false)} className="hover:text-[var(--primary-color)] font-medium" style={{ color: 'var(--gray-text)' }}>À propos</Link>
                    <Link to="/projects" onClick={() => setIsOpen(false)} className="hover:text-[var(--primary-color)] font-medium" style={{ color: 'var(--gray-text)' }}>Portfolio</Link>
                    <Link to="/skills" onClick={() => setIsOpen(false)} className="hover:text-[var(--primary-color)] font-medium" style={{ color: 'var(--gray-text)' }}>Compétences</Link>
                    <Link to="/services" onClick={() => setIsOpen(false)} className="hover:text-[var(--primary-color)] font-medium" style={{ color: 'var(--gray-text)' }}>Services</Link>
                    <Link to="/contact" onClick={() => setIsOpen(false)} className="hover:text-[var(--primary-color)] font-medium" style={{ color: 'var(--gray-text)' }}>Contact</Link>
                </div>
            )}
        </div>
    );
}

export default HamburgerMenu;
