const FeedbackOptions = ({ options, handleLeaveFeedback }) => {
  return options.map(option => (
    <button onClick={handleLeaveFeedback} key={option} type="button">
      {option}
    </button>
  ));
};
export default FeedbackOptions;
