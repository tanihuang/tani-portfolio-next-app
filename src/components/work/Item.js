import Link from 'next/link';
import classNames from 'classnames';
import styles from '../../styles/components/work/item.module.scss';

const redirect = '/images/redirect.png';

const WorkItem = ({
  name,
  slug,
  url,
  coverImage,
}) => (
  slug
    ? (
      <div className={classNames('item', styles.item)}>
        <figure>
          <Link href={`/work/${slug}`} legacyBehavior>
            <a
              title={name}
              className={classNames(
                styles.image,
                'mb-3',
              )}
            >
              <img src={coverImage} className="img-fluid" alt={name} />
            </a>
          </Link>
          <a href={url} target="_blank" rel="noreferrer" title={name} className={classNames(styles.button)}>
            <img src={redirect} className="img-fluid" alt={name} />
          </a>
        </figure>
        <Link href={`/work/${slug}`} legacyBehavior>
          <a title={name}>
            <h3 className={styles.name}>
              {name}
            </h3>
          </a>
        </Link>
      </div>
    )
    : (
      <div className={classNames('item', styles.item)}>
        <figure className={classNames('item', styles.item)}>
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            title={name}
            className={classNames(
              styles.image,
              'mb-3',
            )}
          >
            <img src={coverImage} className="img-fluid" alt={name} />
          </a>
          <a href={url} target="_blank" rel="noreferrer" title={name} className={classNames(styles.button)}>
            <img src={redirect} className="img-fluid" alt={name} />
          </a>
        </figure>
        <a href={url} target="_blank" rel="noreferrer" title={name}>
          <h3 className={styles.name}>
            {name}
          </h3>
        </a>
      </div>
    )
);

export default WorkItem;
