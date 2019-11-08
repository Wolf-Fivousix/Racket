import * as APIUtils from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS"

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

const clearErrorsState = () => ({
  type: CLEAR_ERRORS
})

export const loginUser = user => dispatch => (
  APIUtils.login(user)
    .then((user) => dispatch(receiveCurrentUser(user)))
    .fail(errors => dispatch(receiveSessionErrors(errors)))
);

export const logoutUser = () => dispatch => (
  APIUtils.logout()
    .then(() => dispatch(logoutCurrentUser()))
);

export const signUpUser = user => dispatch => (
  APIUtils.signUp(user)
    .then((user) => dispatch(receiveCurrentUser(user)))
    .fail(errors => dispatch(receiveSessionErrors(errors)))
);

export const clearErrors = () => dispatch => (
  dispatch(clearErrorsState())
);

