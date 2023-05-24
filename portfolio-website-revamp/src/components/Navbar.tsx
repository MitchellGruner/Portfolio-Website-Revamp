"use client";
import React, {useState} from "react";
import {Link} from "react-scroll";
import {SiCodeberg} from "react-icons/si";

function NavLinks({
    link,
    title,
}: {
    link: string;
    title: string;
}) {
    return (
        <li className="px-4 text-lg md:text-xl 2xl:text-2xl">
            <Link to={link} spy={true} smooth={true} offset={-100} duration={500}>{title}</Link>
        </li>
    );
}

const Navbar = () => {
    /* used for adding background-color for navbar on scroll */
    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= 90) {
            setColor(true);
        } else {
            setColor(false);
        }
    }

    if (typeof window !== "undefined") {
        window.addEventListener("scroll", changeColor);
    }

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
        <div id="navbar" className={color ? "navbar-container text-white font-semibold 2xl:text-xl sticky top-0 z-50" : "text-white font-semibold 2xl:text-xl sticky top-0 z-50"}>
            <nav className="contents justify-between">
                <div className="mobile-nav w-full h-auto">
                    <nav className="w-full h-20 bg-black flex justify-between items-center p-4 xs:pl-6">
                        <div className="flex items-center">
                            <h1 className="text-xl xs:text-2xl"><Link to="about" spy={true} smooth={true} offset={-100} duration={500} className="block text-xl md:text-2xl 2xl:text-3xl">Mitchell Gruner</Link></h1>
                            <SiCodeberg className="icon ml-2 text-xl xs:text-2xl" />
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
                <div className="2xl:max-w-screen-2xl m-auto desktop-nav">
                    <nav className="h-20 flex justify-between p-6 md:px-8 lg:px-10 xl:px-16 2xl:px-14">
                        <div className="flex items-center">
                            <h1 className="mr-2 md:mr-4"><Link to="about" spy={true} smooth={true} offset={-100} duration={500} className="block text-xl md:text-2xl 2xl:text-3xl" onClick={updateMenu}>Mitchell Gruner</Link></h1>
                            <SiCodeberg className="icon text-xl md:text-2xl 2xl:text-3xl" />
                        </div>
                        <ul className="flex items-center">
                            <NavLinks link="about" title="About" />
                            <NavLinks link="projects" title="Projects" />
                            <NavLinks link="contact" title="Contact" />
                        </ul>
                    </nav>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;