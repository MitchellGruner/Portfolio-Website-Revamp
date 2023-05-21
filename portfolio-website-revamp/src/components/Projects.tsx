import React, { ReactNode } from "react";
import Image, { StaticImageData } from "next/image";

import {BsCardList} from "react-icons/bs";
import {AiOutlineCloud} from "react-icons/ai";
import {AiOutlineMobile} from "react-icons/ai";
import {GiStonePath} from "react-icons/gi";
import {ImMan} from "react-icons/im";
import {CiBaseball} from "react-icons/ci";

import QuizList from "../../public/static/images/QuizList.png";

function DemoDisplay (demo) {
    if (Object.values(demo).toString().length > 0) {
        return (
            <a href={Object.values(demo).toString()} className="flex justify-center items-center text-white bg-red rounded-full w-20 sm:w-24 p-3 mr-3 sm:mr-4 text-sm sm:text-md">Demo</a>
        )
    }
}

function NavLinks({
    image,
    alt,
    titleFirst,
    titleSecond,
    icon,
    description,
    demo,
    code,
    video
}: {
    image: StaticImageData;
    alt: string;
    titleFirst: string;
    titleSecond: string;
    icon: ReactNode;
    description: string;
    demo?: string;
    code: string;
    video: string;
}) {
    return (
        <div className="projects-card-container flex flex-col md:flex-row p-4 xs:p-5 md:p-6 xs:mx-6 xs:my-10 sm:mx-10 sm:my-14 md:mx-4 md:my-20">
            <Image
          className="mx-auto w-48 md:w-60 md:mr-7"
          src={image}
          alt={alt}
        />
            <div className="projects-card px-3 xs:px-4 py-4 xs:py-5 my-4 xs:my-5">
                <div className="flex items-center mb-4 xs:mb-5">
                    <p className="text-white block mr-4 xs:mr-5 text-2xl sm:text-3xl"><span className="text-black font-bold mr-1">{titleFirst}</span>{titleSecond}</p>
                    <span className="text-white text-xl sm:text-2xl">{icon}</span>
                </div>
                <p className="text-white block m-1 xs:m-2 text-md sm:text-lg">{description}</p>
                <div className="flex mt-5 xs:mt-6">
                    <DemoDisplay demo={demo} />
                    <a href={code} className="flex justify-center items-center text-white bg-purple rounded-full w-20 sm:w-24 p-3 mr-3 sm:mr-4 text-sm sm:text-md">Code</a>
                    <a href={video} className="flex justify-center items-center text-white bg-black rounded-full w-20 sm:w-24 p-3 text-sm sm:text-md">Video</a>
                </div>
            </div>
        </div>
    );
}

const Projects = () => {
    return (
        <div id="projects" className="min-h-screen h-auto mt-6 md:mt-2">
            <NavLinks 
                image={QuizList}
                alt="QuizList Lifestyle"
                titleFirst="Quiz"
                titleSecond="List"
                icon={<BsCardList />}
                description="A quiz game created using React.js that allows users to guess an answer to a question in an accordion-style dropdown. If the answer is correct, the user is allowed to continue playing to try and beat their high score. However, if a question is not correctly answered, the game is over and their score gets set to zero."
                demo="https://master--vermillion-narwhal-b9ab97.netlify.app/"
                code="https://github.com/MitchellGruner/QuizList"
                video="https://www.youtube.com/watch?v=0AWLYyrbZ-Y&t=7s"
            />
            <NavLinks 
                image={QuizList}
                alt="QuizList Lifestyle"
                titleFirst="Cloud"
                titleSecond="Vend"
                icon={<AiOutlineCloud />}
                description="A full-stack web application that allows authenticated users to create profiles, post descriptive items, and post comments on items. Authenticated users can also edit and delete their own items and comments, but can never erase other authenticated user's data. MongoDB, Node.js, and Express.js was used throughout, as well as Passport.js for user authentication."
                code="https://github.com/MitchellGruner/CloudVend"
                video="https://www.youtube.com/watch?v=PF3A6o_ZkAc"
            />
            <NavLinks 
                image={QuizList}
                alt="QuizList Lifestyle"
                titleFirst="Mobile"
                titleSecond="Learning App"
                icon={<AiOutlineMobile />}
                description="A React Native application that allows “Subject Matter Experts” (SME) to post courses, videos, lecture notes, and quizzes to students who are currently enrolled in their course. This application implements the Firebase Realtime Database to store user information. The student's and SME's credentials are also stored within the database. This project was created by a group of six members who carried out their work in two-week long sprints in an Agile environment."
                demo="https://expo.dev/@calialex/Mobile-Learning-App"
                code="https://github.com/MitchellGruner/Mobile-Learning-App"
                video="https://www.youtube.com/watch?v=sZyEqZzVrc8"
            />
            <NavLinks 
                image={QuizList}
                alt="QuizList Lifestyle"
                titleFirst="The"
                titleSecond="Path"
                icon={<GiStonePath />}
                description="An Object-Oriented Programming in Java application that allows users to control an “ant” that must evade “spiders” in the game world. The user must collide with “flags” and “food stations” in order to succeed, and the movements of all of the game objects are clearly visible in a container within an iPad III emulator. This application uses a library that closely resembles Java Swing."
                code="https://github.com/MitchellGruner/-The-Path-OOP-Java-Project"
                video="https://www.youtube.com/watch?v=0ZhmxCtSjfw"
            />
            <NavLinks 
                image={QuizList}
                alt="QuizList Lifestyle"
                titleFirst="Hangman"
                titleSecond="!"
                icon={<ImMan />}
                description="A vanilla JavaScript application that implements HTML and CSS, as well as the Bootstrap framework, that allows end-users to guess letters that are located within a randomly picked word from a pre-defined array. The user may have hints displayed to them, but they all cost the user time - Once the time runs out, the game is over. If the user runs out of lives, the game is also over."
                demo="https://clever-galileo-8dbff3.netlify.app/"
                code="https://github.com/MitchellGruner/Hangman"
                video="https://www.youtube.com/watch?v=M-pCWe8rcik"
            />
            <NavLinks 
                image={QuizList}
                alt="QuizList Lifestyle"
                titleFirst="Baseball"
                titleSecond="Analytics"
                icon={<CiBaseball />}
                description="A data analytics project that implements statistical concepts on a large data set to prove that players have become more aggressive over time. This project was built using the R programming language, and it takes in a single statistical file for input. The data file was taken from Kaggle.com, and it houses all batters that have batted from 1871 to 2015 in Major League Baseball."
                code="https://github.com/MitchellGruner/Baseball_Aggressive_Analytics"
                video="https://www.youtube.com/watch?v=xojmvRTKvEg"
            />
        </div>
    );
}

export default Projects;