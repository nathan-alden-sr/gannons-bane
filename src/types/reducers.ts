export interface ReducerData {
  contents: string[];
}

export interface ReduxActionData<T> {
  type: any;
  payload?: T;
}

export type ReduxAction<T> = (data: T) => ReduxActionData<T>;
