import { useTheme } from '../ThemeContext';

export default function Footer() {
  const { darkMode } = useTheme();

  return (
    <footer className={`${darkMode ? 'bg-gray-900' : 'bg-gray-100'} py-6`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-4">
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            © {new Date().getFullYear()} Adarsh Naik. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}