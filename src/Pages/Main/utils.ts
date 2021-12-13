import { Question, Response } from '@Types';
import { isEqual } from 'lodash-es';

export const isAnswerSelected =
  (response: Response | undefined) =>
  (answerId: number): boolean => {
    if (!response) return false;
    return response.answerIds.includes(answerId);
  };

export const setResponses = (responseAnswerIds: number[], selectedId: number) =>
  responseAnswerIds.includes(selectedId)
    ? responseAnswerIds.filter((id) => id !== selectedId)
    : responseAnswerIds.concat(selectedId);

/** calculate total score */
export const calculateScore = (
  responseList: Response[],
  questionList: Question[],
) => {
  const totalQuestion = questionList.length;
  const correctResponses = [];
  responseList.forEach((response) => {
    const question = questionList.find(
      (question) => question.id === response.id,
    );
    if (!question) return;
    const correctAnswers = question.answers
      .filter((answer) => answer.isCorrect)
      .map((answer) => answer.id);
    if (isEqual(correctAnswers, response.answerIds)) {
      correctResponses.push(response);
    }
  });
  const score = (correctResponses.length / totalQuestion) * 100;
  return score;
};
