import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "typeface-roboto";
import { createBrowserHistory } from "history";
import configureStore from "./store/configureStore";
import { SnackbarProvider } from "notistack";
import { IconButton } from "@material-ui/core";
import { Delete } from "@material-ui/icons";

const history = createBrowserHistory();

const initialState: any = {};
const store = configureStore(history, initialState);

// add action to all snackbars
const notistackRef: any = React.createRef();
const onClickDismiss = (key: any) => () => {
  notistackRef.current.closeSnackbar(key);
};

ReactDOM.render(
  <SnackbarProvider
    maxSnack={3}
    ref={notistackRef}
    action={(key) => (
      <IconButton onClick={onClickDismiss(key)} aria-label="delete">
        <Delete />
      </IconButton>
    )}
  >
    <App store={store} history={history} />
  </SnackbarProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
