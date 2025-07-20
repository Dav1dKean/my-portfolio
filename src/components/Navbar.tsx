'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link href="/" className="text-xl font-bold text-gray-800">
          MyPortfolio
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="/#about" className="text-gray-600 hover:text-gray-800">About</Link>
          <Link href="/projects" className="text-gray-600 hover:text-gray-800">Projects</Link>
          <Link href="/projects/foundation-career" className="text-gray-600 hover:text-gray-800">Career</Link>
          <Link href="/contact" className="text-gray-600 hover:text-gray-800">Contact</Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800">
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white px-4 pb-4"
        >
          <Link href="/#about" className="block py-2 text-gray-600 hover:text-gray-800">About</Link>
          <Link href="/projects" className="block py-2 text-gray-600 hover:text-gray-800">Projects</Link>
          <Link href="/projects/foundation-career" className="block py-2 text-gray-600 hover:text-gray-800">Career</Link>
          <Link href="/contact" className="block py-2 text-gray-600 hover:text-gray-800">Contact</Link>
        </motion.div>
      )}
    </nav>
  );
}
