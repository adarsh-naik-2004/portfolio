import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const posts = [
  {
    id: 1,
    title: "Why Prison Break Seasons 1 & 2 Are Still the Best Thing on TV",
    date: "Dec 2025",
    readTime: "6 min read",
    category: "TV & Storytelling",
    image: "/prison-break-michael-and-sucre.webp",
  },
  {
    id: 2,
    title: "The End of an Era: Virat Kohli and the Spirit of Test Cricket",
    date: "May 23, 2025",
    readTime: "3 min read",
    category: "Cricket",
    image: "/virat.jpg",
  },
  {
    id: 3,
    title:
      "Demystifying Microservices: A Complete Guide to Modern Distributed Architecture",
    date: "Jan 19, 2025",
    readTime: "12 min read",
    category: "Software Architecture",
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=900&q=80&auto=format&fit=crop",
  },
];

export default function Blog() {
  return (
    <div className="bg-bg text-ink min-h-screen font-mono">
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 sm:px-8">
        <section className="pt-16 pb-12">
          <h1 className="font-serif text-5xl sm:text-6xl text-ink leading-tight">
            Blogs.
          </h1>
          <p className="mt-6 text-base sm:text-lg text-muted leading-relaxed max-w-xl">
            Notes on things I'm trying out.
          </p>
        </section>

        <section className="pb-20 border-t border-line">
          {posts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              className="group grid sm:grid-cols-[12rem_1fr] gap-6 items-start py-8 border-b border-line last:border-b-0"
            >
              {post.image && (
                <div className="rounded-md overflow-hidden border border-line bg-surface aspect-[4/3]">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              )}
              <div>
                <div className="flex items-baseline justify-between gap-4 flex-wrap">
                  <h2 className="font-serif text-2xl sm:text-3xl text-ink group-hover:text-accent transition-colors max-w-lg">
                    {post.title}
                  </h2>
                  <span className="text-sm text-muted shrink-0">
                    {post.readTime}
                  </span>
                </div>
                <div className="mt-3 flex items-center gap-4 text-sm text-muted">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span className="text-yellow uppercase tracking-widest">
                    {post.category}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}
