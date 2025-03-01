import classNames from 'classnames';
import Nav from 'react-bootstrap/Nav';
import { CATEGORY } from '../../mockData/work';
import styles from '../../styles/components/work/nav.module.scss';

const WorkNav = ({ activeKey, onSelect }) => (
  <Nav
    activeKey={activeKey}
    onSelect={onSelect}
    className={classNames(styles.nav, 'mb-4')}
  >
    {Object.entries(CATEGORY).map(([key, label]) => (
      <Nav.Item key={key}>
        <Nav.Link eventKey={key}>{label}</Nav.Link>
      </Nav.Item>
    ))}
  </Nav>
);

export default WorkNav;
