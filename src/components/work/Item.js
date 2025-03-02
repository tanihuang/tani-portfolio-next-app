import Link from 'next/link';
import classNames from 'classnames';
import Image from 'next/image';
import styles from '../../styles/components/work/item.module.scss';

const redirect = '/images/redirect.png';

const WorkItem = ({
  title,
  subTitle,
  slug,
  url,
  coverImage,
}) => {
  const ImageComponent = (
    <Image src={coverImage} alt={title} width={2000} height={1400} style={{ width: '100%', height: 'auto' }} />
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
          <a href={url} target="_blank" rel="noreferrer" title={title} className={classNames(styles.button)}>
            <Image
              src={redirect}
              alt={title}
              width={24}
              height={24}
              className="img-fluid"
            />
          </a>
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
            <img src={coverImage} className="img-fluid" alt={title} />
          </a>
          <a href={url} target="_blank" rel="noreferrer" title={title} className={classNames(styles.button)}>
            <img src={redirect} className="img-fluid" alt={title} />
          </a>
        </figure>
        <a href={url} target="_blank" rel="noreferrer" title={title}>
          <h3 className={styles.title}>
            {title}
          </h3>
        </a>
        <p className={`${styles.subTitle} mt-2`}>{subTitle}</p>
      </div>
    )
  );
};

export default WorkItem;
