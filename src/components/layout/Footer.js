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
          <Col>
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
          <Col>
            <ul className="mt-auto ml-auto">
              <li>
                <Link href="/login" legacyBehavior>
                  <a title="Login">Login</a>
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
