/* eslint-disable default-param-last */
/* eslint-disable @typescript-eslint/default-param-last */

import { ReducerData, ReduxActionData } from "../../types/reducers";
import { DataActions } from "../actions/data";

const initialState: ReducerData = {
  contents: []
};

const dataState: (state: ReducerData, action: ReduxActionData<any>) => ReducerData = (
  state: ReducerData = initialState,
  action: ReduxActionData<any>
) => {
  switch (action.type) {
    case DataActions.setContents:
      return {
        ...state,
        contents: action.payload
      };
    default:
      return state;
  }
};

export default dataState;
