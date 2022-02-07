import { useState } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { TEXT } from '../../mockData/global';

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
          <Link href="/" passHref>
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
          />
        </Container>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Container>
              <Link href="/about" passHref>
                <Nav.Link title="About">About</Nav.Link>
              </Link>
              <Link href="/work" passHref>
                <Nav.Link title="Work">Work</Nav.Link>
              </Link>
              <Nav.Link href={`mailto:${TEXT.email}`} title="Contact">Contact</Nav.Link>
            </Container>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
