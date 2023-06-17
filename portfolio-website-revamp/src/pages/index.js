import {ChakraProvider} from "@chakra-ui/react";
import AppContainer from "../components/AppContainer";

import Head from "next/head";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import WorkProjects from "../components/WorkProjects";

import productDetailsData from "../data/project-details.json";
import workProjectsData from "../data/work-projects.json";

export async function getStaticProps(context) {
  return {
    props: {
      productDetails: productDetailsData,
      workProjects: workProjectsData
    },
  };
}

const Home = (props) => {
  return (
    <div className="m-auto">
      <Head>
        <title>Mitchell Gruner Portfolio</title>
        <meta name="description" content="Personal portfolio site of Mitchell Gruner. Professional Front End Developer currently employed at Electronic Express in Nashville, TN. Created using Next.js, React.js, TypeScript, Tailwind CSS, Sass, JavaScript, and HTML and CSS" />
      </Head>

      <div className="2xl:max-w-screen-2xl m-auto pt-24">
        <About />
        <Projects productDetails={props} />
        <WorkProjects workProjects={props} />
        <ChakraProvider>
          <AppContainer>
            <Contact />
          </AppContainer>
        </ChakraProvider>
      </div>
    </div>
  )
}

export default Home;