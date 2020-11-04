import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledP = styled.p`
  font-weight: 500;
  margin: 5px 0;
`;


const StyledSpan = styled.span``;

const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <li>
        <StyledP>
          Good: <StyledSpan>{good}</StyledSpan>
        </StyledP>
      </li>
      <li>
        <StyledP>
          Neutral: <StyledSpan>{neutral}</StyledSpan>
        </StyledP>
      </li>
      <li>
        <StyledP>
          Bad: <StyledSpan>{bad}</StyledSpan>
        </StyledP>
      </li>
      <li>
        <StyledP>
          Total: <StyledSpan>{total}</StyledSpan>
        </StyledP>
      </li>
      <li>
        <StyledP>
          Positive feedback:{' '}
          <StyledSpan>
            {positivePercentage ? positivePercentage.toFixed(2) : 0}%
          </StyledSpan>
        </StyledP>
      </li>
    </>
  );
};

export default Statistics;

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
  };
