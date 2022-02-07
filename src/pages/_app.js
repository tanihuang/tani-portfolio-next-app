import ReactGA from 'react-ga';
import '../styles/main.scss';

function MyApp({ Component, pageProps }) {
  if (typeof window !== 'undefined') {
    ReactGA.initialize('UA-127155020-1'); // Change to your UA ID
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  return <Component {...pageProps} />;
}

export default MyApp;
