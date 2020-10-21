import React, { Component } from "react";
import { connect } from "react-redux";
import { withSnackbar } from "notistack";
import { fetchMessageRequest } from "../../store/message/action";
import { ApplicationState } from "../../store/types";
import { CreateMessagePageProps } from "./types";
import MessageForm from "./MessageForm";

class CreateMessagePage extends Component<CreateMessagePageProps, {}> {
  handleCreateMessage = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {};

  render() {
    return (
      <MessageForm message={{}} onCreateClick={this.handleCreateMessage} />
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  message: state.messageState.selectedMessage,
});

const mapDispatchToProps = {
  fetchMessageRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withSnackbar(CreateMessagePage as any));
