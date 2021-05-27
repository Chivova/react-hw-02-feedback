const FeedBack = ({ options }) => {
  return options.map(option => (
    <button key={option} type="button">
      {option}
    </button>
  ));
};
export default FeedBack;
