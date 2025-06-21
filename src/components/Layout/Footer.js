import React from 'react';

const Footer = () => {
  return (
    <footer className="mx-auto">
      <div className="bg-gray-100">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6  text-gray-800 flex flex-wrap justify-center flex justify-between">
          <div className="p-5">
            <div className="text-xs uppercase text-gray-500 font-medium">WheelsCity</div>
            <a className="my-3 block" href="/about">О нас <span className="text-teal-600 text-xs p-1"></span>
            </a>
            <a className="my-3 block" href="/feedback">Поддержка
            </a>
          </div>
          <div className="p-5">
            <div className="text-xs uppercase text-gray-500 font-medium">Клиентам</div>

            <a className="my-3 block" href="/documentation">Документация <span className="text-teal-600 text-xs p-1"></span>
            </a>
            <a className="my-3 block" href="/tutorial">Обучение <span className="text-teal-600 text-xs p-1"></span>
            </a>
          </div>
          <div className="p-5">
            <div className="text-xs uppercase text-gray-500 font-medium">Контакты</div>

            <a className="my-3 block" href="/#">Якутск
              <span className="text-teal-600 text-xs p-1"></span>
            </a>

            <a className="my-3 block" href="/#">mail@mail.ru
              <span className="text-teal-600 text-xs p-1"></span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;