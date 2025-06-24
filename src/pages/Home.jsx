import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useTheme } from '../ThemeContext';

export default function Home() {
  const { darkMode } = useTheme();
  
  return (
    <div className={darkMode ? 'dark' : ''}>
      <Navbar />
      
      {/* Hero Section */}
      <section className={`min-h-screen flex items-center relative overflow-hidden ${
        darkMode ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-slate-900' : 'bg-gradient-to-br from-white via-blue-50 to-indigo-100'
      }`}>
        
        {/* Floating background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute top-1/4 left-1/4 w-72 h-72 rounded-full opacity-20 ${
            darkMode ? 'bg-gradient-to-r from-indigo-500 to-fuchsia-600' : 'bg-gradient-to-r from-blue-200 to-purple-300'
          } blur-3xl animate-pulse`}></div>
          <div className={`absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-10 ${
            darkMode ? 'bg-gradient-to-r from-fuchsia-300 to-pink-400' : 'bg-gradient-to-r from-purple-200 to-brown-300'
          } blur-3xl animate-pulse delay-1000`}></div>
        </div>

        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Profile Image Placeholder */}
            <div className="mb-8 mt-6 flex justify-center">
              <div className={`w-32 h-32 rounded-full shadow-xl ${
                darkMode ? 'bg-gradient-to-r from-blue-500 to-purple-600' : 'bg-gradient-to-r from-blue-400 to-purple-500'
              } flex items-center justify-center border-4 border-white`}>
                <img src="./yn.jpg" alt="Your Name" className="w-full h-full object-cover w-32 h-32 rounded-full" />
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                
                
                <h1 className={`text-5xl md:text-7xl font-bold leading-tight ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Hi, I'm{' '}
                  <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                    Adarsh Naik
                  </span>
                </h1>
              </div>
              
              <p className={`text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                A final-year ECE undergrad at IIIT NR, exploring tech, development and problem-solving.
                
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4 pt-8">
                <a 
                  href="/Adarsh_Naik_Resume.pdf"
                  download
                  className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Download Resume
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
                
                <a 
                  href="#contact"
                  className={`px-8 py-4 rounded-2xl font-semibold border-2 transition-all duration-300 hover:scale-105 ${
                    darkMode 
                      ? 'border-gray-600 text-gray-300 hover:border-blue-500 hover:text-blue-400' 
                      : 'border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600'
                  }`}
                >
                  Let's Connect
                </a>
              </div>


              <div className="flex justify-center gap-6 pt-12">
                <a 
                  href="https://github.com/adarsh-naik-2004" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`p-4 rounded-2xl transition-all duration-300 hover:scale-110 hover:-translate-y-2 ${
                    darkMode 
                      ? 'bg-gray-800/50 hover:bg-gray-700 text-gray-300 hover:text-white border border-gray-700' 
                      : 'bg-white/80 hover:bg-white text-gray-600 hover:text-gray-900 border border-gray-200 shadow-lg'
                  }`}
                  title="GitHub"
                >
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                  </svg>
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/adarsh-manjunath-naik/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`p-4 rounded-2xl transition-all duration-300 hover:scale-110 hover:-translate-y-2 ${
                    darkMode 
                      ? 'bg-gray-800/50 hover:bg-blue-900 text-gray-300 hover:text-blue-300 border border-gray-700 hover:border-blue-600' 
                      : 'bg-white/80 hover:bg-blue-50 text-gray-600 hover:text-blue-600 border border-gray-200 shadow-lg hover:border-blue-300'
                  }`}
                  title="LinkedIn"
                >
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                
                <a 
                  href="https://leetcode.com/u/Adarsh_Manjunath_Naik/" 
                  target="_blank"
                  rel="noopener noreferrer" 
                  className={`p-4 rounded-2xl transition-all duration-300 hover:scale-110 hover:-translate-y-2 ${
                    darkMode 
                      ? 'bg-gray-800/50 hover:bg-orange-900 text-gray-300 hover:text-orange-300 border border-gray-700 hover:border-orange-600' 
                      : 'bg-white/80 hover:bg-orange-50 text-gray-600 hover:text-orange-600 border border-gray-200 shadow-lg hover:border-orange-300'
                  }`}
                  title="LeetCode"
                >
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104a5.35 5.35 0 0 0-.125.513a5.527 5.527 0 0 0 .062 2.362a5.83 5.83 0 0 0 .349 1.017a5.938 5.938 0 0 0 1.271 1.818l4.277 4.193l.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019l-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523a2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382a1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382a1.38 1.38 0 0 0-1.38-1.382z"/>
                  </svg>
                </a>

                <a 
                  href="https://x.com/Adarsh_M_Naik" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`p-4 rounded-2xl transition-all duration-300 hover:scale-110 hover:-translate-y-2 ${
                    darkMode 
                      ? 'bg-gray-800/50 hover:bg-sky-900 text-gray-300 hover:text-sky-300 border border-gray-700 hover:border-sky-600' 
                      : 'bg-white/80 hover:bg-sky-50 text-gray-600 hover:text-sky-600 border border-gray-200 shadow-lg hover:border-sky-300'
                  }`}
                  title="Twitter"
                >
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className={`w-6 h-10 rounded-full border-2 ${
            darkMode ? 'border-gray-400' : 'border-gray-600'
          } flex justify-center`}>
            <div className={`w-1 h-3 rounded-full mt-2 ${
              darkMode ? 'bg-gray-400' : 'bg-gray-600'
            } animate-pulse`}></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 ${
        darkMode ? 'bg-gray-900' : 'bg-gray-50'
      }`}>
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 ${
                darkMode 
                  ? 'bg-purple-900/50 text-purple-300 border border-purple-700' 
                  : 'bg-purple-100 text-purple-700 border border-purple-200'
              }`}>
                🚀 About Me
              </span>
              <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Passionate About{' '}
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Innovation
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className={`p-8 rounded-3xl shadow-lg ${
                darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
              }`}>
                <div className="space-y-6">
                  <p className={`text-lg leading-relaxed ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    Hi, I'm Adarsh! Born in Karnataka and brought up in Chhattisgarh, I'm currently pursuing my B.Tech at IIIT Naya Raipur.
                  </p>
                  <p className={`text-lg leading-relaxed ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    My journey with programming began in college, sparked by an interest in tech and a desire to explore new opportunities. Outside academics, I enjoy following cricket and staying connected to the things that keep life fun and engaging.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                {/* Skills Cards */}
                <div className={`p-6 rounded-2xl ${
                  darkMode ? 'bg-gradient-to-r from-blue-900/50 to-purple-900/50 border border-blue-800' : 'bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200'
                }`}>
                  <h3 className={`font-semibold mb-2 ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>
                    🎨 Frontend Development
                  </h3>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    React, NextJs, TypeScript, Tailwind CSS
                  </p>
                </div>

                <div className={`p-6 rounded-2xl ${
                  darkMode ? 'bg-gradient-to-r from-green-900/50 to-teal-900/50 border border-green-800' : 'bg-gradient-to-r from-green-50 to-teal-50 border border-green-200'
                }`}>
                  <h3 className={`font-semibold mb-2 ${darkMode ? 'text-green-300' : 'text-green-700'}`}>
                    ⚙️ Backend Development
                  </h3>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Node.js, Python, PostgreSQL, MongoDB
                  </p>
                </div>

                <div className={`p-6 rounded-2xl ${
                  darkMode ? 'bg-gradient-to-r from-orange-900/50 to-red-900/50 border border-orange-800' : 'bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200'
                }`}>
                  <h3 className={`font-semibold mb-2 ${darkMode ? 'text-orange-300' : 'text-orange-700'}`}>
                    ☁️ Cloud & DevOps
                  </h3>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    AWS, Docker, CI/CD, Kubernetes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 ${
        darkMode ? 'bg-gradient-to-br from-gray-800 via-gray-900 to-purple-900' : 'bg-gradient-to-br from-white via-blue-50 to-purple-50'
      }`}>
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-6 ${
              darkMode 
                ? 'bg-green-900/50 text-green-300 border border-green-700' 
                : 'bg-green-100 text-green-700 border border-green-200'
            }`}>
              📬 Get In Touch
            </span>
            
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Let's Build Something{' '}
              <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
                Amazing
              </span>
            </h2>
            
            <p className={`text-xl leading-relaxed mb-12 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              I'm currently open to new opportunities and exciting projects. 
              Whether you have a question, want to collaborate, or just want to say hi,
              I'd love to hear from you!
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a 
                href="mailto:adarshnaik270@gmail.com" 
                className="group relative px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  ✉️ Send Me an Email
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}