import React from "react";
import Image, { StaticImageData } from "next/image";

import QuizList from "../../public/static/images/quizlist1.png";
import CloudVend from "../../public/static/images/cloudvend1.png";
import MobileLearningApp from "../../public/static/images/mobile-learning-app.png";
import BaseballAggressiveAnalytics from "../../public/static/images/baseball-aggressive-analytics.png";
import Hangman from "../../public/static/images/hangman.png";
import ThePath from "../../public/static/images/thepath.png";

function ProjectLogo({
    logo,
    alt,
    link
}: {
    logo: StaticImageData;
    alt: string;
    link: string;
}) {
    return (
        <div className="project-logo-container mx-auto mb-6 xs:mb-8 md:mb-8 lg:mb-10">
            <a href={link} className="flex mx-12 xs:mx-4 sm:mx-10 md:mx-6 lg:mx-4">
                <Image
                    className="mx-auto"
                    src={logo}
                    alt={alt}
                />
            </a>
        </div>
    )
}

const Projects = () => {
    return (
        <div id="projects" className="h-auto mt-2 mb-16 xs:mb-20 sm:mb-24 md:mb-32 md:mt-2 lg:mb-36 xl:mb-40 2xl:mb-44">
            <div className="text-center mx-4 sm:mx-32 md:mx-42 lg:mx-56 xl:mx-80">
                <h2 className="text-3xl xs:text-4xl md:text-5xl 2xl:text-6xl font-bold text-white">Here are some <span className="text-black font-extrabold">highlights</span>...</h2>
                <p className="text-md p-4 mb-6 xs:mb-10 2xl:mt-6 2xl:mb-14 xs:text-lg md:text-xl 2xl:text-2xl text-white">From shopping in an ecommerce full-stack application, to analyzing trends with statistical analysis in sports, to playing trivia with a wide range of interesting and fun questions, these projects offer a lit bit of everything.</p>
            </div>

            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xs:gap-2 sm:gap-4 lg:gap-6 xs:mx-4 sm:mx-6 md:mx-8 lg:mx-32 xl:mx-36">
                <ProjectLogo logo={QuizList} alt="QuizList Logo" link="/projects/quiz-list" />
                <ProjectLogo logo={CloudVend} alt="CloudVend Logo" link="/projects/cloud-vend" />
                <ProjectLogo logo={MobileLearningApp} alt="Mobile Learning App Logo" link="/projects/mobile-learning-app" />
                <ProjectLogo logo={ThePath} alt="The Path Logo" link="/projects/the-path" />
                <ProjectLogo logo={Hangman} alt="Hangman Logo" link="/projects/hangman" />
                <ProjectLogo logo={BaseballAggressiveAnalytics} alt="Baseball Aggressive Analytics Logo" link="/projects/baseball-aggressive-analytics" />
            </div>
        </div>
    );
}

export default Projects;