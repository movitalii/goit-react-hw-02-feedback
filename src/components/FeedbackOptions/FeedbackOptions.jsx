import React from 'react';
import propTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.options}>
    {options.map((option, index) => (
      <button
        key={index}
        type="button"
        className={css.option__button}
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </button>
    ))}
  </div>
  )  
};

FeedbackOptions.propTypes = {   
  options: propTypes.array,
  onLeaveFeedback: propTypes.func,
  };

  export default FeedbackOptions;