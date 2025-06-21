import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";

export default function MobileMenu({ 
  navData, 
  isOpen, 
  onClose,
  menuClasses,
  linkClasses,
  subLinkClasses,
  buttonClasses
}) {
  const [openSubMenus, setOpenSubMenus] = useState({});

  const toggleSubMenu = (title) => {
    setOpenSubMenus((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <nav
      className={`${menuClasses} transform transition-transform duration-300 ease-in-out font-bounded ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <ul className="px-4 py-6 space-y-4">
        {navData.map((item) => (
          <li key={item.title}>
            <div className="flex justify-between items-center">
              <Link
                to={item.to}
                onClick={onClose}
                className={linkClasses}
              >
                {item.title}
              </Link>
              {item.subItems && (
                <button
                  onClick={() => toggleSubMenu(item.title)}
                  className="text-accent-light hover:text-accent"
                  aria-label={`Toggle submenu for ${item.title}`}
                >
                  <CiMenuBurger />
                </button>
              )}
            </div>
            {item.subItems && (
              <ul
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openSubMenus[item.title] ? "max-h-40 mt-2" : "max-h-0"
                }`}
              >
                {item.subItems.map((sub) => (
                  <li key={sub.title}>
                    <Link
                      to={sub.to}
                      onClick={onClose}
                      className={subLinkClasses}
                    >
                      {sub.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
        <li>
          <a
            href="#"
            className={buttonClasses}
          >
            Скачать
          </a>
        </li>
      </ul>
    </nav>
  );
}