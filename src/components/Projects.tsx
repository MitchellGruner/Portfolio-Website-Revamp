import React from "react";
import Image from "next/image";

function ProjectLogo({
    id,
    url,
    logo,
    alt,
}: {
    id: number;
    url: string;
    logo: string;
    alt: string;
}) {
    return (
        <div className="project-logo-container mx-auto mb-6 xs:mb-8 md:mb-8 lg:mb-10">
            <a key={id} href={`/projects/${url}`} className="flex mx-12 xs:mx-4 sm:mx-10 md:mx-6 lg:mx-4">
                <Image
                    className="mx-auto"
                    src={`/static/images/${logo}`}
                    alt={alt}
                    width="200"
                    height="0"
                    style={{ width: '100%', height: 'auto' }}
                />
            </a>
        </div>
    )
}

const Projects = (props) => {
    return (
        <div id="projects" className="h-auto xs:mt-[-1em] sm:mt-[-1.8em] md:mt-[0em] lg:mt-[-2.5em] xl:mt-[-5em] mt-2 mb-12 xs:mb-16 sm:mb-20 md:mb-24 lg:mb-28 xl:mb-32 2xl:mb-36">
            <div className="text-center sm:mx-20 md:mx-42 xl:mx-64">
                <h2 className="text-3xl xs:text-4xl md:text-5xl 2xl:text-6xl font-bold text-white"><p>Here are some <span className="text-black font-extrabold">highlights</span>...</p></h2>
                <p className="text-md p-4 mb-6 xs:mb-10 2xl:mt-6 2xl:mb-14 xs:text-lg md:text-xl 2xl:text-2xl text-white">From an online marketplace where authenticated users can post items and connect with one another, to a user-friendly dog and cat sitting platform, to an engaging trivia game filled with a diverse range of fun questions—these projects cater to a wide array of interests and offer <span className="italic">something for everyone</span>.</p>
            </div>
            <div id="projects-section"></div>

            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xs:gap-2 sm:gap-4 lg:gap-6 xs:mx-4 sm:mx-6 md:mx-8 lg:mx-32 xl:mx-36">
                {props.productDetails.productDetails.slice(0, 4).map((project) => {
                    return (
                        <ProjectLogo
                            key={project.id}
                            id={project.id}
                            url={project.url}
                            logo={project.image}
                            alt={project.alt}
                        />
                    )
                })}
            </div>
        </div>
    );
}

export default Projects;