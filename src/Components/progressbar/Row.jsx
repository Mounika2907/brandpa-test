﻿import React from 'react';
import classnames from 'classnames/bind';
import styles from './Bar.scss';

const cx = classnames.bind(styles);

const Row = (props) => {
  const {
    children,
    direction,
    position,
  } = props;

  return (
    <div className={cx('grid', {
      [`grid--${direction}`]: direction,
      [`grid--position-${position}`]: position,
    })}
    >
      {children}
    </div>
  );
};

Row.defaultProps = {
  direction: 'column',
};

export default Row;
