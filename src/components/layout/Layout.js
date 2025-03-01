import { useState, useEffect } from 'react';
import Head from 'next/head';
import classNames from 'classnames';
import Header from './Header';
import Footer from './Footer';
import styles from '../../styles/layout/layout.module.scss';

const Layout = ({ className = 'layout', children }) => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Head>
        <title>Tani Huang Art & Creative</title>
      </Head>
      <div className={classNames(className)}>
        <Header />
        <main>{children}</main>
        <Footer />
        <button
          type="button"
          className={showScroll ? `${styles.scroll} active` : styles.scroll}
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <img src="/images/top.png" alt="Top" />
        </button>
      </div>
    </>
  );
};

export default Layout;
