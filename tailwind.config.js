/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
colors: {
  // Основа
  primary: '#7C9AA0',           // 2) Основной цвет (#7C9AA0)
  'primary-light': '#9DB7BC',   // Светлый вариант основного
  'primary-dark': '#5A7D84',    // Темный вариант основного

  secondary: '#667580',         // 3) Для header и footer (#667580)
  'secondary-light': '#8595A3', // Светлый вариант
  'secondary-dark': '#4D5E6B',  // Темный вариант

  // Акценты
  accent: '#D0D4D0',            // 1) Кнопки и навигация (#D0D4D0)
  'accent-light': '#E8EAE8',    // Светлый акцент
  'accent-dark': '#B8BEB8',     // Темный акцент

  // Фоновые и базовые
  dark: '#121212',
  'dark-soft': '#1E1E1E',
  light: '#E5E5E5',
  white: '#FFFFFF',
  black: '#000000',

  // Статусы
  success: '#16a34a',
  warning: '#eab308',
  danger: '#dc2626',
  info: '#3b82f6',

  // Серые
  gray: {
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
  },

  transparent: 'transparent',
  current: 'currentColor',
},
    fontFamily: {
      'bounded': ['"Bounded"', 'sans-serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
        '192': '48rem',
        '256': '64rem',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
        '5xl': '3rem',
      },
      boxShadow: {
        'soft': '0 4px 14px 0 rgba(0, 0, 0, 0.1)',
        'hard': '0 4px 24px 0 rgba(0, 0, 0, 0.25)',
        'inner-xl': 'inset 0 4px 8px 0 rgba(0, 0, 0, 0.15)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
      },
      transitionDuration: {
        '2000': '2000ms',
        '3000': '3000ms',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
