"use client";
import React, {useRef, useState} from "react";
import { useRouter } from 'next/router';
import Image from "next/image";
import {Link} from "react-scroll";
import {SiCodeberg} from "react-icons/si";

if (typeof window !== 'undefined' && typeof document !== "undefined") {
    const hostname = window.location.href.indexOf("/projects") > -1;
    
    if (hostname) {
        document.getElementById("nav-projects").style.display = "block";
        document.getElementById("nav-root").style.display = "none";
    } else {
        document.getElementById("nav-projects").style.display = "none";
        document.getElementById("nav-root").style.display = "block";
    }
}

function NavLinksRoot({
    link,
    title,
    scroll,
}: {
    link: string;
    title: string;
    scroll: boolean;
}) {
    const router = useRouter();
    const clickedElementRef = useRef<HTMLAnchorElement | null>(null);

    /* this function will be called when a nav element is clicked on tablet and desktop (non-hamburger menu nav links). */
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if (scroll) {
            e.preventDefault();
            clickedElementRef.current = e.currentTarget;

            if (router.pathname !== '/') {
                router.push(`/?scrollTo=${link}`).then(() => {
                    if (link === 'projects' || link === 'contact') {
                        setTimeout(() => {
                            const element = document.getElementById(link);
                            if (element) {
                                clickedElementRef.current?.click();
                            }
                        }, 1000);
                    }
                });
            } else {
                const element = document.getElementById(link);
                if (element) {
                    const offset = -100;
                    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                    const offsetPosition = elementPosition + offset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        }
    };

    return (
        <li className="px-4 text-lg md:text-xl 2xl:text-2xl">
            {scroll ? (
                <a href={`#${link}`} onClick={handleClick} ref={clickedElementRef}>
                    {title}
                </a>
            ) : (
                <a href={link}>
                    {title}
                </a>
            )}
        </li>
    );
}

function NavLinksProjects({
    link,
    title,
}: {
    link?: string;
    title: string;
}) {
    return (
        <li className="px-4 text-lg md:text-xl 2xl:text-2xl">
            <a href={`https://mitchellgruner.com#${link}`}>{title}</a>
        </li>
    );
}

const Navbar = () => {
    const router = useRouter();
    const offset = -100;

    const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, link: string) => {
        e.preventDefault();
        if (router.pathname !== '/') {
            router.push(`/?scrollTo=${link}&offset=${offset}`);
        } else {
            const scrollFunction = () => {
                const element = document.getElementById(link);
                if (element) {
                    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                    const offsetPosition = elementPosition + offset;
    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            };
    
            setTimeout(() => {
                scrollFunction();
                if (link === 'contact') {
                    setTimeout(scrollFunction, 500);
                }
            }, 500);
        }
        updateMenuRoot();
    };

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
    const [burgerClassRoot, setBurgerClassRoot] = useState("burger-bar unclicked");
    const [menuClassRoot, setMenuClassRoot] = useState("menu hidden");
    const [isMenuClickedRoot, setisMenuClickedRoot] = useState(false);

    const [burgerClassProjects, setBurgerClassProjects] = useState("burger-bar unclicked");
    const [menuClassProjects, setMenuClassProjects] = useState("menu hidden");
    const [isMenuClickedProjects, setisMenuClickedProjects] = useState(false);

    /* used for toggling burger menu changes */
    const updateMenuRoot = () => {
        if (!isMenuClickedRoot) {
            setBurgerClassRoot("burger-bar clicked");
            setMenuClassRoot("menu visible");
        } else {
            setBurgerClassRoot("burger-bar unclicked");
            setMenuClassRoot("menu hidden");
        }

        setisMenuClickedRoot(!isMenuClickedRoot);
    }

    const updateMenuProjects = () => {
        if (!isMenuClickedProjects) {
            setBurgerClassProjects("burger-bar clicked");
            setMenuClassProjects("menu visible");
        } else {
            setBurgerClassProjects("burger-bar unclicked");
            setMenuClassProjects("menu hidden");
        }

        setisMenuClickedProjects(!isMenuClickedProjects);
    }

    return (
        <div id="navbar" className={color ? "flex w-full navbar-container text-white font-semibold 2xl:text-xl fixed top-0 z-50" : "flex w-full text-white font-semibold 2xl:text-xl fixed top-0 z-50"}>

            {/* navbar for when user is on root page*/}
            <nav id="nav-root" className="w-full contents justify-between">
                <div className="mobile-nav w-full h-auto">
                    <nav className="w-full h-20 bg-black flex justify-between items-center p-4 xs:pl-6">
                        <div className="flex items-center">
                            <h1 className="text-xl xs:text-2xl"><Link to="about" spy={true} smooth={true} offset={-100} duration={500} className="block text-xl md:text-2xl 2xl:text-3xl"><Image src="/static/images/mitchell-gruner-logo.png" alt="Mitchell Gruner Logo" width="80" height="0" className="pt-0" /></Link></h1>
                        </div>
                        <div className="burger-menu" onClick={updateMenuRoot}>
                            <div className={burgerClassRoot}></div>
                            <div className={burgerClassRoot}></div>
                            <div className={burgerClassRoot}></div>
                        </div>
                    </nav>

                    <div className={menuClassRoot}>
                    <a href="#about" onClick={(e) => handleScrollClick(e, 'about')} className="block text-xl xs:text-2xl">About</a>
                    <a href="#projects" onClick={(e) => handleScrollClick(e, 'projects')} className="block text-xl xs:text-2xl">Projects</a>
                    <a href="#contact" onClick={(e) => handleScrollClick(e, 'contact')} className="block text-xl xs:text-2xl">Contact</a>
                    <a href="/blog" className="block text-xl xs:text-2xl">Blog</a>
                    </div>
                </div>
                <div className="2xl:max-w-screen-2xl m-auto desktop-nav">
                    <nav className="h-20 flex justify-between p-6 md:px-8 lg:px-10 xl:px-16 2xl:px-14">
                        <div className="flex items-center">
                            <h1 className="mr-2 md:mr-4">
                                <Link to="about" spy={true} smooth={true} offset={-100} duration={500} className="block text-xl md:text-2xl 2xl:text-3xl" onClick={updateMenuRoot}>
                                    <Image src="/static/images/mitchell-gruner-logo.png" alt="Mitchell Gruner" width="80" height="0" className="pt-0" />
                                </Link>
                            </h1>
                        </div>
                        <ul className="flex items-center">
                            <NavLinksRoot link="about" title="About" scroll={true} />
                            <NavLinksRoot link="projects" title="Projects" scroll={true} />
                            <NavLinksRoot link="contact" title="Contact" scroll={true} />
                            <NavLinksRoot link="/blog" title="Blog" scroll={false} />
                        </ul>
                    </nav>
                </div>
            </nav>

            {/* navbar for when user is on /projects/* pages */}
            <nav id="nav-projects" className="w-full contents justify-between">
                <div className="mobile-nav w-full h-auto">
                    <nav className="w-full h-20 bg-black flex justify-between items-center p-4 xs:pl-6">
                        <div className="flex items-center">
                            <h1 className="text-xl xs:text-2xl"><a href="https://mitchellgruner.com" className="block text-xl md:text-2xl 2xl:text-3xl">Mitchell Gruner</a></h1>
                            <SiCodeberg className="icon ml-2 text-xl xs:text-2xl" />
                        </div>
                        <div className="burger-menu" onClick={updateMenuProjects}>
                            <div className={burgerClassProjects}></div>
                            <div className={burgerClassProjects}></div>
                            <div className={burgerClassProjects}></div>
                        </div>
                    </nav>

                    <div className={menuClassProjects}>
                        <a href="https://mitchellgruner.com#about" className="block text-xl xs:text-2xl" onClick={updateMenuProjects}>About</a>
                        <a href="https://mitchellgruner.com#projects-section" className="block text-xl xs:text-2xl" onClick={updateMenuProjects}>Projects</a>
                        <a href="https://mitchellgruner.com#contact-section" className="block text-xl xs:text-2xl" onClick={updateMenuProjects}>Contact</a>
                    </div>
                </div>
                <div className="2xl:max-w-screen-2xl m-auto desktop-nav">
                    <nav className="h-20 flex justify-between p-6 md:px-8 lg:px-10 xl:px-16 2xl:px-14">
                        <div className="flex items-center">
                            <h1 className="mr-2 md:mr-4"><a href="https://mitchellgruner.com" className="block text-xl md:text-2xl 2xl:text-3xl" onClick={updateMenuProjects}>Mitchell Gruner</a></h1>
                            <SiCodeberg className="icon text-xl md:text-2xl 2xl:text-3xl" />
                        </div>
                        <ul className="flex items-center">
                            <NavLinksProjects link="" title="About" />
                            <NavLinksProjects link="projects-section" title="Projects" />
                            <NavLinksProjects link="contact-section" title="Contact" />
                            <NavLinksProjects link="blog" title="Blog" />
                        </ul>
                    </nav>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;