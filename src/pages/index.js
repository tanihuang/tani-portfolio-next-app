import classNames from 'classnames';
import Container from 'react-bootstrap/Container';
import Link from 'next/link';
import Nav from 'react-bootstrap/Nav';
import Layout from '../components/layout/Layout';
import WorkList from '../components/work/List';
import styles from '../styles/pages/home.module.scss';
import { WORKS } from '../mockData/work';

const Home = () => {
  const featuredWorks = WORKS.filter((item) => item.isFeatured);
  return (
    <Layout className={classNames(
      'home',
      styles.home,
    )}
    >
      <Container>
        <h2 className="mb-2">Tani Huang</h2>
        <h2 className="font-weight-light mb-4">Frontend Web Developer</h2>
        <p className={classNames('mb-4')}>
          Tani Huang is a frontend web developer based in Taiwan who has a deep passion for
          building engaging and user-friendly online experiences that balance design and usability.
          <Link href="/work" passHref legacyBehavior>
            <Nav.Link title="Work" className="ms-2 d-inline text-decoration-underline">View more works</Nav.Link>
          </Link>
        </p>
        <WorkList works={featuredWorks} />
      </Container>
    </Layout>
  );
};

export default Home;
