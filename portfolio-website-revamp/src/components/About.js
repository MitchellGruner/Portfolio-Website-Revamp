import React from "react";
import {BsLinkedin} from "react-icons/bs";
import {AiFillGithub} from "react-icons/ai";
import {BsInstagram} from "react-icons/bs";
import Image from "next/image";
import AboutImage from "../../public/static/about-profile.png";

const About = () => {
    return (
        <div id="about" className="min-h-screen h-auto mt-6 md:mt-2 mb-8 sm:mb-28 xl:mb-32">
            <div className="text-center sm:mx-32 md:mx-42 lg:mx-56 xl:mx-80 2xl:mx-96">
                <h2 className="text-3xl xs:text-4xl md:text-5xl 2xl:text-6xl font-bold text-white">Mitchell Gruner</h2>
                <span className="text-xl mt-2 xs:text-2xl md:text-3xl 2xl:text-4xl font-bold text-black block">Front End Developer</span>
                <p className="text-md p-4 xs:text-lg md:text-xl 2xl:text-2xl text-white">Passionate about creating mobile-first, responsive websites using ReactJS, Tailwind, TypeScript, and other development frameworks.</p>
            </div>
            <div className="flex justify-around mx-14 mb-10 xs:mt-0 xs:mx-24 xs:mb-6 sm:mx-52 md:mx-72 lg:mx-96 mt-2 2xl:mt-4 2xl:mb-12">
                <a href="https://github.com/MitchellGruner">
                    <AiFillGithub className="text-white text-2xl md:text-3xl icon" />
                </a>
                <a href="https://www.linkedin.com/in/mitchell-gruner-12a4ab163/">
                    <BsLinkedin className="text-white text-2xl md:text-3xl icon" />
                </a>
                <a href="https://www.instagram.com/mitchyo_2209/?hl=en">
                    <BsInstagram className="text-white text-2xl md:text-3xl icon" />
                </a>
            </div>
            <Image src={AboutImage} className="rounded-full mt-6 w-2/3 xs:w-7/12 sm:w-2/5 md:w-72 2xl:w-72 m-auto" alt="" />
        </div>
    );
}

export default About;