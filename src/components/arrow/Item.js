import { forwardRef } from 'react';
import classNames from 'classnames';
import styles from '../../styles/components/arrow/item.module.scss';
import arrowImage from '../../../public/images/icon_right_arrow.svg';

const ArrowItem = forwardRef(({
  className,
  name,
  onClick,
  href,
}, ref) => (
  <a
    className={classNames(
      'arrow-button',
      styles.item,
      className,
    )}
    href={href}
    onClick={onClick}
    title={name}
    ref={ref}
  >
    <img src={arrowImage} className="img-fluid" alt={name} />
  </a>
));

export default ArrowItem;
