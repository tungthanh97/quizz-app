export type BaseEntity = {
  id: number;
};

export enum EntityName {
  User = 'users',
  Question = 'questions',
  Response = 'responses',
}

export enum ScreenName {}

export type Dictionary = {
  [key: string]: any;
};

export type ErrorMessage = {
  status?: number;
  message: string;
};

export type EntityPredicate<T extends BaseEntity> = (item: T) => boolean;
