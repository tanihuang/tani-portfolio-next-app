import {
  useEffect, useRef, useState, forwardRef, useImperativeHandle,
} from 'react';
import classNames from 'classnames';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import WorkItem from './Item';
import styles from '../../styles/components/work/list.module.scss';

const WorkList = forwardRef(({ works, onIsotopeReady = () => {} }, ref) => {
  const gridRef = useRef(null);
  const [iso, setIso] = useState(null);

  useEffect(() => {
    let isotopeInstance = null;

    if (typeof window !== 'undefined' && gridRef.current) {
      import('isotope-layout').then((IsotopeModule) => {
        const Isotope = IsotopeModule.default;

        isotopeInstance = new Isotope(gridRef.current, {
          itemSelector: '.grid-item',
          layoutMode: 'masonry',
        });

        setIso(isotopeInstance);
        onIsotopeReady(isotopeInstance);
      });
    }

    return () => {
      if (isotopeInstance) isotopeInstance.destroy();
    };
  }, []);

  // useEffect(() => {
  //   if (iso) {
  //     iso.arrange({ filter: `.${CATEGORY.development}` });
  //   }
  // }, [iso]);

  useImperativeHandle(ref, () => ({
    filterItems: (category) => {
      if (iso) {
        iso.arrange({
          filter: category === 'All' ? '*' : `.${category}`,
        });
      }
    },
  }));

  return (
    <div className={classNames(styles.list)}>
      <Row ref={gridRef}>
        {works.map((item) => (
          <Col key={item.id} md={6} lg={4} className={`grid-item ${item.categories.join(' ')}`}>
            <WorkItem {...item} />
          </Col>
        ))}
      </Row>
    </div>
  );
});

export default WorkList;
