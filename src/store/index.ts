import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { History } from "history";
import { MessageReducer } from "./message/reducer";
import { ApiStatusReducer } from "./apiStatus/reducer";

export const createRootReducer = (history: History) =>
  combineReducers({
    messageState: MessageReducer,
    apiCallsInProgress: ApiStatusReducer,
    router: connectRouter(history),
  });
