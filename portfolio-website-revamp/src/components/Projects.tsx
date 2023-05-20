import React, { ReactNode } from "react";
import ReactPlayer from "react-player";
import {BsCardList} from "react-icons/bs";
import {AiOutlineCloud} from "react-icons/ai";
import {AiOutlineMobile} from "react-icons/ai";
import {GiStonePath} from "react-icons/gi";
import {ImMan} from "react-icons/im";
import {CiBaseball} from "react-icons/ci";

function NavLinks({
    gif,
    titleFirst,
    titleSecond,
    icon,
    description,
    demo,
    code,
    video
}: {
    gif: string;
    titleFirst: string;
    titleSecond: string;
    icon: ReactNode;
    description: string;
    demo?: string;
    code?: string;
    video?: string;
}) {
    return (
        <div className="flex flex-col p-4">
            <ReactPlayer url={gif} width="100%" height="100%" controls={true} />
            <div className="my-4">
                <div className="flex items-center my-4">
                    <p className="text-white block mr-4 text-2xl"><span className="text-black font-bold mr-1">{titleFirst}</span>{titleSecond}</p>
                    <span className="text-white text-2xl md:text-3xl icon">{icon}</span>
                </div>
                <p className="text-white m-1 block text-md">{description}</p>
                <div className="projects-btn-div flex my-5">
                    <a href={demo} className="bg-red rounded-full w-20 p-3 mr-3 text-center text-white text-sm">Demo</a>
                    <a href={code} className="bg-purple rounded-full w-20 p-3 mr-3 text-center text-white text-sm">Code</a>
                    <a href={video} className="bg-black rounded-full w-20 p-3 text-center text-white text-sm">Video</a>
                </div>
            </div>
        </div>
    );
}

const Projects = () => {
    return (
        <div id="projects" className="min-h-screen h-auto mt-6 md:mt-2 mb-8 sm:mb-28 xl:mb-32">
            <NavLinks 
                gif="https://www.youtube.com/watch?v=0AWLYyrbZ-Y&t=7s"
                titleFirst="Quiz"
                titleSecond="List"
                icon={<BsCardList />}
                description="A quiz game created using React.js that allows users to guess an answer to a question in an accordion-style dropdown. If the answer is correct, the user is allowed to continue playing to try and beat their high score. However, if a question is not correctly answered, the game is over and their score gets set to zero."
                demo="https://master--vermillion-narwhal-b9ab97.netlify.app/"
                code="https://github.com/MitchellGruner/QuizList"
                video="https://www.youtube.com/watch?v=0AWLYyrbZ-Y&t=7s"
            />
            <NavLinks 
                gif="https://www.youtube.com/watch?v=PF3A6o_ZkAc"
                titleFirst="Cloud"
                titleSecond="Vend"
                icon={<AiOutlineCloud />}
                description="A full-stack web application that allows authenticated users to create profiles, post descriptive items, and post comments on items. Authenticated users can also edit and delete their own items and comments, but can never erase other authenticated user's data. MongoDB, Node.js, and Express.js was used throughout, as well as Passport.js for user authentication."
                code="https://github.com/MitchellGruner/CloudVend"
                video="https://www.youtube.com/watch?v=PF3A6o_ZkAc"
            />
            <NavLinks 
                gif="https://www.youtube.com/watch?v=sZyEqZzVrc8"
                titleFirst="Mobile"
                titleSecond="Learning App"
                icon={<AiOutlineMobile />}
                description="A React Native application that allows “Subject Matter Experts” (SME) to post courses, videos, lecture notes, and quizzes to students who are currently enrolled in their course. This application implements the Firebase Realtime Database to store user information. The student's and SME's credentials are also stored within the database. This project was created by a group of six members who carried out their work in two-week long sprints in an Agile environment."
                demo="https://expo.dev/@calialex/Mobile-Learning-App"
                code="https://github.com/MitchellGruner/Mobile-Learning-App"
                video="https://www.youtube.com/watch?v=sZyEqZzVrc8"
            />
            <NavLinks 
                gif="https://www.youtube.com/watch?v=0ZhmxCtSjfw"
                titleFirst="The"
                titleSecond="Path"
                icon={<GiStonePath />}
                description="An Object-Oriented Programming in Java application that allows users to control an “ant” that must evade “spiders” in the game world. The user must collide with “flags” and “food stations” in order to succeed, and the movements of all of the game objects are clearly visible in a container within an iPad III emulator. This application uses a library that closely resembles Java Swing."
                code="https://github.com/MitchellGruner/-The-Path-OOP-Java-Project"
                video="https://www.youtube.com/watch?v=0ZhmxCtSjfw"
            />
            <NavLinks 
                gif="https://www.youtube.com/watch?v=M-pCWe8rcik"
                titleFirst="Hangman"
                titleSecond="!"
                icon={<ImMan />}
                description="A vanilla JavaScript application that implements HTML and CSS, as well as the Bootstrap framework, that allows end-users to guess letters that are located within a randomly picked word from a pre-defined array. The user may have hints displayed to them, but they all cost the user time - once the time runs out, the game is over. If the user runs out of lives, the game is also over."
                demo="https://clever-galileo-8dbff3.netlify.app/"
                code="https://github.com/MitchellGruner/Hangman"
                video="https://www.youtube.com/watch?v=M-pCWe8rcik"
            />
            <NavLinks 
                gif="https://www.youtube.com/watch?v=xojmvRTKvEg"
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