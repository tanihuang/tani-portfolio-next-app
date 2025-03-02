// import { useCallback, useEffect } from 'react';
import { useState, useEffect, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Layout from '../../components/layout/Layout';
import WorkNav from '../../components/work/Nav';
import WorkList from '../../components/work/List';
import styles from '../../styles/pages/work.module.scss';
import { WORKS, CATEGORY } from '../../mockData/work';

const Work = () => {
  const [works, setWorks] = useState(WORKS);
  const [activeKey, setActiveKey] = useState(CATEGORY.development);
  const workListRef = useRef(null);
  const [isoReady, setIsoReady] = useState(false);

  useEffect(() => {
    // if (activeKey === 'All') {
    //   setWorks(WORKS);
    //   return;
    // }

    // const filterdWorks = WORKS.filter((item) => item.categories.includes(activeKey));
    // setWorks(filterdWorks);
    workListRef.current.filterItems(activeKey);
  }, [isoReady, activeKey]);

  return (
    <Layout>
      <Container className={styles.work}>
        <h2 className="mb-3">Work</h2>
        <WorkNav
          activeKey={activeKey}
          onSelect={setActiveKey}
        />
        <WorkList
          ref={workListRef}
          works={works}
          onIsotopeReady={() => setIsoReady(true)}
        />
      </Container>
    </Layout>
  );
};

export default Work;
