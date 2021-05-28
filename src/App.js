import { Component, Fragment } from 'react';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Section from './components/Section/Section';
import Statistics from './components/Statistics/Statistics';
import Notification from './components/Notification/Notification';
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleLeaveFeedback = key => {
    this.setState(prevState => ({ [key]: prevState[key] + 1 }));
  };

  countTotalFeedback = () => {
    // const { good, neutral, bad } = this.state;
    // return good + neutral + bad;

    return Object.values(this.state).reduce((total, value) => total + value, 0);
  };

  // countPositiveFeedbackPercentage = () => {

  // }

  render() {
    const options = Object.keys(this.state);
    const { good, neutral, bad } = this.state;
    return (
      <Fragment>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleLeaveFeedback}
          />
        </Section>
        {this.countTotalFeedback() ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              totalFeedback={this.countTotalFeedback}
              positiveFeedbackPercentage={this.countPositiveFeedbackPercentage}
            />
          </Section>
        ) : (
          <Notification message="No feedback given" />
        )}
      </Fragment>
    );
  }
}
export default App;
