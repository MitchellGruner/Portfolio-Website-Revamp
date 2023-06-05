import Layout from '../components/Layout';

import '../styles/About.scss';
import '../styles/globals.scss';
import '../styles/Navbar.scss';
import '../styles/Projects.scss';
import '../styles/ProjectsInfo.scss';

export default function App({ Component, pageProps }) {
  return (
      <Layout>
          <Component {...pageProps} />
      </Layout>
  )
}
