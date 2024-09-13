import React from "react";
import { useNav } from "./NavContext"; // Adjust path as necessary
import iconClose from "../assets/images/icon-menu-close.svg"; // Ensure the path is correct

const SlidingNav: React.FC = () => {
  const { isOpen, toggleNav } = useNav(); // Access context values

  return (
    <section>
      <nav
        className={`fixed top-0 right-0 h-full w-3/4 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4 z-50"
          onClick={toggleNav}
          aria-label="Close menu"
        >
          <img src={iconClose} alt="Close Icon" className="w-8 h-8" />
        </button>
        <ul className="flex flex-col items-start mt-56 h-full space-y-6 p-6">
          <li>
            <a
              href="#home"
              className="text-xl font-bold hover:text-primary-SoftOrange"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#new"
              className="text-xl font-bold hover:text-primary-SoftOrange"
            >
              New
            </a>
          </li>
          <li>
            <a
              href="#popular"
              className="text-xl font-bold hover:text-primary-SoftOrange"
            >
              Popular
            </a>
          </li>
          <li>
            <a
              href="#trending"
              className="text-xl font-bold hover:text-primary-SoftOrange"
            >
              Trending
            </a>
          </li>
          <li>
            <a
              href="#categories"
              className="text-xl font-bold hover:text-primary-SoftOrange"
            >
              Categories
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default SlidingNav;
