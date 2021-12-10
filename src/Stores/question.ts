import { EntityName } from '@Types/base';
import { createBaseSlice } from './base';

const questionSlice = createBaseSlice(EntityName.Question);

export const {
  reducer: questionReducer,

  loadEntitiesAsync: loadQuestionAsync,
} = questionSlice;
