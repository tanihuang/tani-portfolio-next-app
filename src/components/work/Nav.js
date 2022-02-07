import classNames from 'classnames';
import Nav from 'react-bootstrap/Nav';
import { CATEGORY } from '../../mockData/work';
import styles from '../../styles/components/work/nav.module.scss';

const WorkNav = ({
  activeKey,
  onSelect,
}) => (
  <Nav
    activeKey={activeKey}
    onSelect={onSelect}
    className={classNames(
      styles.nav,
      'mb-4',
    )}
  >
    <Nav.Item>
      <Nav.Link eventKey="All">
        All
      </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey={CATEGORY.design}>
        {CATEGORY.design}
      </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey={CATEGORY.development}>
        {CATEGORY.development}
      </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey={CATEGORY.animation}>
        {CATEGORY.animation}
      </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey={CATEGORY.other}>
        {CATEGORY.other}
      </Nav.Link>
    </Nav.Item>
  </Nav>
);

export default WorkNav;
