import React from 'react';
import classes from './reply-selector.module.scss';

const ReplySelector = ({ options, onSelect }) => {
  return (
    <div className={classes['reply-selector']}>
      {options.map((option) => (
        <div
          className={classes['reply-selector__option']}
          key={option.message}
          onClick={() => onSelect(option)}
        >
          {option.message}
        </div>
      ))}
    </div>
  );
};

export default ReplySelector;
