export enum ApiStatusActions {
  BEGIN_API_CALL = "@@ApiStatus/BEGIN_API_CALL",
  API_CALL_ERRPR = "@@ApiStatus/API_CALL_ERRPR",
}

export interface BeginApiCall {
  type: ApiStatusActions.BEGIN_API_CALL;
}

export interface ApiCallError {
  type: ApiStatusActions.API_CALL_ERRPR;
}

export type ApiStatusActionTypes = BeginApiCall | ApiCallError;
