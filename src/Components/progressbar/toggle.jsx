﻿import React from 'react';
import classnames from 'classnames/bind';
import styles from './Bar.scss';

const cx = classnames.bind(styles);

const Toggle = (props) => {
  const {
    type,
    onMouseDown,
    right,
    left,
    children,
  } = props;

  const handleMouseDown = () => {
    onMouseDown(type);
  };

  const toggleLeftAndRightStyles = {
    left: `${left}%`,
    right: `${right}%`,
  };

  // console.log(props);

  return (
    <div
      type={type}
      className={cx('toggle', {
        [`toggle--type-${type}`]: true,
      })}
      style={toggleLeftAndRightStyles}
      onMouseDown={handleMouseDown}
    >
      {children}
    </div>
  );
};

export default Toggle;
