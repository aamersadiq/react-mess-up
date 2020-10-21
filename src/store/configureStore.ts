import { History } from "history";
import { ApplicationState } from "./types";
import configureStoreDev from "./configureStore.dev";
import configureStoreProd from "./configureStore.prod";

interface ProcessEnv {
  [key: string]: string | undefined;
}

let env = process.env["NODE_ENV"];

// export default env === "production"
//  ? import("./configureStore.dev")
//  : import("./configureStore.prod");

const configureStore: any = (
  history: History,
  initialState: ApplicationState
) => {
  if (env === "production") {
    return configureStoreProd(history, initialState);
  } else {
    return configureStoreDev(history, initialState);
  }
};

export default configureStore;
