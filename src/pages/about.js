import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Layout from '../components/layout/Layout';
import { ABOUT } from '../mockData/about';
import styles from '../styles/pages/about.module.scss';

const About = () => {
  const [open, setOpen] = useState(true); // State to control collapse

  return (
    <Layout className={styles.about}>
      <Container>
        <h2 className="mb-3">About</h2>
        <p className="mb-3">
          Tani Huang is a Taiwanese frontend web developer passionate about building responsive and high-performance web experiences. With expertise in web development, custom design, interactive animations, and backend admin systems, she creates seamless and engaging digital solutions.
          <br />
          Her journey into web development began with a personal animation website project, sparking her interest in coding and interactive web design. This passion evolved into a career where she enjoys transforming ideas into functional, efficient, and visually appealing websites, ensuring that every project is both technically sound and engaging.
        </p>

        {/* <p className="mb-3">
          Tani Huang 是一名台灣的前端開發工程師，專注於打造響應式與高效能的網頁體驗，並具備網頁開發、客製化設計、互動動畫以及後端管理系統的經驗，致力於提供流暢且具吸引力的數位解決方案。
          她的開發之路始於個人動畫網站，這段經歷讓她對程式語言與互動設計產生濃厚興趣，並逐步轉向專業領域。她享受將設計概念轉化為高效且直覺的網站應用，並確保每個專案在技術架構穩定性、效能表現及使用者體驗之間取得最佳平衡。
        </p> */}

        <h2 className="mt-5 mb-3">Career Journey</h2>
        {/* <div className="text-center mt-3">
          <Button
            variant="primary"
            onClick={() => setOpen(!open)}
            aria-controls="career-journey"
            aria-expanded={open}
          >
            {open ? 'Show Less' : 'Show More'}
          </Button>
        </div> */}
        <Collapse in={open}>
          <div>
            <Row>
              {ABOUT.map((item) => (
                <Col key={item.id} lg={12} className={styles['grid-item']}>
                  <h2 className={`${styles.title} mb-2`}>{`${item.title} (${item.year})`}</h2>
                  <ul>
                    <li>{item.description}</li>
                    {item.responsibilities && (
                      item.responsibilities.map((task) => (
                        <li key={task}>{task}</li>
                      ))
                    )}
                  </ul>
                </Col>
              ))}
            </Row>
          </div>
        </Collapse>

        <h2 className="mt-5 mb-3">Skills & Technologies</h2>
        <p>CSS、HTML、JavaScript、React.js、Next.js、Vue.js、Nuxt.js、React Native</p>
      </Container>
    </Layout>
  );
};

export default About;
