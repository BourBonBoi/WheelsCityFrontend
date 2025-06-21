import React from 'react';

export default function MissionSection() {
    return (
        <section class="bg-primary-50 rounded-xl p-12 mb-20">
            <div class="text-center max-w-4xl mx-auto">
                <h2 class="text-3xl font-bold text-dark mb-6">Наша миссия</h2>
                <p class="text-xl text-gray-700 mb-8">"Создать."</p>
                <div class="flex flex-wrap justify-center gap-8">
                    <div class="bg-white p-6 rounded-lg shadow-md w-full sm:w-64">
                        <div class="text-primary-600 mb-4">
                            <i class="fas fa-lightbulb text-3xl"></i>
                        </div>
                        <h3 class="font-bold text-dark mb-2">Автосервисы</h3>
                        <p class="text-gray-600">Сделать.</p>
                    </div>
                    <div class="bg-white p-6 rounded-lg shadow-md w-full sm:w-64">
                        <div class="text-primary-600 mb-4">
                            <i class="fas fa-shield-alt text-3xl"></i>
                        </div>
                        <h3 class="font-bold text-dark mb-2">Водители</h3>
                        <p class="text-gray-600">Чтоб красиво было.</p>
                    </div>
                    <div class="bg-white p-6 rounded-lg shadow-md w-full sm:w-64">
                        <div class="text-primary-600 mb-4">
                            <i class="fas fa-project-diagram text-3xl"></i>
                        </div>
                        <h3 class="font-bold text-dark mb-2">Пользователи</h3>
                        <p class="text-gray-600">Делем мир удобнее.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}