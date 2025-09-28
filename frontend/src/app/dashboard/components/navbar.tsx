import { ChevronRight, MapPin, Home, Users, Star, Search, Play, ArrowRight, Check } from 'lucide-react';
import React, { useState } from 'react';


export default function Navbar() {
  return (
    <>
      <nav className="relative z-50 flex items-center justify-between px-6 lg:px-24 py-6 bg-blue-100">
        <div className="flex items-center space-x-2">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <Home className="w-6 h-6 text-gray-900" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent sm:text-3xl md:text-4xl">
                  Bodimkamare.lk
              </span>
          </div><div className="hidden md:flex items-center space-x-8">
                  <a href="#" className="text-gray-500 hover:text-gray-800 transition-colors">Properties</a>
                  <a href="#" className="text-gray-500 hover:text-gray-800 transition-colors">About</a>
                  <a href="#" className="text-gray-500 hover:text-gray-800 transition-colors">Contact</a>
                  <button className="bg-gradient-to-r from-purple-500 to-cyan-500 px-6 py-2 rounded-full text-white font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105">
                      Sign In
                  </button>
              </div>
      </nav></>
  );
}
