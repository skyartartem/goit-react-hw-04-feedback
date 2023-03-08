import { useState } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';
import css from './App.module.css';

export const App =()=> {
  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

// useEffect(()=>{},[])
  // const updateState = nameFeedback => { }
  const updateGood = () => {
    setGood(prevSt=>prevSt+1)
  }
  const updateNeutral = () => {
     setNeutral(prevSt => prevSt + 1);
  };
  const updateBad = () => {
    setBad(prevSt => prevSt + 1);
  };
  // const updateState = nameFeedback => {
  //   this.setState(oldData => {
  //     let obj = { ...oldData };
  //     obj[nameFeedback] = oldData[nameFeedback] + 1;
  //     return obj;
  //   });
  // };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.floor(
      (good /
        (good + neutral + bad)) *
        100 || 0
    );
  };

  
    return (
      <div className={css.container}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys({ good, neutral, bad })}
            onLeaveFeedback={[updateGood, updateNeutral, updateBad]}
          />
        </Section>
        <Section title="Statistics">
          {countTotalFeedback() === 0 ? (
            <Notification message="There is no feedback yet..." />
          ) : (
            <Statistics
              options={Object.keys({ good, neutral, bad })}
              statistic={{ good, neutral, bad }}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage}
            />
          )}
        </Section>
      </div>
    );
  
}
