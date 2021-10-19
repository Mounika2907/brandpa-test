﻿import React from 'react';
import classnames from 'classnames/bind';
import styles from './bar.scss';

const cx = classnames.bind(styles);

const Column = (props) => {
  const {
    children,
    grow,
    shrink,
    flex,
    align,
  } = props;

  return (
    <div
      className={cx('grid-item', {
        'grid-item--grow': grow,
        'grid-item--shrink': shrink,
        'grid-item--align-self': align,
        [`grid-item--flex-${flex}`]: flex,
      })}
    >
      {children}
    </div>
  );
};

export default Column;
