import ZoomActionType from "./zoom.types";

export const INITIAL_ZOOM_LINK_STATE = {
  zoomMeetingLink: {},
};

const zoom = (state = INITIAL_ZOOM_LINK_STATE, action) => {
  switch (action.type) {
    case ZoomActionType.FETCH_ZOOM_MEETING_LINK:
      return { ...state, zoomMeetingLink: action.payload };
    case ZoomActionType.EDIT_ZOOM_MEETING_LINK:
      return {
        ...state,
        zoomMeetingLink: action.payload,
      };
    default:
      return state;
  }
};

export default zoom;
