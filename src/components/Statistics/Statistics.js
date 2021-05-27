const Statistics = ({ options }) => {
  return (
    <ul>
      {options.map(option => (
        <li>{option}</li>
      ))}
    </ul>
  );
};

export default Statistics;
