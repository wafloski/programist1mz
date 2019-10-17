import React from 'react';
import PropTypes from 'prop-types';

const Question = ({ content }) => (
  <>
    <p>{content}</p>
  </>
);

Question.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Question;
