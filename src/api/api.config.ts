import * as qs from "qs";
import { PathLike } from "fs";
import config from "../common/environment/environment";

export const API_BASE_URL = config.API_URL;

export const apiConfig = {
  returnRejectedPromiseOnError: true,
  withCredentials: true,
  timeout: 30000,
  baseURL: config.API_URL,
  headers: {
    common: {
      "Cache-Control": "no-cache, no-store, must-revalidate",
      Pragma: "no-cache",
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  },
  paramsSerializer: (params: PathLike) =>
    qs.stringify(params, { indices: false }),
};
