import Head from 'next/head';
import classNames from 'classnames';
import Header from './Header';
import Footer from './Footer';

const Layout = ({
  className = 'layout',
  children,
}) => (
  <>
    <Head>
      <title>Tani Huang Art & Creative</title>
    </Head>
    <div className={classNames(
      className,
    )}
    >
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  </>
);

export default Layout;

