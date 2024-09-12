import logo from "../assets/images/logo.svg";
function Nav() {
  return (
    <nav className="mb-8 sm:flex mt-10">
      <img src={logo} alt="logo" />
      <ul className="sm:flex ml-auto gap-10 hidden text-neutral-DarkGrayishBlue font-Inter font-semibold ">
        <li>
          <a href="#" className="">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="">
            New
          </a>
        </li>
        <li>
          <a href="#" className="">
            Popular
          </a>
        </li>
        <li>
          <a href="#" className="">
            Trending
          </a>
        </li>
        <li>
          <a href="#" className="">
            Categories
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
