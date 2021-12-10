import { useQuesions, useResponse } from '@Hooks';
import { Response } from '@Types';
import { Question } from '@Types/question';
import React from 'react';
import { loadQuestionAsync, useAppDispatch } from '@Stores';

type questionDataType = {
  currentQuestion: Question;
  currentResponse: Response;
};

const getAnswer = (
  answers: (string | null)[],
  correctAnswers: (string | null)[],
) =>
  answers.map((answer, index) => ({
    text: answer,
    isCorrect: correctAnswers[index] === 'true' ? true : false,
  }));
export const useQuestionData = (currentIndex: number): questionDataType => {
  const dispatch = useAppDispatch();
  const questionData = useQuesions();
  React.useEffect(() => {
    dispatch(loadQuestionAsync());
  }, [dispatch]);
  const responses = useResponse();
  const questionList: Question[] = questionData.map((q) => ({
    id: q.id,
    text: q.question,
    answers: getAnswer(
      Object.values(q.answers),
      Object.values(q.correct_answers),
    ),
  }));
  const currentQuestion = questionList[currentIndex];
  const currentResponse = responses[currentIndex];
  return { currentQuestion, currentResponse };
};
