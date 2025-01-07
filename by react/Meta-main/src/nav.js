import React, { useState } from 'react';

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <nav className="transition-all bg-white md:bg-inherit dark:bg-gray-900 fixed w-full z-20 top-0 start-0 dark:border-gray-600">
      <div className="transition-all flex flex-wrap items-center justify-between mx-auto p-4 w-auto">
        <a
          href="https://flowbite.com/"
          className="flex items-center space-x-1 rtl:space-x-reverse"
        >
          <span className="self-center text-[2.5rem] font-bold md:text-white whitespace-nowrap dark:text-white md:ms-32">
            물상명리학회
          </span>
        </a>
        <div className="transition-all flex md:order-2 space-x-2 md:space-x-0 rtl:space-x-reverse z-30">
          <button
            onClick={handleToggle}
            type="button"
            className="transition-all inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg  md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={!isCollapsed}
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`transition-all fixed top-0 left-full h-full bg-white w-1/2 dark:bg-gray-900 z-10 font-bold transform ${isCollapsed ? '-translate-x-full' : 'translate-x-full'} md:relative md:translate-x-0 md:flex md:items-center md:justify-between md:me-44 md:w-auto md:order-2 md:bg-inherit md:text-white md:left-0`}
          id="navbar-sticky"
        >
          <ul className="md:text-white transition-all mt-20 p-4 space-y-4 md:space-y-0 md:space-x-8 md:flex md:flex-row md:mt-0 md:p-0 md:bg-none dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 md:text-[1.875rem]">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 md:text-white"
              >
                비전
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text:white dark:hover:bg-gray-700 dark:hover:text:white md:dark:hover:bg-transparent dark:border-gray-700 md:text-white"
              >
                사업정보
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text:white dark:hover:bg-gray-700 dark:hover:text:white md:dark:hover:bg-transparent dark:border-gray-700 md:text-white"
              >
                공인APP
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text:white dark:hover:bg-gray-700 dark:hover:text:white md:dark:hover:bg-transparent dark:border-gray-700 md:text-white"
              >
                자격증센터
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text:white dark:hover:bg-gray-700 dark:hover:text:white md:dark:hover:bg-transparent dark:border-gray-700 md:text-white"
              >
                Membership
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
