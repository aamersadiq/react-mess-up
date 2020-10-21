import { Api } from "./api";
import { AxiosResponse } from "axios";
import { Message } from "../common/types/message";
import { apiConfig } from "./api.config";

export class MessageApi extends Api {
  public async getAllMessages(): Promise<Message[]> {
    try {
      const res: AxiosResponse<Message[]> = await this.get<
        Message[],
        AxiosResponse<Message[]>
      >("messages");

      return this.success(res);
    } catch (error) {
      throw error;
    }
  }

  public async getMessage(messageId: string): Promise<Message> {
    try {
      const res: AxiosResponse<Message> = await this.get<
        Message,
        AxiosResponse<Message>
      >(`messages/${messageId}`);

      return this.success(res);
    } catch (error) {
      throw error;
    }
  }

  public async deleteMessage(messageId: string): Promise<void> {
    try {
      const res: AxiosResponse<void> = await this.delete<
        void,
        AxiosResponse<void>
      >(`messages/${messageId}`);

      return this.success(res);
    } catch (error) {
      throw error;
    }
  }
}

export const messageApi = new MessageApi(apiConfig);
