import React, { Component } from "react";
import { Switch, Route } from "react-router";
import HomePage from "./components/home/HomePage";
import MessagesPage from "./components/messages/MessagesPage";
import PageNotFound from "./components/common/PageNotFound";
import MessageDetailPage from "./components/messages/MessageDetailPage";
import CreateMessagePage from "./components/messages/CreateMessagePage";

class AppRoute extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/messages" component={MessagesPage} />
        <Route path="/message/:messageId" component={MessageDetailPage} />
        <Route path="/message" component={CreateMessagePage} />
        <Route component={PageNotFound} />
      </Switch>
    );
  }
}

export default AppRoute;
