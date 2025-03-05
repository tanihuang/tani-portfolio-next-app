import { useState } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { HEADER } from '../../mockData/header';

const Header = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const handleTogglerClick = () => {
    setIsMenuOpened(!isMenuOpened);
  };

  return (
    <header className={classNames(
      'header',
    )}
    >
      <Navbar expand="true">
        <Container>
          <Link href="/" passHref legacyBehavior>
            <Navbar.Brand
              className={classNames(
                {
                  active: isMenuOpened,
                },
              )}
              title="Tani Huang"
            >
              <h1>Tani Huang</h1>
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={handleTogglerClick}
            className={isMenuOpened ? 'show' : ''}
          />
        </Container>
        <Navbar.Collapse id="basic-navbar-nav" in={isMenuOpened}>
          <Nav className="mr-auto">
            <Container>
              {HEADER.map(({ id, title, url }) => (
                <Link href={url} key={id} passHref legacyBehavior>
                  <Nav.Link
                    title={title}
                    onClick={() => setIsMenuOpened(false)}
                  >
                    {title}
                  </Nav.Link>
                </Link>
              ))}
              {/* eslint-disable-next-line */}
              <a 
                title="Studio"
                href="https://theotherleaf.github.io/en"
                target="_blank"
                onClick={() => setIsMenuOpened(false)}
              >
                Studio
              </a>
            </Container>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
