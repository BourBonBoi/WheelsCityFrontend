import React from 'react';
import featuresItems from '../../data/featuresData';

export default function FeaturesSection() {
  return (
    <section id="features" className="relative py-16 md:py-24 lg:py-32 bg-light">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold bg-clip-text bg-gradient-to-r from-primary to-secondary mb-4">
            Наши преимущества
          </h2>
          <p className="text-lg font-body text-gray-600 max-w-2xl mx-auto">
            Наше приложение поможет вам найти автосервис,
            Современное решение для поиска автосервисов с использованием передовых технологий и удобного интерфейса.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuresItems.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-soft hover:shadow-hard transition-all duration-300 hover:border-primary-light group"
            >
              <div className="p-6 h-full flex flex-col">
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary-light/20 flex items-center justify-center group-hover:bg-primary-light/40 transition-colors">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-heading font-semibold text-dark mb-2">{feature.title}</h3>
                <p className="font-body text-gray-500 flex-grow">{feature.description}</p>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}