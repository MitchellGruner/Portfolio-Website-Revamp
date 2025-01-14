import React from 'react';
import Image from 'next/image';

import dynamic from 'next/dynamic';
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

import {LuBone} from "react-icons/lu";
import {CiCloud} from "react-icons/ci";
import {MdOutlineQuiz} from "react-icons/md";
import {CiLemon} from "react-icons/ci";

import Link from 'next/link';

let iconArray = [
    <CiCloud key={0} />,
    <LuBone key={1} />,
    <MdOutlineQuiz key={2} />,
    <CiLemon key={3} />
]

function DemoDisplay (demo) {
    if (Object.values(demo).toString().length > 0) {
        return (
            <a href={Object.values(demo).toString()} className="flex justify-center items-center bg-navy text-white bg-red rounded-full w-20 sm:w-24 p-3 mr-3 sm:mr-4 text-sm sm:text-md 2xl:text-lg">Demo</a>
        )
    }
}

function CodeDisplay (code) {
    if (Object.values(code).toString().length > 0) {
        return (
            <a href={Object.values(code).toString()} className="flex justify-center items-center text-white bg-black rounded-full w-20 sm:w-24 p-3 mr-3 sm:mr-4 text-sm sm:text-md 2xl:text-lg">Code</a>
        )
    }
}

function NavLinks({
    id,
    image,
    alt,
    title,
    description,
    demo,
    code,
    video
}: {
    id: number;
    image: string;
    alt: string;
    title: string;
    description: string;
    demo?: string;
    code?: string;
    video: string;
}) {
    return (
        <div id="projects-info" className="block">
            <div id="projects-img" className="projects-card-container p-4 xs:p-5 md:p-6 xs:mx-6 xs:mt-10 sm:mx-10 md:mx-14 lg:mx-8 md:my-12">
                <Image id="projects-img"
                    className="mx-auto w-48 md:w-56 lg:w-64"
                    src={`/static/images/${image}`}
                    alt={alt}
                    width="200"
                    height="0"
                    style={{ width: 'auto', height: 'auto' }}
                />
                <div id="projects-card-video" className="projects-card-video-container">
                    <ReactPlayer 
                        className="projects-card-video m-auto my-8"
                        url={video} 
                    />
                </div>
                <div id="projects-card" className="projects-card px-3 2xl:px-7 xs:px-4 py-4 2xl:py-6 xs:py-5 my-4 xs:my-5">
                    <div className="flex items-center mb-4 xs:mb-5">
                        <h1 className="text-white block mr-4 xs:mr-5 text-2xl sm:text-3xl 2xl:text-4xl"><p>{title}</p></h1>
                        <span className="text-white text-xl sm:text-2xl">{iconArray[id]}</span>
                    </div>
                    <p className="text-white block m-1 xs:m-2 text-md sm:text-lg 2xl:text-xl">{description}</p>
                    <div className="flex mt-5 xs:mt-6">
                        <DemoDisplay demo={demo} />
                        <CodeDisplay code={code} />
                    </div>
                </div>
                <div id="projects-back" className="projects-card-go-back-btn justify-end">
                    <Link href="/" className="right-0 flex justify-center items-center text-white bg-navy rounded-full w-28 xs:w-40 sm:w-52 xl:w-60 p-3 mt-4 md:right-0 md:absolute text-sm sm:text-md 2xl:text-lg">Go Back</Link>
                </div>
            </div>
        </div>
    );
}

const ProjectsInfo = (props) => {
    return (
        <div>
            <NavLinks
                key={props.project.productDetails.id}
                id={props.project.productDetails.id}
                image={props.project.productDetails.image}
                alt={props.project.productDetails.alt}
                title={props.project.productDetails.title}
                description={props.project.productDetails.description}
                demo={props.project.productDetails.demo}
                code={props.project.productDetails.code}
                video={props.project.productDetails.video}
            />
        </div>
    )
}

if (typeof document !== "undefined" && window.matchMedia("(min-width: 768px)").matches) {
    document.getElementById("projects-back").style.display = "none";

    setTimeout(() => {
        let projectsInfoHeight = document.getElementById("projects-info").offsetHeight;
        let projectsCardHeight = document.getElementById("projects-card").offsetHeight;
        let projectsVideoHeight = document.getElementById("projects-card-video").offsetHeight;

        let projectsCard = document.getElementById("projects-card");
        let projectsCardVideo = document.getElementById("projects-card-video");
        let projectsOffset = 100;

        projectsCard.style.top = (projectsInfoHeight + projectsOffset).toString() + "px";

        if (window.matchMedia("(max-width: 991px)").matches) {
            projectsCardVideo.style.top = (projectsInfoHeight + projectsCardHeight + projectsOffset).toString() + "px";
        } else {
            projectsCardVideo.style.top = (projectsInfoHeight + projectsCardHeight + (projectsOffset * 1.5)).toString() + "px";
        }

        setTimeout(() => {
            document.getElementById("projects-back").style.display = "flex";
            let projectsBack = document.getElementById("projects-back");

            projectsBack.style.top = (projectsInfoHeight + projectsCardHeight + projectsVideoHeight + (projectsOffset * 1.5)).toString() + "px";

            if (window.matchMedia("(min-width: 992px)").matches) {
                projectsBack.style.paddingBottom = projectsOffset.toString() + "px";
            }
        }, 3000);
    }, 1000);
}

export default ProjectsInfo;