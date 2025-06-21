import { useRef } from 'react';
import { FaArrowDown } from "react-icons/fa";

export default function ScrollButton() {
  const scrollToTarget = () => {
    const target = document.getElementById('features');
    if (!target) return;

    // 1. Получаем позицию элемента с учетом текущего скролла
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 800; // Продолжительность анимации в ms
    let startTime = null;

    // 2. Кастомная функция easing для плавности
    const ease = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    };

    // 3. Анимация скролла
    const animation = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    requestAnimationFrame(animation);
  };

  return (
    <button
      onClick={scrollToTarget}
      className="text-white text-3xl p-14 hover:text-secondary transition-colors duration-300"
      aria-label="Плавная прокрутка к разделу Features"
    >
      <FaArrowDown />
    </button>
  );
}