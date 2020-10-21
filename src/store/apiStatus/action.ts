import { ApiStatusActionTypes, ApiStatusActions } from "./types";

export function beginApiCall(): ApiStatusActionTypes {
  return { type: ApiStatusActions.BEGIN_API_CALL };
}

export function apiCallError(): ApiStatusActionTypes {
  return { type: ApiStatusActions.API_CALL_ERRPR };
}
