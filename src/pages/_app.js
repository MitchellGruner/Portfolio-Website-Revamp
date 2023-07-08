import Layout from '../components/Layout';

import '../styles/About.scss?v=1';
import '../styles/globals.scss?v=1';
import '../styles/Navbar.scss?v=1';
import '../styles/Projects.scss?v=1';
import '../styles/ProjectsInfo.scss?v=1';
import '../styles/Contact.scss?v=1';

export default function App({ Component, pageProps }) {
  return (
      <Layout>
          <Component {...pageProps} />
      </Layout>
  )
}
