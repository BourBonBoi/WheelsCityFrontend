import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function DocumentationPage() {
  const [sections, setSections] = useState([]);
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8000/api/documentation/')
      .then(res => {
        setSections(res.data);
        if (res.data.length > 0) setActiveId(res.data[0].id);
      })
      .catch(err => {
        console.error('Ошибка загрузки документации', err);
      });
  }, []);

  const activeSection = sections.find(s => s.id === activeId);

  return (
    <div className="flex h-screen font-bounded bg-white text-primary">
      <nav className="w-64 border-r border-gray-300 p-4 overflow-y-auto bg-accent-light">
        {sections.map(section => (
          <div
            key={section.id}
            onClick={() => setActiveId(section.id)}
            className={`cursor-pointer p-2 mb-1 rounded ${
              section.id === activeId ? 'bg-primary text-white' : 'hover:bg-primary-light'
            }`}
          >
            {section.title}
          </div>
        ))}
      </nav>

      <main className="flex-1 p-8 overflow-y-auto text-secondary">
        {activeSection ? (
          <>
            <h1 className="text-4xl font-semibold mb-6">{activeSection.title}</h1>
            <article
              className="prose prose-primary max-w-none"
              dangerouslySetInnerHTML={{ __html: activeSection.content }}
            />
          </>
        ) : (
          <p className="text-lg text-gray-600">Выберите раздел слева</p>
        )}
      </main>
    </div>
  );
}
