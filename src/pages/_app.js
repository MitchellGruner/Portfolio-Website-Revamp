import Layout from '../components/Layout';

import '../styles/About.scss?v=2';
import '../styles/globals.scss?v=4';
import '../styles/Navbar.scss?v=3';
import '../styles/Projects.scss?v=2';
import '../styles/ProjectsInfo.scss?v=2';
import '../styles/Contact.scss?v=4';
import '../styles/Blog.scss';

export default function App({ Component, pageProps }) {
  return (
      <Layout>
          <Component {...pageProps} />
      </Layout>
  )
}
