import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
    <ul className={css.statistics}>
      <li className={css.statistic__item}>Good: {good}</li>
      <li className={css.statistic__item}>Neutral: {neutral}</li>
      <li className={css.statistic__item}>Bad: {bad}</li>
      <li className={css.statistic__item}>Total: {total}</li>
      <li className={css.statistic__item}>Positive Feedback: {positivePercentage} %</li>
    </ul>
  );
  
  Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
  };
  
  export default Statistics;