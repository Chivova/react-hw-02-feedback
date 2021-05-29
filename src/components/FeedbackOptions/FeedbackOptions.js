import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option => (
    <button
      className={s.btn}
      onClick={() => onLeaveFeedback(option)}
      key={option}
      type="button"
    >
      {option}
    </button>
  ));
};
export default FeedbackOptions;

FeedbackOptions.propTypes = {
  key: PropTypes.arrayOf(PropTypes.string.isRequired),
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
