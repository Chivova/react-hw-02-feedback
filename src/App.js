import { Component, Fragment } from 'react';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleLeaveFeedback = e => {
    console.log(this.state);
  };
  render() {
    const options = Object.keys(this.state);
    const { good, neutral, bad } = this.state;
    return (
      <Fragment>
        <h1>Please leave feedback</h1>

        <FeedbackOptions
          options={options}
          onLeaveFeedback={this.handleLeaveFeedback}
        />
        <Statistics options={options} good={good} neutral={neutral} bad={bad} />
      </Fragment>
    );
  }
}
export default App;
