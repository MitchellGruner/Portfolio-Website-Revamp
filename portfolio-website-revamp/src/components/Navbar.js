import React, {useState} from "react";
import {Link} from "react-scroll";
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
                    <nav className="w-full h-20 bg-black flex justify-between items-center p-4 xs:pl-6">
                        <div className="flex items-center text-xl xs:text-2xl">
                            <h1>Mitchell Gruner</h1>
                            <SiCodeberg className="icon ml-2" />
                        </div>
                        <div className="burger-menu" onClick={updateMenu}>
                            <div className={burgerClass}></div>
                            <div className={burgerClass}></div>
                            <div className={burgerClass}></div>
                        </div>
                    </nav>

                    <div className={menuClass}>
                        <Link to="about" spy={true} smooth={true} offset={-100} duration={500} className="block text-xl xs:text-2xl" onClick={updateMenu}>About</Link>
                        <Link to="projects" spy={true} smooth={true} offset={-100} duration={500} className="block text-xl xs:text-2xl" onClick={updateMenu}>Projects</Link>
                        <Link to="contact" spy={true} smooth={true} offset={-100} duration={500} className="block text-xl xs:text-2xl" onClick={updateMenu}>Contact</Link>
                    </div>
                </div>
                <div className="desktop-nav">
                    <nav className="h-20 flex justify-between p-6 md:p-8 lg:p-10 xl:p-14 xl:px-16 2xl:p-14 2xl:px-20">
                        <div className="flex items-center text-xl md:text-2xl 2xl:text-3xl">
                            <h1 className="mr-2 md:mr-4">Mitchell Gruner</h1>
                            <SiCodeberg className="icon" />
                        </div>
                        <ul className="flex items-center">
                            <li></li>
                            <li className="px-4 text-lg md:text-xl 2xl:text-2xl">
                                <Link to="about" spy={true} smooth={true} offset={-100} duration={500}>About</Link>
                            </li>
                            <li className="px-4 text-lg md:text-xl 2xl:text-2xl">
                                <Link to="projects" spy={true} smooth={true} offset={-100} duration={500}>Projects</Link>
                            </li>
                            <li className="px-4 text-lg md:text-xl 2xl:text-2xl">
                                <Link to="contact" spy={true} smooth={true} offset={-100} duration={500}>Contact</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </nav>
        </section>
    );
}

export default Navbar;