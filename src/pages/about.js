import Container from 'react-bootstrap/Container';
import Layout from '../components/layout/Layout';
import styles from '../styles/pages/about.module.scss';

const About = () => (
  <Layout className={styles.about}>
    <Container>
      <h2 className="mb-3">About</h2>
      <p className="mb-3">Tani Huang is a Taiwanese frontend web developer / UIUX designer with {new Date().getFullYear() - 2016} years experience that is specializing in web development, web custom design and making animation.</p>
      <p className="mb-3">In the first 4 years, she has been working in digital agencies at Taiwan, mainly focusing on web UI design and development for client projects. She has created visual design with Sketch and implemented UI components with Vue.js / React.js framework.</p>
      <p className="mb-3">2020 she has been working in an IT company at Tokyo. She has consolidated her design skillset and acquired some back-end technique likes MySQL and Java by collaborating between design and development teams.</p>
      <p className="mb-3">2021 she has been working in an IT Department at Taiwan Business Bank. Maintaining the existing e-banking system, responsible for the modified and tested projects are subscription Fund, online digital bank account, eloan.</p> 
      <p>She loves creating UIUX that is both beautiful and UX-friendly. She also enjoy working on challenging tasks.</p>
    </Container>
  </Layout>
);

export default About;
