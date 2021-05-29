import { Fragment } from 'react';

import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({
  good,
  neutral,
  bad,
  totalFeedback,
  positiveFeedbackPerce,
}) => {
  return (
    <Fragment>
      <ul className={s.statisticsList}>
        <li className={s.statisticsItem}>Good: {good}</li>
        <li className={s.statisticsItem}>Neutral: {neutral}</li>
        <li className={s.statisticsItem}>Bad: {bad}</li>
      </ul>
      <p className={s.totalFeedbackText}>Total: {totalFeedback}</p>
      <p className={s.perFeedbackText}>
        Positive feedback: {positiveFeedbackPerce}%
      </p>
    </Fragment>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  totalFeedback: PropTypes.number.isRequired,
  positiveFeedbackPerce: PropTypes.number.isRequired,
};
