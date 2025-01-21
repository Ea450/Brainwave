import { useLocation } from 'react-router-dom'
import { disablePageScroll, enablePageScroll } from 'scroll-lock'
import { brainwave } from '../assets'
import { navigation } from '../constants'
import MenuSvg from '../assets/svg/MenuSvg'
import { HamburgerMenu } from './design/Header'
import Button from './Button'
import { useState } from 'react'
const Header = () => {

    const pathName = useLocation();

    //use state to control hamburgerMenu
    const [openNavigation, setOpenNavigation] = useState(false)
    // create function to control toggle openNavigation
    const toggleNavigation = () => {
        if (openNavigation) {
            setOpenNavigation(false);
            enablePageScroll();
        } else {
            setOpenNavigation(true);
            disablePageScroll();
        }
    }
    // create function to automatic close menu after choose any feature
    // and disable scrolling for mobile devices
    const handleClick = () => {
        if (!openNavigation) return;
        enablePageScroll();
        setOpenNavigation(false)
    }
    return (
        <div className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8 ${openNavigation ? 'bg-n-8' : 'bg-n-8/90'}`}>
            <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
                <a className='block w-[12rem] xl:mr-8' href='#hero'>
                    <img src={brainwave} alt="brainwave" width={190} height={40} />
                </a>
                <nav className={`${openNavigation ? 'flex' : 'hidden'} fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}>
                    <div className='relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row'>
                        {navigation.map((item) => (
                            <a href={item.url} key={item.id} onClick={handleClick}
                                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${item.onlyMobile ? "lg:hidden" : ''} ${item.url === pathName.hash ? 'z-2 lg:text-n-1' : 'lg:text-n-1/50'} lg:leading-5 lg:hover:text-n-1 xl:px-12`}>
                                {item.title}
                            </a>
                        ))}
                    </div>
                    <HamburgerMenu />
                </nav>
                <a href="#signup" className='button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block'>
                    New account
                </a>
                <Button className='hidden lg:flex' href='#login'>
                    Sign in
                </Button>
                <Button className='ml-auto lg:hidden' px='px-3' onClick={toggleNavigation}>
                    <MenuSvg openNavigation={openNavigation} />
                </Button>
            </div>
        </div>
    )
}

export default Header