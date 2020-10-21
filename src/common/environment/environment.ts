import configDev from "./environment.dev";
import configProd from "./environment.prod";

const config = process.env.NODE_ENV === "development" ? configDev : configProd;

export default config;
