import { Response, Answer } from '@Types';

export const isAnswerSelected =
  (response: Response) =>
  (content: string): boolean => {
    const foundResponse = response.data.find((r: Answer) => r.text === content);
    return foundResponse !== undefined;
  };
