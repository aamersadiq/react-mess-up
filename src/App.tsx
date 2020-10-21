import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Header from "./components/common/Header";
import AppRoute from "./AppRoute";
import { Store } from "redux";
import { History } from "history";
import { ConnectedRouter } from "connected-react-router";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import { Provider as ReduxProvider } from "react-redux";
import theme from "./theme";
import { ApplicationState } from "./store/types";
import Spinner from "./components/common/Spinner";

interface MainProps {
  store: Store<ApplicationState>;
  history: History;
}

const App: React.FC<MainProps> = ({ store, history }) => {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <ConnectedRouter history={history}>
          <Header />
          <Container maxWidth="md">
            <Box my={1}>
              <AppRoute />
              <Spinner />
            </Box>
          </Container>
        </ConnectedRouter>
      </ThemeProvider>
    </ReduxProvider>
  );
};

export default App;
