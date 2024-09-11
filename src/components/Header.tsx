import logo from '../assets/images/logo.svg'
import HomepageImageDesktop from '../assets/images/image-web-3-desktop.jpg'
import iconMenu from '../assets/images/icon-menu.svg'
import HomepageImage from '../assets/images/image-web-3-mobile.jpg'

function Header(){
    return <section className='p-5 space-y-5 '>
        <div className='mb-8 '>
            <img src={logo} alt="logo" />
        </div>
        <div className='relative'>
        <img className='w-full md:hidden' src={HomepageImage} alt="HomeImageMobile" />
        <img className='hidden md:block' src={HomepageImageDesktop} alt="HomeImageDesktop" />
      </div>
        <div className=''>
        <h1 className='text-4xl w-72 md:text-5xl font-black font-Inter leading-tight md:leading-tight  '>
            The Bright Future of Web 3.0?
            </h1>
        </div>
            <p className='text-base text-neutral-DarkGrayishBlue font-Inter font-semibold '>  We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
            But is it really fulfilling its promise?</p>
            <button className='bg-primary-SoftRed p-3 w-51 pr-11 pl-11 text-black text-sm font-Inter tracking-widest  '>READ MORE</button>
    

    </section>
}

export default Header;