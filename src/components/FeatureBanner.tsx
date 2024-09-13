import HomepageImageDesktop from "../assets/images/image-web-3-desktop.jpg";
import HomepageImage from "../assets/images/image-web-3-mobile.jpg";
import SlidingNav from "./SlidingNav";

function Header() {
  return (
    <section className=" space-y-5  ">
      <div className="">
        <img
          className="w-full md:hidden"
          src={HomepageImage}
          alt="HomeImageMobile"
        />
        
        <img
          className=" hidden md:block"
          src={HomepageImageDesktop}
          alt="HomeImageDesktop"
        />
      </div>
      <div className="sm:flex">
        <h1 className="mb-5 text-4xl w-72 sm:w-96 sm:text-6xl sm:mx-4 font-black font-Inter leading-tight sm:leading-none sm:mt-5  ">
          The Bright Future of Web 3.0?
        </h1>
        <div className="">
          <p className="text-base sm:text-xl text-neutral-DarkGrayishBlue font-Inter font-semibold sm:max-w-[39ch] sm:mt-5 ">
            {" "}
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
            <div>
              <button className="mt-5 mb-10 bg-primary-SoftRed p-3 w-51 pr-11 pl-11 sm:p-3 sm:px-10 text-black text-sm font-Inter tracking-widest sm:mt-11  hover:bg-neutral-VeryDarkBlue hover:text-neutral-OffWhite ">
                READ MORE
              </button>
            </div>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Header;
