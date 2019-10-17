import React from 'react';

import Answer from 'components/atoms/Answer/Answer';

const AnswersList = ({ content }) => (
  <>
    <Answer content={content} />
    <Answer content="Belgia" />
    <Answer content="Czechy" />
    <Answer content="Dania" />
  </>
);

export default AnswersList;
