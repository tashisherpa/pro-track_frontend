import ResourceActionType from "./resources.types";

//define the initial state for all resources array and single resource object
export const INITIAL_RESOURCE_STATE = {
  allResources: [],
  singleResource: {},
};

//handle the action type
const resources = (state = INITIAL_RESOURCE_STATE, action) => {
  //console.log("RESOURCESREDUCER IS HANDLING FETCH ALL RESOURCES ACTION");
  switch (action.type) {
    case ResourceActionType.FETCH_ALL_RESOURCES:
      return { ...state, allResources: action.payload };
    case ResourceActionType.FETCH_SINGLE_RESOURCE:
      return {
        ...state,
        singleResource: action.payload,
      };
    case ResourceActionType.DELETE_RESOURCE:
      return {
        ...state,
        allResources: state.allResources.filter(
          (resource) => resource.id !== action.payload
        ),
      };
    case ResourceActionType.EDIT_RESOURCE:
      return {
        ...state,
        allResources: state.allResources.map((resource) =>
          resource.id === action.payload.id ? action.payload : resource
        ),
        singleResource: action.payload,
      };
    case ResourceActionType.ADD_RESOURCE:
      return {
        ...state,
        allResources: [...state.allResources, action.payload],
      };
    default:
      return state;
  }
};

export default resources;
