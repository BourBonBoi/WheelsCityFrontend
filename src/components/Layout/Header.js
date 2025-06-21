import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import navData from "../../data/navData";
import DesktopMenu from "../HeaderMenu/DesktopMenu";
import MobileMenu from "../HeaderMenu/MobileMenu";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const mobileMenuRef = useRef();

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    function handleClickOutside(event) {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        closeMenu();
      }
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`bg-secondary ${isScrolled ? 'shadow-hard py-2' : 'shadow-soft py-3'} sticky top-0 z-50 transition-all duration-300`}>
      <div className="container mx-auto flex items-center justify-between px-4 lg:px-6">
        {/* Логотип */}
        <Link
          to="/"
          className="text-2xl font-bold text-white hover:text-accent transition-colors duration-300"
        >
          <span className="text-accent">Wheels</span>
          <span className="text-white">City</span>
        </Link>

        {/* Кнопка для мобильного меню */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="p-2 rounded-md text-white hover:text-accent-light hover:bg-button-nav-light focus:outline-none transition-colors duration-200"
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>


        {/* Десктопное меню */}
        <DesktopMenu
          navData={navData}
          linkClasses="text-white hover:text-accent transition-colors duration-300 px-3 py-2 rounded-md font-medium"
          subMenuClasses="bg-secondary-dark shadow-hard rounded-lg overflow-hidden py-1"
          subLinkClasses="block px-4 py-3 text-white hover:bg-accent hover:text-secondary-dark transition-colors duration-200 text-sm font-medium"
          buttonClasses="
            bg-accent text-black
            hover:bg-accent/90
            px-5 py-2.5 rounded-full
            shadow-sm hover:shadow-md
            transition-all duration-300 ease-in-out
            font-semibold ml-4
            transform hover:scale-105 active:scale-100"/>
      </div>

      {/* Мобильное меню */}
      <div ref={mobileMenuRef}>
        <MobileMenu
          navData={navData}
          isOpen={isMenuOpen}
          onClose={closeMenu}
          menuClasses="fixed top-0 right-0 h-full w-64 bg-secondary shadow-hard z-50"
          linkClasses="block py-2 text-white hover:text-accent transition-colors"
          subLinkClasses="block px-3 py-1 text-white hover:bg-accent hover:text-secondary-dark rounded transition-colors"
          buttonClasses="block py-2 bg-accent hover:bg-white text-white hover:text-secondary-dark rounded-2xl text-center transition-colors"
        />
      </div>
    </header>
  );
}