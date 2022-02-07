import Link from 'next/link';
import classNames from 'classnames';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ArrowItem from './Item';
import styles from '../../styles/components/arrow/group.module.scss';
import { BUTTON } from '../../mockData/global';

const ArrowGroup = ({
  previousSlug,
  nextSlug,
}) => {
  const renderArrowLeft = () => {
    if (!previousSlug) {
      return null;
    }

    return (
      <>
        <Link href={previousSlug} passHref>
          <ArrowItem className={styles['previous-button']} title={BUTTON.previous} />
        </Link>
        <Link href={previousSlug}>
          <a title={BUTTON.previous}>{BUTTON.previous}</a>
        </Link>
      </>
    );
  };

  const renderArrowRight = () => {
    if (!nextSlug) {
      return null;
    }

    return (
      <>
        <Link href={nextSlug}>
          <a title={BUTTON.next}>{BUTTON.next}</a>
        </Link>
        <Link href={nextSlug} passHref>
          <ArrowItem className={styles['next-button']} title={BUTTON.next} />
        </Link>
      </>
    );
  };

  return (
    <div className={classNames(
      styles.group,
      'mt-5',
    )}
    >
      <Row>
        <Col>
          {renderArrowLeft()}
        </Col>
        <Col>
          {renderArrowRight()}
        </Col>
      </Row>
    </div>
  );
};


export default ArrowGroup;
