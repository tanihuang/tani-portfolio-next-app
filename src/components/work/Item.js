import Link from 'next/link';
import classNames from 'classnames';
import Image from 'next/image';
import styles from '../../styles/components/work/item.module.scss';

const redirectIcon = '/images/redirect.png';

const WorkItem = ({
  title,
  subTitle,
  slug,
  url,
  coverImage,
  iso,
}) => {
  const ImageComponent = (
    <Image
      src={coverImage}
      alt={title}
      width={2000}
      height={1400}
      style={{ width: '100%', height: 'auto' }}
      onLoadingComplete={() => {
        if (iso) {
          iso.layout();
        }
      }}
    />
  );
  const RedirectButton = (
    <a href={url} target="_blank" rel="noreferrer" title={`Visit ${title}`} className={styles.button}>
      <Image src={redirectIcon} alt="Redirect Icon" width={24} height={24} />
    </a>
  );

  return (
    slug ? (
      <div className={classNames('item mb-3 cc', styles.item)}>
        <figure>
          <Link href={`/work/${slug}`} legacyBehavior>
            <a title={title} className={classNames(styles.image, 'mb-3')}>
              {ImageComponent}
            </a>
          </Link>
          {RedirectButton}
        </figure>
        <Link href={`/work/${slug}`} legacyBehavior>
          <a title={title}>
            <h3 className={`${styles.title} mb-0`}>
              {title}
            </h3>
          </a>
        </Link>
        <p className={`${styles.subTitle} mt-2`}>{subTitle}</p>
      </div>
    ) : (
      <div className={classNames('item', styles.item)}>
        <figure className={classNames('item', styles.item)}>
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            title={title}
            className={classNames(
              styles.image,
              'mb-3',
            )}
          >
            {ImageComponent}
          </a>
          {RedirectButton}
        </figure>
        <a href={url} target="_blank" rel="noreferrer" title={title}>
          <h3 className={`${styles.title} mb-0`}>
            {title}
          </h3>
        </a>
        <p className={`${styles.subTitle} mt-2`}>{subTitle}</p>
      </div>
    )
  );
};

export default WorkItem;
