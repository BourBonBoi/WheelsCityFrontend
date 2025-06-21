import React from "react";
import { Link } from "react-router-dom";

export default function DesktopMenu({ 
  navData,
  linkClasses,
  subMenuClasses,
  subLinkClasses,
  buttonClasses
}) {
  return (
    <nav className="hidden md:flex space-x-6 items-center">
      {navData.map((item) => (
        <div key={item.title} className="relative group">
          <Link
            to={item.to}
            className={linkClasses}
          >
            {item.title}
          </Link>

          {item.subItems && (
            <div className="absolute left-1/2 transform -translate-x-1/2 top-full hidden group-hover:block pt-2 w-56">
              <ul className={subMenuClasses}>
                {item.subItems.map((sub) => (
                  <li key={sub.title}>
                    <Link
                      to={sub.to}
                      className={subLinkClasses}
                    >
                      {sub.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}

      <Link
        to="/download"
        className={buttonClasses}
      >
        Скачать
      </Link>
    </nav>
  );
}