import classNames from 'classnames';
import Container from 'react-bootstrap/Container';
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
        <h2 className="font-weight-light mb-4">Frontend Web Developer / UIUX Designer</h2>
        <p className={classNames('mb-4')}>Tani Huang is a Taiwanese based frontend web developer / UIUX designer with {new Date().getFullYear() - 2016} years experience that is specializing in web development, web custom design and making animation.</p>
        <WorkList works={featuredWorks} />
      </Container>
    </Layout>
  );
};

export default Home;
