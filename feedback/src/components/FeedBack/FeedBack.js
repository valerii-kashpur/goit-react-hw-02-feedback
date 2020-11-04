import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Statistics from '../Statistics/Statistics';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Section from '../Section/Section';
import Notification from '../Notification/Notification';

// //////////////////////////////////////////////////////////////

const StyledSection = styled.section`
  padding-left: 20px;
  font-size: 30px;
`;

const StyledMainTitle = styled.h1``;

const StyledButton = styled.button`
  color: teal;
  font-size: 30px;
  margin-right: 10px;
`;

const StyledSecondTitle = styled.h2`
  font-size: 30px;
`;

const StyledP = styled.p`
  font-weight: 500;
  margin: 5px 0;
`;

const StyleList = styled.ul`
  list-style: none;
`;

const StyledSpan = styled.span``;

const StyledDiv = styled.div``;

// ///////////////////////////////////////////////////////////////////////////////

const FeedBack = ({
  good,
  neutral,
  bad,
  countTotal,
  countPositive,
  changeValue,
}) => {
  const totalCount = countTotal();
  const positiveCount = countPositive();

  return (
    <StyledSection>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={changeValue}
        ></FeedbackOptions>
      </Section>
      <Section title={'Statistics'}>
        <StyleList>
          {totalCount ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalCount}
              positivePercentage={positiveCount}
            ></Statistics>
          ) : (
            <Notification message="No feedback given"></Notification>
          )}
        </StyleList>
      </Section>
    </StyledSection>
  );
};

export default FeedBack;

// ////////////////////////////////////////////////////////////////////
FeedBack.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  changeValue: PropTypes.func.isRequired,
  countTotal: PropTypes.func.isRequired,
  countPositive: PropTypes.func.isRequired,
};
