import React from "react";
import { useNav } from "./NavContext"; // Adjust path as necessary
import logo from "../assets/images/logo.svg";
import iconMenu from "../assets/images/icon-menu.svg";
import iconClose from "../assets/images/icon-menu-close.svg";

const Nav: React.FC = () => {
  const { isOpen, toggleNav } = useNav(); // Access context values

  return (
    <nav className="mb-8 sm:flex mt-10">
      <div className="flex items-center">
        <img src={logo} alt="logo" />
        <img
          className="sm:hidden mx-64 sm:max-w-screen-xl cursor-pointer"
          src={isOpen ? iconClose : iconMenu}
          onClick={toggleNav}
          alt="Menu Icon"
        />
      </div>
      <ul className="sm:flex ml-auto gap-10 hidden text-neutral-DarkGrayishBlue font-Inter font-semibold">
        <li>
          <a href="#" className="hover:text-primary-SoftOrange">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-primary-SoftOrange">
            New
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-primary-SoftOrange">
            Popular
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-primary-SoftOrange">
            Trending
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-primary-SoftOrange">
            Categories
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
