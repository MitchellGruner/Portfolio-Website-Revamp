import React from "react";

function ProjectLogo({
    id,
    logo,
    alt,
}: {
    id: number;
    logo: string;
    alt: string;
}) {
    return (
        <div className="project-logo-container mx-auto mb-6 xs:mb-8 md:mb-8 lg:mb-10">
            <a href={`/projects/${id}`} className="flex mx-12 xs:mx-4 sm:mx-10 md:mx-6 lg:mx-4">
                <img
                    className="mx-auto"
                    src={`/static/images/${logo}`}
                    alt={alt}
                />
            </a>
        </div>
    )
}

const Projects = (props) => {
    return (
        <div id="projects" className="h-auto mt-2 mb-12 xs:mb-16 sm:mb-20 md:mb-24 lg:mb-28 xl:mb-32 2xl:mb-36">
            <div className="text-center mx-4 sm:mx-32 md:mx-42 lg:mx-56 xl:mx-80">
                <h2 className="text-3xl xs:text-4xl md:text-5xl 2xl:text-6xl font-bold text-white">Here are some <span className="text-gold font-extrabold">highlights</span>...</h2>
                <p className="text-md p-4 mb-6 xs:mb-10 2xl:mt-6 2xl:mb-14 xs:text-lg md:text-xl 2xl:text-2xl text-white">From shopping in an ecommerce full-stack application, to analyzing trends with statistical analysis in sports, to playing trivia with a wide range of interesting and fun questions, these projects offer a lit bit of everything.</p>
            </div>
            <div id="projects-section"></div>

            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xs:gap-2 sm:gap-4 lg:gap-6 xs:mx-4 sm:mx-6 md:mx-8 lg:mx-32 xl:mx-36">
                {props.productDetails.productDetails.map((project) => {
                    return (
                        <ProjectLogo
                            key={project.id}
                            id={project.id}
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