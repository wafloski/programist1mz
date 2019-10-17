import React from 'react';
import PropTypes from 'prop-types';

const Answer = ({ content }) => (
  <>
    <p>{content}</p>
  </>
);

Answer.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Answer;
