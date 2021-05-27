import { Component, Fragment } from 'react';
import Feedback from './components/Feedback/Feedback';
import Statistics from './components/Statistics/Statistics';
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGiveFeedback = e => {
    console.dir(e.currentTarget);
  };
  render() {
    const options = Object.keys(this.state);
    const { good, neutral, bad } = this.state;
    return (
      <Fragment>
        <h1>Please leave feedback</h1>

        <Feedback options={options} />
        <Statistics options={options} good={good} neutral={neutral} bad={bad} />
      </Fragment>
    );
  }
}
export default App;
