'use client';
import React, { useState, useEffect } from 'react';
import { ChevronRight, MapPin, Home, Users, Star, Search, Play, ArrowRight, Check } from 'lucide-react';
import Navbar from './dashboard/dashboard_components/navbar';
import { useRouter } from "next/navigation";

export default function LandingPage() {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleClick = () => {
    router.push("/properties"); // navigate programmatically
  };

  const features = [
    {
      icon: <Search className="w-6 h-6" />,
      title: "Smart Search",
      description: "Find your perfect property with AI-powered search filters"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location Intel",
      description: "Detailed neighborhood insights and amenity mapping"
    },
    {
      icon: <Home className="w-6 h-6" />,
      title: "Verified Listings",
      description: "All properties verified for authenticity and accuracy"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Support",
      description: "24/7 guidance from local real estate professionals"
    }
  ];

  const stats = [
    { number: "10K+", label: "Properties Listed" },
    { number: "5K+", label: "Happy Customers" },
    { number: "50+", label: "Cities Covered" },
    { number: "4.9", label: "Average Rating" }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-6 lg:px-120 py-10 min-h-screen">
        {/* Left Side */}
        <div className={`flex-1 max-w-2xl transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
          <div className="inline-flex items-center space-x-2 bg-gray-100/10 dark:bg-gray-800/20 backdrop-blur-sm rounded-full px-4 mb-8">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-600 dark:text-gray-300">🇱🇰 Sri Lanka&apos;s #1 Property Platform</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
            Find Your
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Dream Place
            </span>
            in Sri Lanka
          </h1>

          <p className="text-xl text-gray-800 dark:text-gray-300 mb-12 leading-relaxed">
            Discover the perfect property with our cutting-edge platform. We connect you with your ideal place.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button
              onClick={handleClick}
              className="group bg-gradient-to-r from-purple-500 to-cyan-500 dark:from-purple-600 dark:to-cyan-600 px-8 py-4 rounded-full text-white font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>Explore Properties</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold mb-1">{stat.number}</div>
                <div className="text-gray-500 dark:text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div className={`flex-1 flex justify-center lg:justify-end mt-16 lg:mt-0 transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
          <div className="relative">
            <div className="relative w-80 h-96 lg:w-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl shadow-purple-500/20 dark:shadow-purple-700/30 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="absolute inset-0 bg-gradient-to-t from-purple-600/30 to-transparent z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=500&q=80"
                alt="Beautiful Sri Lankan Property"
                className="w-full h-full object-cover"
              />
              {/* Floating Cards */}
              <div className="absolute -top-4 -left-4 bg-white/90 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-4 shadow-xl transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <span className="font-semibold dark:text-gray-100 text-gray-800">4.9 Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative z-10 px-6 lg:px-24 py-20">
        <div className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 dark:from-purple-600/30 dark:to-cyan-600/30 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-3xl p-12 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            Ready to Find Your
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"> Perfect Home?</span>
          </h2>
          <p className="text-xl text-gray-800 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who found their dream properties with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-gradient-to-r from-purple-500 to-cyan-500 dark:from-purple-600 dark:to-cyan-600 px-8 py-4 rounded-full text-white font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
              <span>Start Your Search</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <div className="flex items-center space-x-4 text-gray-700 dark:text-gray-300">
              <Check className="w-5 h-5 text-green-400" />
              <span>Free to use</span>
              <Check className="w-5 h-5 text-green-400" />
              <span>No hidden fees</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
