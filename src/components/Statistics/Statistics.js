const Statistics = ({
  good,
  neutral,
  bad,
  totalFeedback,
  positiveFeedbackPercentage,
}) => {
  return (
    <div>
      <ul>
        <li>Good:{good}</li>
        <li>Neutral:{neutral}</li>
        <li>Bad:{bad}</li>
      </ul>
      <p>Total: {totalFeedback()}</p>
      {/* <p>Positive feedback:{positiveFeedbackPercentage()}%</p> */}
    </div>
  );
};

export default Statistics;
