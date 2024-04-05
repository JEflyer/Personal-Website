import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-deep-sea-blue shadow-md">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="text-black text-lg font-bold">
          <Link href="/">
            Jonathan Else
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            <svg className="w-6 h-6 text-black" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              )}
            </svg>
          </button>
        </div>
        <div className={`md:flex items-center ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="md:flex md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <Link href="/" className="text-black hover:text-sunset-gold transition duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-black hover:text-sunset-gold transition duration-300">
                About
              </Link>
            </li>
            <li>
              <Link href="/experience" className="text-black hover:text-sunset-gold transition duration-300">
                Experience
              </Link>
            </li>
            <li>
              <Link href="/projects" className="text-black hover:text-sunset-gold transition duration-300">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-black hover:text-sunset-gold transition duration-300">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
