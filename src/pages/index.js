import { useEffect } from 'react';
import { useRouter } from 'next/router';

import {ChakraProvider} from "@chakra-ui/react";
import AppContainer from "../components/AppContainer";

import Head from "next/head";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import WorkProjects from "../components/WorkProjects";

import productDetailsData from "../data/project-details.json";

export async function getStaticProps(context) {
  return {
    props: {
      productDetails: productDetailsData
    },
  };
}

const Home = (props) => {
  const router = useRouter();

  /* this function will be called on mobile devices (when hamburger menu is present). */
  useEffect(() => {
      if (router.query.scrollTo) {
          const scrollFunction = () => {
              const element = document.getElementById(router.query.scrollTo);
              const offset = parseInt(router.query.offset, 10) || 0;
              if (element) {
                  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                  const offsetPosition = elementPosition + offset;

                  window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                  });
              }
          };

          setTimeout(() => {
              scrollFunction();
              if (router.query.scrollTo === 'contact') {
                  setTimeout(scrollFunction, 500);
              }
          }, 500);
      }
  }, [router.query.scrollTo, router.query.offset]);

  return (
    <div className="m-auto">
      <Head>
        <title>Mitchell Gruner</title>
        <meta name="description" content="Personal portfolio site of Mitchell Gruner. Professional Front-End Developer currently employed at Electronic Express in Nashville, TN. Created using Next.js, React.js, TypeScript, Tailwind CSS, Sass, JavaScript, and HTML and CSS" />
      </Head>

      <About />
      <div className="2xl:max-w-screen-2xl m-auto pt-24">
        <Projects productDetails={props} />
        <WorkProjects productDetails={props} />
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