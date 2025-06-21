import React from 'react';

export default function StatisticsSection() {
    return (
        <section class="bg-primary text-white p-12 mb-20">
            <h2 class="text-3xl font-bold mb-12 text-center">Наша статистика</h2>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                    <div class="text-5xl font-bold text-primary-400 mb-2"></div>
                    <div class="text-gray-300"></div>
                </div>
                <div>
                    <div class="text-5xl font-bold text-primary-400 mb-2">10</div>
                    <div class="text-gray-300">Автосерисов</div>
                </div>
                <div>
                    <div class="text-5xl font-bold text-primary-400 mb-2">10</div>
                    <div class="text-gray-300">Пользователей</div>
                </div>
                <div>
                    <div class="text-5xl font-bold text-primary-400 mb-2"></div>
                    <div class="text-gray-300"></div>
                </div>
            </div>
        </section>
    );
}