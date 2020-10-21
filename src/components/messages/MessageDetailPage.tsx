import React, { Component } from "react";
import { connect } from "react-redux";
import { withSnackbar } from "notistack";
import { fetchMessageRequest } from "../../store/message/action";
import { ApplicationState } from "../../store/types";
import { ManageMessageProps } from "./types";
import MessageForm from "./MessageForm";

class ManageMessagePage extends Component<ManageMessageProps, {}> {
  componentDidMount() {
    const {
      match: { params },
    } = this.props;
    const { fetchMessageRequest } = this.props;
    fetchMessageRequest(params.messageId);
  }

  handleSendMessage = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {};

  render() {
    return (
      <MessageForm
        message={this.props.message}
        onSendClick={this.handleSendMessage}
      />
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
)(withSnackbar(ManageMessagePage as any));
