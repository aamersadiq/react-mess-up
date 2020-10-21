import { MessageState } from "./message/types";
import { RouterState } from "connected-react-router";
import { Action } from "redux";
import { ThunkAction } from "redux-thunk";

export interface ApplicationState {
  messageState: MessageState;
  router: RouterState;
  apiCallsInProgress: number;
}

export type AppThunk = ThunkAction<
  void,
  ApplicationState,
  unknown,
  Action<string>
>;
