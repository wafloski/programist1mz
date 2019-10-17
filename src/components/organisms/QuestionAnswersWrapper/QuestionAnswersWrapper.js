import React from 'react';

import Question from 'components/atoms/Question/Question';
import AnswersList from 'components/molecules/AnswersList/AnswersList';

import questionsList from 'data/questionsList/questionsList';

const QuestionAnswersWrapper = () => (
  <>
    {
      questionsList.map((item) => (
        <>
          <Question content={item.question} />
          <AnswersList content={item.correct_answer} />
        </>
      ))
    }
  </>
);

export default QuestionAnswersWrapper;
