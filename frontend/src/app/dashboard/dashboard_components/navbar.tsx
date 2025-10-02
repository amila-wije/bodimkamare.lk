'use client';

import React, { useState, useEffect } from "react";
import { Home, Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "../../../components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null; // Avoid SSR mismatch

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <>
      <nav className="relative z-50 flex items-center justify-between px-6 lg:px-24 py-6 bg-blue-100 dark:bg-gray-900 transition-colors">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
            <Home className="w-6 h-6 text-gray-900 dark:text-gray-200" />
          </div>
          <span className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Bodimkamare.lk
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-4 md:space-x-8">
          <a href="/" className="text-gray-500 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors">Home</a>
          <a href="/properties" className="text-gray-500 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors">Properties</a>
          <a href="/about" className="text-gray-500 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors">About</a>
          <a href="/contact" className="text-gray-500 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors">Contact</a>
          
          {/* Dark Mode Toggle Button */}
          <Button
            variant="outline"
            size="icon"
            onClick={toggleTheme}
            className="relative"
          >
            <Sun className={`h-5 w-5 transition-all ${theme === "dark" ? "scale-0 -rotate-90" : "scale-100 rotate-0"}`} />
            <Moon className={`absolute h-5 w-5 transition-all ${theme === "dark" ? "scale-100 rotate-0" : "scale-0 rotate-90"}`} />
            <span className="sr-only">Toggle theme</span>
          </Button>

          <button className="bg-gradient-to-r from-purple-500 to-cyan-500 px-6 py-2 rounded-full text-white font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105">
            Sign In
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-2">
          {/* Theme Button for Mobile */}
          <Button
            variant="outline"
            size="icon"
            onClick={toggleTheme}
            className="relative"
          >
            <Sun className={`h-5 w-5 transition-all ${theme === "dark" ? "scale-0 -rotate-90" : "scale-100 rotate-0"}`} />
            <Moon className={`absolute h-5 w-5 transition-all ${theme === "dark" ? "scale-100 rotate-0" : "scale-0 rotate-90"}`} />
            <span className="sr-only">Toggle theme</span>
          </Button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white focus:outline-none"
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-50 dark:bg-gray-800 px-6 py-4 space-y-4 shadow-lg transition-colors">
          <a href="/properties" className="block text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors">Properties</a>
          <a href="/about" className="block text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors">About</a>
          <a href="/contact" className="block text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors">Contact</a>
          <button className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 px-6 py-3 rounded-full text-white font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105">
            Sign In
          </button>
        </div>
      )}
    </>
  );
}
