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
        <Link href={previousSlug} passHref legacyBehavior>
          <ArrowItem className={styles['previous-button']} title={BUTTON.previous} />
        </Link>
        <Link href={previousSlug} legacyBehavior>
          <div title={BUTTON.previous}>{BUTTON.previous}</div>
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
        <Link href={nextSlug} legacyBehavior>
          <div title={BUTTON.next}>{BUTTON.next}</div>
        </Link>
        <Link href={nextSlug} passHref legacyBehavior>
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
