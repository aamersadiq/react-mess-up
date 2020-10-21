import { User } from "./user";

export interface Message {
  id: string;
  text: string;
  type: MessageType;
  isRead: boolean;
  createdDate: Date;
  createdBy: User;
  replies: MessageReply[];
}

export interface MessageReply {
  id: string;
  messageId: string;
  text: string;
  isRead: boolean;
  createdDate: Date;
  createdBy: User;
}

export interface MessageType {
  id: string;
  description: string;
}
