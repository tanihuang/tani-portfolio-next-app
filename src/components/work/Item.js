import Link from 'next/link';
import classNames from 'classnames';
import Image from 'next/image';
import styles from '../../styles/components/work/item.module.scss';

const redirect = '/images/redirect.png';

const WorkItem = ({
  name,
  slug,
  url,
  images,
  coverImage,
}) => {
  const ImageComponent = (
    <Image src={coverImage} alt={name} layout="responsive" width={2000} height={1400} />
  );

  return (
    slug ? (
      <div className={classNames('item', styles.item)}>
        <figure>
          {images.length ? (
            <Link href={`/work/${slug}`} legacyBehavior>
              <a title={name} className={classNames(styles.image, 'mb-3')}>
                {ImageComponent}
              </a>
            </Link>
          ) : (
            <a href={url} target="_blank" rel="noreferrer" title={name} className={classNames(styles.image, 'mb-3')}>
              {ImageComponent}
            </a>
          )}
          <a href={url} target="_blank" rel="noreferrer" title={name} className={classNames(styles.button)}>
            <Image
              src={redirect}
              alt={name}
              width={24}
              height={24}
              className="img-fluid"
            />
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
    ) : (
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
};

export default WorkItem;
