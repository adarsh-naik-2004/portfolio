import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useTheme } from '../ThemeContext';

const projects = [
  {
    title: 'CricStore',
    description: 'A full-stack microservices-based eCommerce platform for cricket gear with real-time updates and modular design.',
    longDescription: 'Built with MERN, Kafka, PostgreSQL, and AWS, CricStore features multi-tenancy, RSA-based authentication, live shopping via WebSockets, and modular microservices for scalable eCommerce.',
    tech: ['MERN', 'Next.js', 'PostgreSQL', 'Kafka', 'Docker', 'Kubernetes', 'AWS', 'WebSockets'],
    image: '/mico.png',
    demo: '',
    code: 'https://github.com/adarsh-naik-2004',
    category: 'Full Stack',
    status: 'In Progress'
  },
  {
    title: 'FileVault',
    description: 'A secure C++ file encryption system with AES-style logic and multi-file batch support.',
    longDescription: 'FileVault is a modular encryption tool built in C++ using AES-style transformations and parallel processing. It supports batch encryption with secure key handling via environment variables.',
    tech: ['C++', 'Cryptography', 'Parallel Processing'],
    image: '/filevault.jpg',
    demo: '',
    code: 'https://github.com/adarsh-naik-2004/FileVault',
    category: 'Low Level',
    status: 'Completed'
  },
  {
  title: 'AI Interview Platform',
  description: 'A full-stack interview simulator with Gemini AI, performance analytics, and real-time scoring.',
  longDescription: 'This React and Express-based platform simulates AI-driven interviews with secure authentication, real-time feedback from Gemini AI, and user dashboards showing interview history, scores, and insights. It supports JWT auth, protected routes, and a polished UI with Tailwind.',
  tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Gemini API', 'Tailwind', 'React Query'],
  image: '/image.png', // Replace with actual image
  demo: '', // Add if deployed
  code: 'https://github.com/adarsh-naik-2004/interview-platform',
  category: 'Full Stack',
  status: 'Completed',
  featured: true
},
  {
    title: 'Custom Reverse Proxy',
    description: 'A high-throughput reverse proxy with load balancing, health checks, and YAML-based config.',
    longDescription: 'This reverse proxy, built with Node.js, Redis, and Nginx, uses worker-thread clustering and circuit breaker patterns to handle 8000+ concurrent connections with <100ms latency.',
    tech: ['Node.js', 'Nginx', 'Redis', 'YAML', 'Zod', 'Clustering'],
    image: '/reverse-proxy.jpg',
    demo: '',
    code: 'https://github.com/adarsh-naik-2004/proxy',
    category: 'DevOps',
    status: 'Completed'
  },
 {
  title: 'Mindwell',
  description: 'A full-stack mental health assessment tool with multimodal sentiment analysis using audio and text inputs.',
  longDescription: 'Mindwell integrates BERT-based text embeddings and MFCC-processed audio features into a multimodal deep learning model using TensorFlow. It includes a Flask web app with speech recognition, real-time chatbot, and secure user authentication for comprehensive mental health assessment.',
  tech: ['Python', 'TensorFlow', 'Flask', 'BERT', 'MFCC', 'SpeechRecognition', 'NLP', 'SQLAlchemy'],
  image: '/mindwell_final (1).png', // Replace later with actual image
  demo: '', // Add if deployed
  code: '', // Add if public repo available
  category: 'AI/ML',
  status: 'Completed',
  featured: true
 },
 {
  title: 'Network Slicing Classification',
  description: 'A KNN-based classification model to identify 5G network slicing types for optimized resource allocation.',
  longDescription: 'This project applies a K-Nearest Neighbors classifier to 5G network data to accurately classify network slice types. It includes data preprocessing, feature extraction, and evaluation metrics to validate improvements over baseline models.',
  tech: ['Python', 'Machine Learning', 'KNN'],
  image: '/knn_pro.png', // Replace later with actual image
  demo: '', // Optional
  code: 'https://github.com/adarsh-naik-2004/Network-Slicing-Classification',
  category: 'ML/Networks',
  status: 'Completed',
  featured: false
},
{
  title: 'Text Summarizer',
  description: 'An NLP-based text summarization tool tailored for general documents and domain-specific reviews.',
  longDescription: 'Built using Python and Flask, this app leverages NLP techniques to generate meaningful summaries from noisy and unstructured input like car reviews. It includes a clean web interface, summarization accuracy of 77.6%, and interactive visualizations using graphs.',
  tech: ['Python', 'NLP', 'Flask', 'JavaScript', 'HTML', 'CSS'],
  image: '/summarizer.png', // Replace with real image
  demo: '', // Add when deployed
  code: 'https://github.com/adarsh-naik-2004/NLP-Based-Text-Summarizer',
  category: 'NLP',
  status: 'Completed',
  featured: false
},
  {
  title: 'Audio Equalizer',
  description: 'A MATLAB-based DSP project that implements an interactive audio equalizer with real-time feedback.',
  longDescription: 'Developed as part of a DSP course, this project features an audio equalizer in MATLAB with user-adjustable frequency sliders, vocal/instrumental splitting, and real-time audio feedback. It integrates DSP concepts like FFT, Butterworth filters, and audio sampling.',
  tech: ['MATLAB', 'DSP', 'FFT', 'Butterworth Filter', 'Audio Processing'],
  image: '/matlab_2.jpg', // Replace with an actual image if needed
  demo: '', // MATLAB-based project, so demo is not required
  code: 'https://github.com/adarsh-naik-2004/Audio-Equalizer-using-Matlab',
  category: 'Signal Processing',
  status: 'Completed',
  featured: false
 },
{
    title: 'AR Try-On App',
    description: 'An AR-based try-on experience for watches and furniture with realistic wrist alignment.',
    longDescription: 'Built with Unity, Blender, and AR frameworks, this app supports marker-based and marker-less AR try-ons, improving user experience with advanced depth masking and wrist detection.',
    tech: ['Unity', 'C#', 'AR', 'Blender', 'Marker Tracking'],
    image: '/ar_final.jpg',
    demo: '', // Optional
    code: 'https://github.com/adarsh-naik-2004/AR-Try-On_Watch_Furniture',
    category: 'Augmented Reality',
    status: 'Completed',
    featured: false,
  }


];

