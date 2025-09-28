'use client';
import React, { useState, useEffect } from 'react';
import { ChevronRight, MapPin, Home, Users, Star, Search, Play, ArrowRight, Check } from 'lucide-react';
import Navbar from '../dashboard/dashboard_components/navbar';
import Link from "next/link";

export default function Properties() {
    const [isVisible, setIsVisible] = useState(false);  
    useEffect(() => {
        setIsVisible(true);
    }, []);
    return (
        <div className="min-h-screen bg-white-500 text-white overflow-hidden bg-white">
            <Navbar/>
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-6 lg:px-150 py-20 min-h-screen lg:mt-[-120px] sm:mt-[-100px]">
                        <h1 className='text-gray-800'>properties page</h1>
                </div>
                </div>
    );
}