import React from 'react';

export default function OurStorySection({ storyImage }) {
    return (
        <section className="relative py-16 md:py-24 lg:py-32">
            <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/2">
                    <h2 className="text-3xl font-bold text-dark mb-6">Это мы</h2>
                    <p className="text-gray-700 mb-4">Wheels City был открыт в 2025 ради того чтобы помочь водителям...</p>
                    <p className="text-gray-700 mb-4">С каждым днем мы растем...</p>
                    <p className="text-gray-700">Наша цель сделать...</p>
                </div>
                <div className="md:w-1/2">
                    <img 
                        src={storyImage} 
                        alt="Наша история" 
                        className="rounded-lg shadow-xl w-full h-auto"
                    />
                </div>
            </div>
        </section>
    );
}