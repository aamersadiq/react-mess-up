import { Message } from "../../common/types/message";
import { AppThunk } from "../types";
import { MessageActionTypes, MessageActions } from "./types";
import { messageApi } from "../../api/messageApi";
import { beginApiCall, apiCallError } from "../apiStatus/action";

export function fetchMessagesSuccess(payload: Message[]): MessageActionTypes {
  return { type: MessageActions.FETCH_MESSAGES_SUCCESS, payload };
}

export function fetchMessageSuccess(payload: Message): MessageActionTypes {
  return { type: MessageActions.FETCH_MESSAGE_SUCCESS, payload };
}

export function deleteMessageOptimistic(payload: string): MessageActionTypes {
  return { type: MessageActions.DELETE_MESSAGE_OPTIMISTIC, payload };
}

export const fetchMessagesRequest = (): AppThunk => async (dispatch: any) => {
  try {
    dispatch(beginApiCall());
    const asyncResp = await messageApi.getAllMessages();
    dispatch(fetchMessagesSuccess(asyncResp));
  } catch (error) {
    dispatch(apiCallError());
    throw error;
  }
};

export const fetchMessageRequest = (messageId: string): AppThunk => async (
  dispatch: any,
  getState
) => {
  try {
    // try get from state
    let state = getState();
    let message = state.messageState.messages.find(
      ({ id }) => id === messageId
    );
    if (message) {
      dispatch(fetchMessageSuccess(message));
    } else {
      dispatch(beginApiCall());
      const asyncResp = await messageApi.getMessage(messageId);
      dispatch(fetchMessageSuccess(asyncResp));
    }
  } catch (error) {
    dispatch(apiCallError());
    throw error;
  }
};

export const deleteMessagesRequest = (messageId: string): AppThunk => async (
  dispatch: any
) => {
  try {
    dispatch(deleteMessageOptimistic(messageId));
    await messageApi.deleteMessage(messageId);
  } catch (error) {
    throw error;
  }
};
