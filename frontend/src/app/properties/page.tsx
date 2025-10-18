'use client';
import React, { useState, useEffect } from 'react';
import Navbar from '../dashboard/dashboard_components/navbar';
import Card from '../../components/Propertycard'
import cardsData from "../../components/propertylist";
import { WordRotate } from "@/components/ui/word-rotate"


export default function Properties() {
    const [isVisible, setIsVisible] = useState(false);  
    useEffect(() => {
        setIsVisible(true);
    }, []);
    return (
        <div className="min-h-screen bg-white-500 text-white overflow-hidden bg-white dark:bg-gray-900 transition-colors duration-300">
            <Navbar/>
            <div className="flex justify-center mt-8">
                        <h1 className='text-gray-800 p-4 rounded-lg inline-block text-xl sm:text-5xl dark:text-white bg-gray-200 w-full text-center dark:bg-gray-800'>
                        <WordRotate words={["Explore Our Properties","Find your best Partner"]} />
                        </h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 dark:bg-gray-900 p-8">
                    {cardsData.map((card) => (
                    <Card
                    key={card.id}
                    title={card.title}
                    for={card.for}
                    description={card.description}
                    image={card.image}
                    kitchen={card.kitchen}
                    />
                ))}
                        </div>
                </div>
    );
}