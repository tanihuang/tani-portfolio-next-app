import classNames from 'classnames';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import WorkItem from './Item';
import styles from '../../styles/components/work/list.module.scss';

const WorkList = ({
  works,
}) => (
  <div className={classNames(
    styles.list,
  )}
  >
    <Row>
      {
          works.map((item) => (
            <Col key={item.id} md={6} lg={4}>
              <WorkItem {...item} />
            </Col>
          ))
        }
    </Row>
  </div>
);

export default WorkList;
