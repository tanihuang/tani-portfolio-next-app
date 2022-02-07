// import { useCallback, useEffect } from 'react';
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Layout from '../../components/layout/Layout';
import WorkNav from '../../components/work/Nav';
import WorkList from '../../components/work/List';
import styles from '../../styles/pages/work.module.scss';
import { WORKS } from '../../mockData/work';

const Work = () => {
  const [works, setWorks] = useState([]);
  const [activeKey, setActiveKey] = useState('All');

  // Watch the change of activeKey
  useEffect(() => {
    if (activeKey === 'All') {
      setWorks(WORKS);
      return;
    }

    const filterdWorks = WORKS.filter((item) => item.categories.includes(activeKey));
    setWorks(filterdWorks);
  }, [activeKey]);

  return (
    <Layout className={styles.work}>
      <Container>
        <h2 className="mb-3">Work</h2>
        <WorkNav
          activeKey={activeKey}
          onSelect={setActiveKey}
        />
        <WorkList
          works={works}
        />
      </Container>
    </Layout>
  );
};

export default Work;
