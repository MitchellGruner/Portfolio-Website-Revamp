import React from "react";

import TextTransition, { presets } from 'react-text-transition';
const TEXTS = ['Front-End Development', 'Responsive Web Design', 'UI Design'];

import {BsLinkedin} from "react-icons/bs";
import {AiFillGithub} from "react-icons/ai";
import {BsInstagram} from "react-icons/bs";

import Image from "next/image";
import AboutImage from "../../public/static/images/mitchell.gruner.profile.image.dubrovnik.jpg";

const About = () => {
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        const intervalId = setInterval(
          () => setIndex((index) => index + 1),
          5000,
        );
        return () => clearTimeout(intervalId);
      }, []);

    return (
        <div id="about" className="h-auto mb-12 xs:mb-16 sm:mb-20 md:mb-24 lg:mb-28 xl:mb-32 2xl:mb-36">
            <div className="relative 2xl:max-w-screen-2xl m-auto pt-24 pb-44 lg:pb-16">
                <div className="text-center sm:max-w-[515px] md:max-w-[635px] lg:max-w-[inherit] xl:max-w-[700px] sm:text-left sm:mr-10 sm:ml-6 lg:ml-8 lg:mt-4 lg:mr-96 xl:mr-[31em] md:mx-42 xl:ml-20 2xl:ml-24">
                    <h1><span className="mt-2 text-lg md:text-xl 2xl:text-2xl font-bold text-[#FCB1A4] block"><TextTransition springConfig={presets.gentle}>{TEXTS[index % TEXTS.length]}</TextTransition></span></h1>
                    <h2 className="text-3xl xs:text-4xl md:text-5xl font-bold text-white">Mitchell Gruner</h2>
                    <p className="text-md p-4 sm:p-0 sm:pl-4 xs:text-lg md:text-xl text-white sm:my-4 lg:my-6 sm:border-l-[12px] xl:border-l-[16px] sm:border-[#FCB1A4] rounded-tl-lg rounded-bl-lg">Hi! I'm Mitchell, a Front-End Developer with over three years of professional experience. I am passionate about creating mobile-first, responsive websites using React.js, Next.js, Tailwind CSS, TypeScript, and other development frameworks. I earned my Bachelor of Science in Computer Science from Sacramento State in May of 2021, and have been a professional developer ever since. In my freetime, I enjoy playing tennis and pickleball, and absolutely love to travel the world with my girlfriend.</p>
                </div>
                <div className="flex justify-around sm:justify-start mx-14 mb-10 xs:mt-0 xs:mx-24 xs:mb-6 sm:mx-8 md:mx-8 lg:mx-10 xl:mx-20 2xl:mx-24 mt-2 2xl:mt-4 2xl:mb-12">
                    <a href="https://github.com/MitchellGruner">
                        <AiFillGithub className="text-white sm:mr-6 text-2xl md:text-3xl icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/mitchell-gruner/">
                        <BsLinkedin className="text-white sm:mr-6 text-2xl md:text-3xl icon" />
                    </a>
                    <a href="https://www.instagram.com/mitchyo_2209/?hl=en">
                        <BsInstagram className="text-white text-2xl md:text-3xl icon" />
                    </a>
                </div>
                <div className="absolute right-[2em] sm:right-[2.4em] xl:right-[4.4em] 2xl:right-[7em] sm:top-[27em] md:top-[25em] lg:top-[16em] xl:top-[8em] max-w-[190px] sm:max-w-[230px] md:max-w-[280px] lg:max-w-[300px] xl:max-w-[350px] mt-6 w-2/3 xs:w-7/12 sm:w-2/5 md:w-96 2xl:w-96 m-auto">
                    <Image src={AboutImage} priority className="profile-picture" alt="About Picture of Myself" />
                </div>
            </div>
        </div>
    );
}

export default About;