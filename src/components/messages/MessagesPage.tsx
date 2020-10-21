import React, { Component } from "react";
import { connect } from "react-redux";
import { withSnackbar } from "notistack";
import { bindActionCreators } from "redux";
import * as messageActions from "../../store/message/action";
import { ApplicationState } from "../../store/types";
import { MessagesPageProps } from "./types";
import MessageList from "./MessageList";
import { MessageReply, Message } from "../../common/types/message";
import AlertDialog from "../common/AlertDialog";

class MessagesPage extends Component<MessagesPageProps, {}> {
  state = {
    dialogOpen: false,
    message: "",
    deleteMessageId: 0,
  };

  componentDidMount() {
    const { messages, actions } = this.props;
    if (messages && messages.length === 0) {
      actions.fetchMessagesRequest();
    }
  }

  handleDeleteMessage = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    data: Message | Message[]
  ) => {
    const msg = `Do you want to delete ${(data as Message).text
      .split(" ")
      .slice(0, 2)
      .join(" ")}...`;
    this.setState({
      dialogOpen: true,
      message: msg,
      deleteMessageId: (data as Message).id,
    });
  };

  handleMessageDetail = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    data: Message | Message[]
  ) => {
    this.props.history.push(`/message/${(data as Message).id}`);
  };

  handleDialogOkClick = async () => {
    this.setState({
      dialogOpen: false,
    });
    this.props.enqueueSnackbar("Successfully deleted message.", {
      variant: "success",
    });
    try {
      await this.props.actions.deleteMessagesRequest(
        this.state.deleteMessageId
      );
    } catch (error) {
      this.props.enqueueSnackbar("Delete failed. " + error.message, {
        variant: "error",
        persist: true,
      });
    } finally {
      this.setState({
        deleteMessageId: 0,
      });
    }
  };

  handleDialogCancelClick = () => {
    this.setState({
      dialogOpen: false,
    });
  };
  render() {
    return (
      <>
        <MessageList
          messages={this.props.messages}
          onDeleteClick={this.handleDeleteMessage}
          onItemClick={this.handleMessageDetail}
        />
        <AlertDialog
          open={this.state.dialogOpen}
          message={this.state.message}
          doOkClick={this.handleDialogOkClick}
          doCancelClick={this.handleDialogCancelClick}
        />
      </>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  messages:
    state.messageState.messages.length === 0
      ? []
      : state.messageState.messages.map((message) => {
          return {
            ...message,
            unReadReplyCount:
              message.replies &&
              message.replies.filter((reply: MessageReply) => !reply.isRead)
                .length,
          };
        }),
});

const mapDispatchToProps = (dispatch: any) => ({
  actions: {
    fetchMessagesRequest: bindActionCreators(
      messageActions.fetchMessagesRequest,
      dispatch
    ),
    deleteMessagesRequest: bindActionCreators(
      messageActions.deleteMessagesRequest,
      dispatch
    ),
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withSnackbar(MessagesPage as any));
