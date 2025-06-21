import React from 'react';

export default function AboutHeroSection() {
    return(
        <section id="about" className="relative py-16 md:py-24 lg:py-32 bg-light">
            <div className="container mx-auto px-6 text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">Мы Wheels City</h1>
                <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">Работа над приложением ведется и днем и ночью</p>
            </div>
        </section>
    );
}