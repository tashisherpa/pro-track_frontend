import SocketActionType from "./socket.types";

//define the initial state for all users array and single user object
export const INITIAL_USER_STATE = {
  socket: {},
};

const socket = (state = INITIAL_USER_STATE, action) => {
  switch (action.type) {
    case SocketActionType.FETCH_SINGLE_SOCKET:
      return {
        ...state,
        socket: action.payload,
      };
    case SocketActionType.ADD_SOCKET:
      return {
        ...state,
        socket: [...state.socket, action.payload],
      };
    case SocketActionType.DELETE_SOCKET:
      const { [action.payload]: deletedSocket, ...remainingSockets } =
        state.socket;
      return {
        ...state,
        socket: remainingSockets,
      };
    default:
      return state;
  }
};

export default socket;
