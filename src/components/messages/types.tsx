import { Message } from "../../common/types/message";

export type MessagesPageProps = {
  messages: Message[];
  actions: any;
  enqueueSnackbar: any;
  history: any;
};

export type MessageListProps = {
  messages: Message[];
  onDeleteClick: any;
  onItemClick: any;
};

export type MessageFormProps = {
  message: Message | {};
  onSendClick?: any;
  onCreateClick?: any;
};

export type CreateMessagePageProps = {};

export type ManageMessageProps = {
  message: Message;
  match: any;
  fetchMessageRequest: any;
};
