import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useTheme } from '../ThemeContext';

const posts = [
  {
    id: 1,
    title: "The End of an Era: Virat Kohli and the Spirit of Test Cricket",
    date: "May 23, 2025",
    readTime: "3 min read",
    summary: "A heartfelt tribute to Virat Kohli’s incredible Test career, exploring his impact on cricket, leadership, and personal inspiration.",
    image: "/kohli.jpg",
    category: "Cricket",
    tags: ["Kohli", "Test Cricket", "Tribute", "India"],
    author: "Adarsh Naik",
  },
  {
    id: 2,
    title: "Demystifying Microservices: A Complete Guide to Modern Distributed Architecture",
    date: "Jan 19, 2025",
    readTime: "12 min read",
    summary: "In this post, I unpack my journey into microservices through my project CricStore—a scalable, real-time eCommerce platform built with MERN, Kafka, and Docker. From the advantages of isolated services to the challenges of DevOps and distributed logging, I reflect on what microservices taught me and why they were the right fit for this ambitious build.",
    image: '/mico.png',
    category: "Software Architecture",
    tags: ["Microservices", "Architecture", "Distributed Systems", "API Gateway", "Service Mesh", "Event-Driven Architecture"],
    author: "Adarsh Naik",
  },
];

export default function Blog() {
  const { darkMode } = useTheme();

  const handleReadMore = (postId) => {
    // Navigate to individual blog post
    window.location.href = `/blog/${postId}`;
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Navbar />
      
      {/* Hero Section */}
      <section className={`pt-24 pb-16 ${
        darkMode 
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900' 
          : 'bg-gradient-to-br from-purple-50 via-white to-blue-50'
      }`}>
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-6 ${
              darkMode 
                ? 'bg-purple-900/50 text-purple-300 border border-purple-700' 
                : 'bg-purple-100 text-purple-700 border border-purple-200'
            }`}>
              📝 My Blogs
            </span>
            
            <h1 className={`text-5xl md:text-6xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Latest{' '}
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Articles
              </span>
            </h1>
            
            <p className={`text-xl leading-relaxed max-w-3xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Thoughts, emotions and insights about the world of technology, cricket and life.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className={`py-20 ${
        darkMode ? 'bg-gray-900' : 'bg-gray-50'
      }`}>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article 
                key={post.id}
                className={`group rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                  darkMode 
                    ? 'bg-gray-800 border border-gray-700' 
                    : 'bg-white border border-gray-200'
                }`}
              >
                {/* Post Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      darkMode 
                        ? 'bg-purple-900/80 text-purple-300 border border-purple-700' 
                        : 'bg-purple-100/80 text-purple-700 border border-purple-200'
                    }`}>
                      {post.category}
                    </span>
                  </div>
                  
                  {/* Reading Time */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      darkMode 
                        ? 'bg-gray-900/80 text-gray-300 border border-gray-700' 
                        : 'bg-white/80 text-gray-700 border border-gray-200'
                    }`}>
                      {post.readTime}
                    </span>
                  </div>
                </div>
                
                {/* Post Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <time className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      {post.date}
                    </time>
                    <span className={`text-sm ${darkMode ? 'text-gray-600' : 'text-gray-400'}`}>•</span>
                    <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      {post.author}
                    </span>
                  </div>
                  
                  <h3 className={`text-xl font-bold mb-3 line-clamp-2 leading-tight ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {post.title}
                  </h3>
                  
                  <p className={`text-sm mb-4 line-clamp-3 leading-relaxed ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {post.summary}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.map((tag, i) => (
                      <span 
                        key={i}
                        className={`px-2 py-1 rounded-lg text-xs ${
                          darkMode 
                            ? 'bg-gray-700 text-gray-300' 
                            : 'bg-gray-100 text-gray-600'
                        }`}
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Read More Button */}
                  <button 
                    onClick={() => handleReadMore(post.id)}
                    className="w-full px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Read More →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}