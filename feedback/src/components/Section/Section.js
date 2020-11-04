import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledMainTitle = styled.h1``;
const StyledSecondTitle = styled.h2`
  font-size: 30px;
`;

const Section = ({ title, children }) => {
  return (
    <>
      <StyledSecondTitle>{title}</StyledSecondTitle>
      {children}
    </>
  );
};

export default Section;

// ////////////////////////////////////////////////////////////////////
Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};
