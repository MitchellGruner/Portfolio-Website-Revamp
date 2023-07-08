import Layout from '../components/Layout';

import '../styles/About.scss?v=2';
import '../styles/globals.scss?v=2';
import '../styles/Navbar.scss?v=2';
import '../styles/Projects.scss?v=2';
import '../styles/ProjectsInfo.scss?v=2';
import '../styles/Contact.scss?v=3';

export default function App({ Component, pageProps }) {
  return (
      <Layout>
          <Component {...pageProps} />
      </Layout>
  )
}
