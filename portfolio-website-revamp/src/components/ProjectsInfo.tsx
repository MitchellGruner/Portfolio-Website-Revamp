import React, { ReactNode } from "react";
// import Image, { StaticImageData } from "next/image";

// import {BsCardList} from "react-icons/bs";
// import {AiOutlineCloud} from "react-icons/ai";
// import {AiOutlineMobile} from "react-icons/ai";
// import {GiStonePath} from "react-icons/gi";
// import {ImMan} from "react-icons/im";
// import {CiBaseball} from "react-icons/ci";
// import QuizList from "../../public/static/images/quizlist1.png";

// function DemoDisplay (demo) {
//     if (Object.values(demo).toString().length > 0) {
//         return (
//             <a href={Object.values(demo).toString()} className="flex justify-center items-center text-white bg-red rounded-full w-20 sm:w-24 p-3 mr-3 sm:mr-4 text-sm sm:text-md">Demo</a>
//         )
//     }
// }

function NavLinks({
    key,
    image,
    name,
    description,
    demo,
    code,
    video
}: {
    key: number;
    image: string;
    name: string;
    description: string;
    demo: string;
    code: string;
    video: string;
}) {
    return (
        // <div className="projects-card-container flex flex-col lg:flex-row p-4 xs:p-5 md:p-6 xs:mx-6 xs:my-10 sm:mx-10 md:mx-14 lg:mx-8 md:my-12">
        //     <Image
        //   className="mx-auto w-48 md:w-72"
        //   src={image}
        //   alt={alt}
        // />
        //     <div className="projects-card px-3 xs:px-4 py-4 xs:py-5 my-4 xs:my-5">
        //         <div className="flex items-center mb-4 xs:mb-5">
        //             <p className="text-white block mr-4 xs:mr-5 text-2xl sm:text-3xl"><span className="text-black font-bold mr-1">{titleFirst}</span>{titleSecond}</p>
        //             <span className="text-white text-xl sm:text-2xl">{icon}</span>
        //         </div>
        //         <p className="text-white block m-1 xs:m-2 text-md sm:text-lg">{description}</p>
        //         <div className="flex mt-5 xs:mt-6">
        //             <DemoDisplay demo={demo} />
        //             <a href={code} className="flex justify-center items-center text-white bg-purple rounded-full w-20 sm:w-24 p-3 mr-3 sm:mr-4 text-sm sm:text-md">Code</a>
        //             <a href={video} className="flex justify-center items-center text-white bg-black rounded-full w-20 sm:w-24 p-3 text-sm sm:text-md">Video</a>
        //         </div>
        //     </div>
        // </div>
        <div>
            <p>Key: {key}</p>
            <p>Image: {image}</p>
            <p>Name: {name}</p>
            <p>Description: {description}</p>
            <p>Demo: {demo}</p>
            <p>Code: {code}</p>
            <p>Video: {video}</p>
        </div>
    );
}

const ProjectsInfo = (props) => {
    return (
        <div>
            <NavLinks
                key={props.key}
                image={props.image}
                name={props.name}
                description={props.description}
                demo={props.demo}
                code={props.code}
                video={props.video}
            />
        </div>
    )
}

export default ProjectsInfo;