import { useQuesions, useResponse } from '@Hooks';
import { Question, Response } from '@Types';
import React from 'react';
import {
  loadQuestionAsync,
  useAppDispatch,
  updateResponse,
  createResponse,
} from '@Stores';
import { MainPresentation } from './MainPresentation';
import { setResponses } from './utils';

export const Main = () => {
  const dispatch = useAppDispatch();
  const questionData = useQuesions();
  const responseList = useResponse();
  React.useEffect(() => {
    dispatch(loadQuestionAsync());
  }, [dispatch]);

  const questionList: Question[] = questionData.map((q) => ({
    id: q.id,
    text: q.question,
    answers: getAnswer(
      Object.values(q.answers),
      Object.values(q.correct_answers),
    ),
  }));

  const selectAnswer = (questionId: number) => (answerId: number) => {
    const currentResponse = responseList.find(
      (response) => response.id === questionId,
    );
    if (currentResponse) {
      const response: Response = {
        id: questionId,
        answerIds: setResponses(currentResponse.answerIds, answerId),
      };
      dispatch(updateResponse(response));
    } else {
      const response: Response = {
        id: questionId,
        answerIds: [answerId],
      };
      dispatch(createResponse(response));
    }
  };
  return <MainPresentation {...{ questionList, responseList, selectAnswer }} />;
};

/** get Answer Data */
function getAnswer(
  answers: (string | null)[],
  correctAnswers: (string | null)[],
) {
  return answers
    .filter((answer) => !!answer)
    .map((answer, index) => ({
      id: index,
      text: answer,
      isCorrect: correctAnswers[index] === 'true',
    }));
}
