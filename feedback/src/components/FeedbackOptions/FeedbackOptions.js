import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledDiv = styled.div``;

const StyledButton = styled.button`
  color: teal;
  font-size: 30px;
  margin-right: 10px;
`;

const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <StyledDiv onClick={onLeaveFeedback}>
            {options.map((buttonName, index) => <StyledButton key={index} name= {buttonName} > {buttonName} </StyledButton>)}
      </StyledDiv>
    );
};

export default FeedbackOptions;

// ////////////////////////////////////////////////////////////////////
FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};