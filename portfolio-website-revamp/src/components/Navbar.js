import React, {useState} from "react";
import {SiCodeberg} from "react-icons/si";

const Navbar = () => {
    /* used for changing burger classes */
    const [burgerClass, setBurgerClass] = useState("burger-bar unclicked");
    const [menuClass, setMenuClass] = useState("menu hidden");
    const [isMenuClicked, setIsMenuClicked] = useState(false);

    /* used for toggling burger menu changes */
    const updateMenu = () => {
        if (!isMenuClicked) {
            setBurgerClass("burger-bar clicked");
            setMenuClass("menu visible");
        } else {
            setBurgerClass("burger-bar unclicked");
            setMenuClass("menu hidden");
        }

        setIsMenuClicked(!isMenuClicked);
    }
    return (
        <section id="navbar" className="min-h-screen text-white font-semibold 2xl:text-xl sticky top-0 z-50">
            <nav className="contents justify-between">
                <div className="mobile-nav w-full h-screen">
                    <nav className="w-full h-20 bg-black flex justify-between items-center p-4">
                        <div className="flex items-center name-div">
                            <h1>Mitchell Gruner</h1>
                            <SiCodeberg className="icon" />
                        </div>
                        <div className="burger-menu" onClick={updateMenu}>
                            <div className={burgerClass}></div>
                            <div className={burgerClass}></div>
                            <div className={burgerClass}></div>
                        </div>
                    </nav>

                    <div className={menuClass}>
                        <a href="#" className="block">Projects</a>
                        <a href="#" className="block">Resume</a>
                        <a href="#" className="block">Contact</a>
                    </div>
                </div>
                <div className="desktop-nav">
                    <nav className="h-20 flex justify-between p-4 md:p-6 lg:p-8 xl:p-10 xl:px-16 2xl:p-14 2xl:px-20">
                        <div className="flex items-center name-div text-lg md:text-2xl 2xl:text-3xl">
                            <h1 className="mr-2 md:mr-4">Mitchell Gruner</h1>
                            <SiCodeberg className="icon" />
                        </div>
                        <ul className="flex items-center">
                            <li></li>
                            <li className="px-4 text-lg md:text-xl 2xl:text-2xl">
                                <a href="#">Projects</a>
                            </li>
                            <li className="px-4 text-lg md:text-xl 2xl:text-2xl">
                                <a href="#">Resume</a>
                            </li>
                            <li className="px-4 text-lg md:text-xl 2xl:text-2xl">
                                <a href="#">Contact</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </nav>
        </section>
    );
}

export default Navbar;