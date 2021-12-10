import { BaseEntity } from '@Types/base';

export type Answer = {
  text: string | null;
  isCorrect: boolean;
};

export type Response = BaseEntity & {
  qId: number;
  data: Answer[];
};
