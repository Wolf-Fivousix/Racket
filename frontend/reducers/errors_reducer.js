import { combineReducers } from 'redux';
import serversErrorsReducer from "./servers_errors_reducer";
import sessionErrorReducer from './session_errors_reducer';
import channelsErrorReducer from "./channels_errors_reducer";

export default combineReducers({
  servers: serversErrorsReducer,
  channels: channelsErrorReducer,
  session: sessionErrorReducer
});
