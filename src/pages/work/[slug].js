import { useRouter } from 'next/router';
import classNames from 'classnames';
import Container from 'react-bootstrap/Container';
import { WORKS } from '../../mockData/work';
import Layout from '../../components/layout/Layout';
import styles from '../../styles/components/work/detail.module.scss';
import ArrowGroup from '../../components/arrow/Group';

const WorkDetail = () => {
  const { query } = useRouter();
  const { slug } = query;
  const detail = WORKS.find((item) => item.slug === slug);
  const detailIndex = WORKS.findIndex((item) => item.slug === slug);
  const previousSlug = detailIndex > 0 ? WORKS[detailIndex - 1].slug : null;
  const nextSlug = detailIndex < WORKS.length - 1 ? WORKS[detailIndex + 1].slug : null;

  if (!detail) {
    return null;
  }

  return (
    <Layout>
      <Container className={classNames(styles.detail)}>
        <h2 className={classNames(
          'mb-2',
        )}
        >
          {detail.title}
        </h2>
        {
          detail.images?.map((item, index) => (
            <a
              key={index}
              className={classNames(
                styles.image,
                'mb-3',
              )}
              href={detail.url}
              target="_blank"
              rel="noreferrer"
              title={detail.name}
            >
              <img src={item} className="img-fluid" alt="" />
            </a>
          ))
        }

        <p className="my-4" dangerouslySetInnerHTML={{ __html: detail.description }} />

        <ul>
          {
            detail.credit.map((item, index) => (
              <li key={index}>
                <p>
                  <span className={classNames(
                    'font-weight-bold',
                    'mr-2',
                  )}
                  >
                    {item.name}
                  </span>
                  {/* eslint-disable react/no-danger */}
                  <span dangerouslySetInnerHTML={{ __html: item.description }} />
                  {/* eslint-disable react/no-danger */}
                </p>
              </li>
            ))
          }
          {detail.url && (
            <li>
              <p>
                <span className={classNames(
                  'font-weight-bold',
                  'mr-2',
                )}
                >
                  Website
                </span>
                <a href={detail.url} target="_blank" rel="noreferrer" title={detail.name}>
                  {detail.url}
                </a>
              </p>
            </li>
          )}
        </ul>

        <ArrowGroup
          previousSlug={previousSlug}
          nextSlug={nextSlug}
        />

      </Container>
    </Layout>
  );
};

export async function getStaticPaths() {
  const paths = WORKS.map((item) => ({
    params: { slug: item.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default WorkDetail;
