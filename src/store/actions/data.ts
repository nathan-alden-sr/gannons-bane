import { ReduxAction } from "../../types/reducers";

export const enum DataActions {
  setContents = "dataActions/setContents"
}

export const setDataContents: ReduxAction<string[]> = (contents) => {
  return {
    payload: contents,
    type: DataActions.setContents
  };
};
