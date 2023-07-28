import SocketActionType from "./socket.types";

export const fetchSocket = (payload) => {
  return {
    type: SocketActionType.FETCH_SINGLE_SOCKET,
    payload: payload,
  };
};
export const addSocket = (payload) => {
  return {
    type: SocketActionType.ADD_SOCKET,
    payload: payload,
  };
};

export const deleteSocket = (payload) => {
  //console.log("DELETE HELP REQUEST ACTION ACTIVE");
  return {
    type: SocketActionType.DELETE_SOCKET,
    payload: payload,
  };
};

// export const addSocket = (payload) => {
//   //console.log("FETCH SINGLE USER ACTION");
//   return {
//     type: SocketActionType.ADD_SOCKET,
//     payload: payload,
//   };
// };
