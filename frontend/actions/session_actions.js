import * as APIUtils from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

const receiveSessionErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const loginUser = user => dispatch => (
  APIUtils.login(user)
    .then((user) => dispatch(receiveCurrentUser(user)))
);

export const logoutUser = () => dispatch => (
  APIUtils.logout()
    .then(() => dispatch(logoutCurrentUser()))
);

export const signUpUser = user => dispatch => (
  APIUtils.signUp(user)
    .then((user) => dispatch(receiveCurrentUser(user)))
);
