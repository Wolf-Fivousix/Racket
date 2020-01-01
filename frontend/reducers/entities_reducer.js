import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import serversReducer from "./servers_reducer";
import channelsReducer from "./channels_reducer";
import messagesReducer from "./messages_reducer";
import membershipsReducer from "./memberships_reducer";

const entitiesReducer = combineReducers({
  user: usersReducer,
  servers: serversReducer,
  channels: channelsReducer,
  messages: messagesReducer,
  memberships: membershipsReducer
});

export default entitiesReducer;