export default function Footer() {
  return (
    <footer className="max-w-4xl mx-auto px-6 sm:px-8 pb-10">
      <div className="border-t border-line pt-6 text-center font-mono text-sm text-muted">
        © {new Date().getFullYear()} Adarsh Naik
      </div>
    </footer>
  );
}