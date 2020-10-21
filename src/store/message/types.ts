import { Message } from "../../common/types/message";

export enum MessageActions {
  FETCH_MESSAGES_REQUEST = "@@Message/FETCH_MESSAGES_REQUEST",
  FETCH_MESSAGES_SUCCESS = "@@Message/FETCH_MESSAGES_SUCCESS",
  FETCH_MESSAGE_REQUEST = "@@Message/FETCH_MESSAGE_REQUEST",
  FETCH_MESSAGE_SUCCESS = "@@Message/FETCH_MESSAGE_SUCCESS",
  DELETE_MESSAGE_OPTIMISTIC = "@@Message/DELETE_MESSAGE_OPTIMISTIC",
}

export interface MessageState {
  readonly messages: Message[];
  readonly selectedMessage: Message | {};
  readonly errors?: string;
}

export interface FetchMessagesSuccess {
  type: MessageActions.FETCH_MESSAGES_SUCCESS;
  payload: Message[];
}

export interface FetchMessageSuccess {
  type: MessageActions.FETCH_MESSAGE_SUCCESS;
  payload: Message;
}

export interface DeleteMessageOptimistic {
  type: MessageActions.DELETE_MESSAGE_OPTIMISTIC;
  payload: string;
}

export type MessageActionTypes =
  | FetchMessagesSuccess
  | FetchMessageSuccess
  | DeleteMessageOptimistic;
