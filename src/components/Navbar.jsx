import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useTheme } from '../ThemeContext';

export default function Navbar() {
  const { darkMode, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 h-20 w-full z-50 backdrop-blur-md transition-all duration-300 ${
      darkMode 
        ? 'bg-gray-900/80 border-b border-gray-700/50' 
        : 'bg-white/80 border-b border-gray-200/50'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            to="/" 
            className={`text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300`}
            onClick={closeMenu}
          >
            adarsh
          </Link>
          
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8 lg:ml-20">
            <Link 
              to="/#about" 
              className={`relative px-3 lg:px-4 py-2 rounded-xl font-medium transition-all duration-300 hover:scale-105 ${
                darkMode 
                  ? 'text-gray-300 hover:text-white hover:bg-gray-700/50' 
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100/50'
              }`}
            >
              About
            </Link>
            <Link 
              to="/projects" 
              className={`relative px-3 lg:px-4 py-2 rounded-xl font-medium transition-all duration-300 hover:scale-105 ${
                darkMode 
                  ? 'text-gray-300 hover:text-white hover:bg-gray-700/50' 
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100/50'
              }`}
            >
              Projects
            </Link>
            <Link 
              to="/blog" 
              className={`relative px-3 lg:px-4 py-2 rounded-xl font-medium transition-all duration-300 hover:scale-105 ${
                darkMode 
                  ? 'text-gray-300 hover:text-white hover:bg-gray-700/50' 
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100/50'
              }`}
            >
              Blogs
            </Link>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Resume Button - Hidden on small screens */}
            <a
              href="/adarsh_resume.pdf"
              download
              className={`hidden sm:block px-4 lg:px-6 py-2 rounded-xl font-medium border-2 transition-all duration-300 hover:scale-105 text-sm lg:text-base ${
                darkMode 
                  ? 'border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white' 
                  : 'border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white'
              }`}
            >
              Resume
            </a>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 sm:p-3 rounded-xl transition-all duration-300 hover:scale-110 ${
                darkMode 
                  ? 'bg-gray-700/50 hover:bg-gray-600 text-yellow-400' 
                  : 'bg-gray-100/50 hover:bg-gray-200 text-orange-500'
              }`}
              title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {darkMode ? (
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMenu}
              className={`md:hidden p-2 rounded-xl transition-all duration-300 hover:scale-105 ${
                darkMode 
                  ? 'text-gray-300 hover:text-white hover:bg-gray-700/50' 
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100/50'
              }`}
              aria-label="Toggle mobile menu"
            >
              <div className="relative w-6 h-6">
                <div className={`absolute top-1/2 left-1/2 w-5 h-0.5 bg-current transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45' : '-translate-y-1.5'
                }`}></div>
                <div className={`absolute top-1/2 left-1/2 w-5 h-0.5 bg-current transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}></div>
                <div className={`absolute top-1/2 left-1/2 w-5 h-0.5 bg-current transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45' : 'translate-y-1.5'
                }`}></div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden fixed inset-0 top-20 bg-black/50 backdrop-blur-sm z-40 transition-all duration-300 ${
        isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`} onClick={closeMenu}></div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed top-20 left-0 right-0 z-50 transition-all duration-300 transform ${
        isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      } ${
        darkMode 
          ? 'bg-gray-900/95 border-b border-gray-700/50' 
          : 'bg-white/95 border-b border-gray-200/50'
      } backdrop-blur-md`}>
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col space-y-4">
            {/* Mobile Navigation Links */}
            <Link 
              to="/#about" 
              onClick={closeMenu}
              className={`px-4 py-3 rounded-xl font-medium text-center transition-all duration-300 hover:scale-105 ${
                darkMode 
                  ? 'text-gray-300 hover:text-white hover:bg-gray-700/50' 
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100/50'
              }`}
            >
              About
            </Link>
            <Link 
              to="/projects" 
              onClick={closeMenu}
              className={`px-4 py-3 rounded-xl font-medium text-center transition-all duration-300 hover:scale-105 ${
                darkMode 
                  ? 'text-gray-300 hover:text-white hover:bg-gray-700/50' 
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100/50'
              }`}
            >
              Projects
            </Link>
            <Link 
              to="/blog" 
              onClick={closeMenu}
              className={`px-4 py-3 rounded-xl font-medium text-center transition-all duration-300 hover:scale-105 ${
                darkMode 
                  ? 'text-gray-300 hover:text-white hover:bg-gray-700/50' 
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100/50'
              }`}
            >
              Blogs
            </Link>
            

          </div>
        </div>
      </div>
    </nav>
  );
}