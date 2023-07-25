import axios from "axios";
import ZoomActionType from "./zoom.types";

export const fetchZoomMeetingLink = (payload) => {
    return {
      type: ZoomActionType.FETCH_ZOOM_MEETING_LINK,
      payload: payload,
    };
  };
  
  export const fetchZoomMeetingLinkThunk = () => {
    return async (dispatch) => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/api/zoom/1`
        );
        if (!response.data) {
          //console.log("No User found");
        }
        dispatch(fetchZoomMeetingLink(response.data));
      } catch (error) {
        console.error(error);
      }
    };
  };

  export const editZoomMeetingLink = (payload) => {
    return {
      type: ZoomActionType.EDIT_ZOOM_MEETING_LINK,
      payload: payload,
    };
  };
  
  export const editZoomMeetingLinkThunk = (zoom) => {
    return async (dispatch) => {
      try {
        const response = await axios.put(
          `${process.env.REACT_APP_BACKEND_URL}/api/zoom/1`,
          zoom
        );
        dispatch(editZoomMeetingLink(response.data));
      } catch (error) {
        console.error(error);
      }
    };
  };