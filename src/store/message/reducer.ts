import { Reducer } from "redux";
import { MessageActions, MessageState } from "./types";

export const initialState: MessageState = {
  messages: [],
  selectedMessage: {},
  errors: undefined,
};

const reducer: Reducer<MessageState> = (state = initialState, action) => {
  switch (action.type) {
    case MessageActions.FETCH_MESSAGES_REQUEST: {
      return { ...state };
    }
    case MessageActions.FETCH_MESSAGES_SUCCESS: {
      return { ...state, messages: action.payload };
    }
    case MessageActions.FETCH_MESSAGE_SUCCESS: {
      return { ...state, selectedMessage: action.payload };
    }
    case MessageActions.DELETE_MESSAGE_OPTIMISTIC: {
      return {
        ...state,
        messages: state.messages.filter(
          (message) => message.id !== action.payload
        ),
      };
    }
    default: {
      return state;
    }
  }
};

export { reducer as MessageReducer };
