import React from "react";
import {BsLinkedin} from "react-icons/bs";
import {AiFillGithub} from "react-icons/ai";
import {BsInstagram} from "react-icons/bs";
import Image from "next/image";
import AboutImage from "../../public/static/about-profile.png";

function About() {
    return (
        <div id="about" className="min-h-screen">
            <div className="text-center">
                <h2 className="text-3xl font-bold text-white">Mitchell Gruner</h2>
                <p className="text-md text-white p-4"><span className="text-xl font-bold text-black">Front End Developer</span><br />Passionate about creating mobile-first, responsive websites using ReactJS, Tailwind, and other development frameworks.</p>
            </div>
            <div className="flex justify-around mx-14">
                <a href="https://github.com/MitchellGruner">
                    <AiFillGithub className="text-white text-2xl" />
                </a>
                <a href="https://www.linkedin.com/in/mitchell-gruner-12a4ab163/">
                    <BsLinkedin className="text-white text-2xl" />
                </a>
                <a href="">
                    <BsInstagram className="text-white text-2xl" />
                </a>
            </div>
            <Image src={AboutImage} className="rounded-full w-2/3 m-auto mt-6" alt="" />
        </div>
    );
}

export default About;