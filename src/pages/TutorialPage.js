import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function TutorialPage() {
  const [sections, setSections] = useState([]);
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8000/api/tutorial/')
      .then(res => {
        setSections(res.data);
        if (res.data.length > 0) setActiveId(res.data[0].id);
      });
  }, []);

  const activeSection = sections.find(s => s.id === activeId);

  return (
    <div className="flex h-screen font-bounded text-gray-700 bg-white">
      <nav className="w-72 border-r border-gray-300 p-4 overflow-y-auto bg-accent-light">
        {sections.map(section => (
          <div 
            key={section.id}
            onClick={() => setActiveId(section.id)}
            className={`cursor-pointer mb-1 rounded-md px-3 py-2 transition-colors duration-200
              ${section.id === activeId ? 'bg-primary text-white font-semibold' : 'hover:bg-primary-light hover:text-primary-dark'}`}
          >
            {section.title}
          </div>
        ))}
      </nav>

      <main className="flex-1 p-8 overflow-y-auto bg-white">
        {activeSection ? (
          <>
            <h1 className="text-3xl font-bold mb-6 border-b-4 border-primary pb-1 text-primary">
              {activeSection.title}
            </h1>

            <article
              className="prose prose-primary max-w-none"
              dangerouslySetInnerHTML={{ __html: activeSection.content }}
            />
          </>
        ) : (
          <p className="text-lg text-gray-500">Выберите вкладку слева</p>
        )}
      </main>
    </div>
  );
}
