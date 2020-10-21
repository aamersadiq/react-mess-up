import { Reducer } from "redux";
import { ApiStatusActions } from "./types";

const initialState: number = 0;

function actionTypeEndsInSuccess(type: string) {
  return type.substring(type.length - 8) === "_SUCCESS";
}

const reducer: Reducer<number> = (state = initialState, action) => {
  if (action.type === ApiStatusActions.BEGIN_API_CALL) {
    return state + 1;
  } else if (
    action.type === ApiStatusActions.API_CALL_ERRPR ||
    actionTypeEndsInSuccess(action.type)
  ) {
    return state - 1;
  }
  return state;
};

export { reducer as ApiStatusReducer };
