import { createBaseSlice } from './base';
import { EntityName } from '@Types/base';

const responseSlice = createBaseSlice(EntityName.Response);

export const {
  reducer: responseReducer,
  createEntity: createResponse,
  updateEntity: updateResponse,
  deleteEntity: deleteResponse,
} = responseSlice;
