import React, { useState } from 'react';
import AboutHeroSection from '../components/Sections/AboutUs/AboutUsSection';

export default function Feedback() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus(null);

        try {
            const response = await fetch('http://localhost:8000/api/feedback/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, message }),
            });
            const data = await response.json();

            if (response.ok) {
                setStatus('Сообщение отправлено!');
                setEmail('');
                setMessage('');
            } else {
                setStatus(`Ошибка: ${data.error || 'Неизвестная ошибка'}`);
            }
        } catch (err) {
            setStatus('Ошибка сети');
        }
    };

    return (
        <>
            <AboutHeroSection />
            <div className="max-w-xl mx-auto mt-16 flex w-full flex-col border rounded-lg bg-white p-8">
                <h2 className="title-font mb-1 text-lg font-medium text-gray-900">Свяжитесь с нами</h2>
                <p className="mb-5 leading-relaxed text-gray-600">Ответ придет вам на почту</p>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="text-sm leading-7 text-gray-600">Почта</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="text-sm leading-7 text-gray-600">Сообщение</label>
                        <textarea
                            id="message"
                            name="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="h-32 w-full resize-none rounded border border-gray-300 bg-white py-1 px-3 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="rounded border border-gray-300 bg-indigo-500 py-2 px-6 text-lg text-black hover:bg-indigo-600 focus:outline-none"
                    >
                        Отправить
                    </button>
                </form>
                {status && <p className="mt-4 text-center text-gray-700">{status}</p>}
            </div>
        </>
    );
}
