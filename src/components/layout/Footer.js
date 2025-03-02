import Link from 'next/link';
import classNames from 'classnames';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { SOCIAL_PLATFORMS } from '../../mockData/footer';

const Footer = () => {
  const socialPlatForms = SOCIAL_PLATFORMS;

  return (
    <footer className={classNames(
      'footer',
    )}
    >
      <Container>
        <Row>
          <Col xs={12} md={6} className="d-flex flex-column justify-content-center justify-content-md-end text-center text-md-start">
            <p>Connect with me elsewhere</p>
            <ul>
              {
                socialPlatForms.map((item) => (
                  <li key={item.id}>
                    <a href={item.url} target="_blank" rel="noreferrer" title={item.name}>
                      {item.name}
                    </a>
                  </li>
                ))
              }
            </ul>
          </Col>
          <Col xs={12} md={6} className="d-flex justify-content-center justify-content-md-end mt-3 mt-md-0">
            <ul className="di-flex mt-auto ml-auto">
              {/* <li>
                <Link href="/login" legacyBehavior>
                  <a title="Login">Login</a>
                </Link>
              </li> */}
              <li>
                <Link href="#" legacyBehavior>
                  <a title={`Copyright © ${new Date().getFullYear()} Tani Huang`}>
                    Copyright © {new Date().getFullYear()} Tani Huang
                  </a>
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
