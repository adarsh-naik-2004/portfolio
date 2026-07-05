import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <header className="max-w-4xl mx-auto px-6 sm:px-8 pt-8">
      <nav className="flex items-center justify-between">
        <Link
          to="/"
          onClick={closeMenu}
          className="font-serif italic text-xl sm:text-2xl text-ink hover:text-accent transition-colors"
        >
          Adarsh Naik
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7 font-mono text-base text-muted">
          <a href="/#about" className="hover:text-ink transition-colors">
            About
          </a>
          <a href="/#experience" className="hover:text-ink transition-colors">
            Experience
          </a>
          <Link to="/projects" className="hover:text-ink transition-colors">
            Projects
          </Link>
          <Link to="/blog" className="hover:text-ink transition-colors">
            Blog
          </Link>
          <a
            href="/Adarsh-Resume.pdf"
            download
            className="hover:text-ink transition-colors"
          >
            Resume
          </a>
        </div>

        {/* Mobile-only toggle (hidden on md+) */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="md:hidden w-9 h-9 rounded-full border border-line flex items-center justify-center text-muted hover:text-ink hover:border-accent transition-colors font-mono text-xs tracking-widest"
        >
          •••
        </button>
      </nav>

      {/* Mobile slide-down menu */}
      {open && (
        <div className="md:hidden mt-6 flex flex-col gap-4 pb-4 font-mono text-sm text-muted border-t border-line pt-6">
          <a
            href="/#about"
            onClick={closeMenu}
            className="hover:text-ink transition-colors"
          >
            About
          </a>
          <a
            href="/#experience"
            onClick={closeMenu}
            className="hover:text-ink transition-colors"
          >
            Experience
          </a>
          <Link
            to="/projects"
            onClick={closeMenu}
            className="hover:text-ink transition-colors"
          >
            Projects
          </Link>
          <Link
            to="/blog"
            onClick={closeMenu}
            className="hover:text-ink transition-colors"
          >
            Blog
          </Link>
          <a
            href="/Adarsh-Resume.pdf"
            download
            onClick={closeMenu}
            className="hover:text-ink transition-colors"
          >
            Resume
          </a>
        </div>
      )}

      <div className="border-t border-line mt-8" />
    </header>
  );
}