export default function Projects() {
  const { darkMode } = useTheme();
  
  const currentProjects = projects.filter(project => project.status === 'In Progress');
  const completedProjects = projects.filter(project => project.status === 'Completed');

  const ProjectCard = ({ project, index }) => (
    <div 
      key={index}
      className={`group rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl ${
        darkMode 
          ? 'bg-gray-800 border border-gray-700' 
          : 'bg-white border border-gray-200'
      }`}
    >
      {/* Project Image */}
      <div className="relative overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            darkMode 
              ? 'bg-blue-900/80 text-blue-300 border border-blue-700' 
              : 'bg-blue-100/80 text-blue-700 border border-blue-200'
          }`}>
            {project.category}
          </span>
        </div>
      </div>
      
      {/* Project Content */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className={`text-xl font-bold ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            {project.title}
          </h3>
          <span className={`px-2 py-1 rounded-lg text-xs font-medium ${
            project.status === 'Completed' 
              ? 'bg-green-100 text-green-700' 
              : 'bg-orange-100 text-orange-700'
          }`}>
            {project.status}
          </span>
        </div>
        
        <p className={`text-sm mb-4 leading-relaxed ${
          darkMode ? 'text-gray-400' : 'text-gray-600'
        }`}>
          {project.description}
        </p>
        
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.slice(0, 4).map((tech, i) => (
            <span 
              key={i}
              className={`px-3 py-1 rounded-lg text-xs font-medium ${
                darkMode 
                  ? 'bg-gray-700 text-gray-300 border border-gray-600' 
                  : 'bg-gray-100 text-gray-600 border border-gray-200'
              }`}
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span 
              className={`px-3 py-1 rounded-lg text-xs font-medium cursor-help ${
                darkMode 
                  ? 'bg-gray-700 text-gray-400 border border-gray-600' 
                  : 'bg-gray-100 text-gray-500 border border-gray-200'
              }`}
              title={project.tech.slice(4).join(', ')}
            >
              +{project.tech.length - 4}
            </span>
          )}
        </div>
        
        {/* Action Buttons */}
        <div className="flex gap-3">
          <a 
            href={project.code}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-1 px-4 py-2 rounded-lg font-medium text-center text-sm border-2 transition-all duration-300 hover:scale-105 ${
              darkMode 
                ? 'border-gray-600 text-gray-300 hover:border-blue-500 hover:text-blue-400' 
                : 'border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600'
            }`}
          >
            💻 View Code
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Navbar />
      
      {/* Hero Section */}
      <section className={`pt-24 pb-16 ${
        darkMode 
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900' 
          : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'
      }`}>
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-6 ${
              darkMode 
                ? 'bg-blue-900/50 text-blue-300 border border-blue-700' 
                : 'bg-blue-100 text-blue-700 border border-blue-200'
            }`}>
              💼 My Work
            </span>
            
            <h1 className={`text-5xl md:text-6xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Projects
              </span>
            </h1>
            
            <p className={`text-xl leading-relaxed max-w-3xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Collection of projects that i've worked on.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className={`py-20 ${
        darkMode ? 'bg-gray-900' : 'bg-gray-50'
      }`}>
        <div className="container mx-auto px-6">
          {/* Current Projects */}
          {currentProjects.length > 0 && (
            <div className="mb-20">
              <h2 className={`text-3xl font-bold mb-12 text-center ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Current Projects
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {currentProjects.map((project, index) => (
                  <ProjectCard key={`current-${index}`} project={project} index={index} />
                ))}
              </div>
            </div>
          )}

          {/* Completed Projects */}
          {completedProjects.length > 0 && (
            <div>
              <h2 className={`text-3xl font-bold mb-12 text-center ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                 Completed Projects
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {completedProjects.map((project, index) => (
                  <ProjectCard key={`completed-${index}`} project={project} index={index} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
      
      <Footer />
    </div>
  );
}