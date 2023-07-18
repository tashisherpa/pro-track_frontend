import HelpRequestActionType from "./helprequest.types";

//define the initial state for all HELP_REQUESTs array and single HELP_REQUEST object
export const INITIAL_HELP_REQUEST_STATE = {
  allHelpRequests: [],
  singleHelpRequest: {},
};

//handle the action type
const helpRequests = (state = INITIAL_HELP_REQUEST_STATE, action) => {
  console.log("HELPREQUESTSREDUCER IS HANDLING FETCH ALL HELP REQUESTS ACTION");
  switch (action.type) {
    case HelpRequestActionType.FETCH_ALL_HELP_REQUESTS:
      return { ...state, allHelpRequests: action.payload };
    case HelpRequestActionType.DELETE_HELP_REQUEST:
      return {
        ...state,
        allHelpRequests: state.allHelpRequests.filter(
          (helpRequest) => helpRequest.id !== action.payload
        ),
      };
    case HelpRequestActionType.EDIT_HELP_REQUEST:
      return {
        ...state,
        allHelpRequests: state.allHelpRequests.map((helpRequest) =>
          helpRequest.id === action.payload.id ? action.payload : helpRequest
        ),
        singleHelpRequest: action.payload,
      };
    case HelpRequestActionType.ADD_HELP_REQUEST:
      return {
        ...state,
        allHelpRequests: [...state.allHelpRequests, action.payload],
      };
    default:
      return state;
  }
};

export default helpRequests;
