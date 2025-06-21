import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const NewsItemPage = () => {
  const { id } = useParams();
  const [newsItem, setNewsItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:8000/api/news/${id}/`)
      .then(response => {
        setNewsItem(response.data);
        setLoading(false);
      })
      .catch(() => {
        navigate('/404');
      });
  }, [id, navigate]);

  if (loading) return <div className="text-center py-20">Загрузка...</div>;
  if (!newsItem) return null;

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-primary hover:underline"
      >
        ← Назад к новостям
      </button>

      <article className="bg-white rounded-xl shadow-md overflow-hidden">
        <img
          src={newsItem.image || 'https://placehold.co/600x400?text=Изображение+не+загружено'}
          alt={newsItem.title}
          className="w-full h-96 object-cover"
        />
        <div className="p-8">
          <span className="inline-block text-sm font-medium text-primary mb-2">
            {newsItem.category}
          </span>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {newsItem.title}
          </h1>
          <p className="text-gray-500 mb-4">
            Опубликовано: {new Date(newsItem.date).toLocaleDateString()}
          </p>
          <div className="prose max-w-none text-gray-700">
            <p>{newsItem.description}</p>
            {newsItem.full_text && (
              <p className="mt-4">
                {newsItem.full_text}
              </p>
            )}
          </div>

        </div>
      </article>
    </div>
  );
};

export default NewsItemPage;
