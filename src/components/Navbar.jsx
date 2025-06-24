import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useTheme } from '../ThemeContext';
import PropTypes from 'prop-types';

export default function Navbar() {
  const { darkMode, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'backdrop-blur-md border-b' : ''
    } ${
      darkMode 
        ? 'bg-gray-900/80 border-gray-700/50' 
        : 'bg-white/80 border-gray-200/50'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
            onClick={closeMenu}
          >
            adarsh
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 ml-20">
            <NavLink to="/#about" darkMode={darkMode}>About</NavLink>
            <NavLink to="/projects" darkMode={darkMode}>Projects</NavLink>
            <NavLink to="/blog" darkMode={darkMode}>Blogs</NavLink>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Resume Button - Desktop */}
            <a
              href="/Adarsh_Naik_Resume.pdf"
              download
              className={`hidden md:flex items-center px-4 py-2 rounded-lg font-medium border-2 transition-all duration-300 hover:scale-105 ${
                darkMode 
                  ? 'border-blue-500 text-blue-400 hover:bg-blue-500/20' 
                  : 'border-blue-500 text-blue-600 hover:bg-blue-500/20'
              }`}
            >
              Resume
            </a>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2.5 rounded-lg transition-all duration-300 hover:scale-110 ${
                darkMode 
                  ? 'bg-gray-700/50 hover:bg-gray-600 text-yellow-400' 
                  : 'bg-gray-100/50 hover:bg-gray-200 text-orange-500'
              }`}
              aria-label={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {darkMode ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={toggleMenu}
              className={`md:hidden p-2 rounded-lg transition-all duration-300 ${
                darkMode 
                  ? 'text-gray-300 hover:bg-gray-700/50' 
                  : 'text-gray-700 hover:bg-gray-100/50'
              }`}
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
            >
              <div className="relative w-6 h-6">
                <span className="sr-only">{isMenuOpen ? 'Close menu' : 'Open menu'}</span>
                <div className={`absolute top-1/2 left-1/2 w-6 h-0.5 bg-current transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45' : '-translate-y-2'
                }`}></div>
                <div className={`absolute top-1/2 left-1/2 w-6 h-0.5 bg-current transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}></div>
                <div className={`absolute top-1/2 left-1/2 w-6 h-0.5 bg-current transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45' : 'translate-y-2'
                }`}></div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 top-16 z-40 transition-all duration-300 ease-out ${
        isMenuOpen 
          ? 'opacity-100 visible translate-y-0' 
          : 'opacity-0 invisible -translate-y-4'
      }`}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={closeMenu}
          role="presentation"
        ></div>
        
        {/* Menu Content */}
        <div className={`relative mx-4 mt-2 rounded-xl shadow-xl ${
          darkMode 
            ? 'bg-gray-800 border border-gray-700' 
            : 'bg-white border border-gray-200'
        }`}>
          <div className="flex flex-col p-4">
            <MobileNavLink to="/#about" darkMode={darkMode} onClick={closeMenu}>
              About
            </MobileNavLink>
            <MobileNavLink to="/projects" darkMode={darkMode} onClick={closeMenu}>
              Projects
            </MobileNavLink>
            <MobileNavLink to="/blog" darkMode={darkMode} onClick={closeMenu}>
              Blogs
            </MobileNavLink>
            <a
              href="/Adarsh_Naik_Resume.pdf"
              download
              className={`px-4 py-3 rounded-lg font-medium text-center transition-colors duration-300 ${
                darkMode 
                  ? 'text-blue-400 hover:bg-blue-500/20' 
                  : 'text-blue-600 hover:bg-blue-500/20'
              }`}
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

// NavLink component
function NavLink({ to, darkMode, children }) {
  return (
    <Link 
      to={to}
      className={`px-3 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 ${
        darkMode 
          ? 'text-gray-300 hover:text-white hover:bg-gray-700/30' 
          : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100/50'
      }`}
    >
      {children}
    </Link>
  );
}

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  darkMode: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
};

// MobileNavLink component
function MobileNavLink({ to, darkMode, onClick, children }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`px-4 py-3 rounded-lg font-medium transition-colors duration-300 ${
        darkMode 
          ? 'text-gray-300 hover:bg-gray-700/30' 
          : 'text-gray-700 hover:bg-gray-100/50'
      }`}
    >
      {children}
    </Link>
  );
}

MobileNavLink.propTypes = {
  to: PropTypes.string.isRequired,
  darkMode: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};