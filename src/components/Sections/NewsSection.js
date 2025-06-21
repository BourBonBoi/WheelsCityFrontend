import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const PLACEHOLDER_IMAGE = 'https://placehold.co/600x400?text=Изображение+не+загружено';



export default function NewsSection({ showAll = false }) {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        axios.get('http://localhost:8000/api/news/')
            .then(response => {
                setNews(response.data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);


    if (loading) return <p className="text-center py-10 text-lg">Загрузка новостей...</p>;

    const displayedNews = showAll ? [...news].reverse() : [...news].reverse().slice(0, 3);
    return (
        <section className="container mx-auto px-4 py-12 max-w-7xl">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-0">
                    Последние новости
                </h2>
                {!showAll && (
                    <button
                        onClick={() => navigate('/allNews')}
                        className="text-primary hover:text-primary-dark font-semibold text-lg transition-colors"
                    >
                        Все новости →
                    </button>
                )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {displayedNews.map((item, index) => (
                    <article key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                        <div className="h-48 overflow-hidden">
                            <img
                                src={item.image || PLACEHOLDER_IMAGE}
                                alt={item.title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="p-6">
                            <span className="inline-block text-sm font-medium text-primary mb-2">
                                {item.category || 'Новость'}
                            </span>
                            <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-primary transition-colors">
                                {item.title || 'Заголовок новости'}
                            </h3>
                            <p className="text-gray-600 mb-4 line-clamp-3">
                                {item.description || 'Описание новости. Здесь будет краткое содержание новостного материала.'}
                            </p>
                            <button
                                onClick={() => navigate(`/news/${item.id}`)}
                                className="text-primary font-semibold hover:underline"
                            >
                                Читать полностью
                            </button>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}