import SocketActionType from "./socket.types";

export const fetchSocket = (payload) => {
  return {
    type: SocketActionType.FETCH_SINGLE_SOCKET,
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
