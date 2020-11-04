import React, { Component } from 'react';
import FeedBack from './components/FeedBack/FeedBack';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

changeValue = (e) => {
  const key = e.target.name;
  this.setState(PrevState => ({
    [key]:PrevState[key]+1
  }))
}

countTotalFeedback = () => {
  const val = Object.values(this.state).reduce((acc, value) => acc + value, 0);
  return val
}


countPositiveFeedbackPercentage = () => {
  const positive = (this.state.good/(this.state.neutral+this.state.bad+this.state.good))*100;
  return  Math.abs(positive)
}


  

  render() {
    return (
    <>
      <FeedBack good={this.state.good} 
      neutral={this.state.neutral} 
      bad={this.state.bad} 
      changeValue={this.changeValue} 
      countTotal={this.countTotalFeedback} 
      countPositive={this.countPositiveFeedbackPercentage}/>
    </>
    );

  }
};

export default App;