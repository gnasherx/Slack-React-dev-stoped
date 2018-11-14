const initialState = {
  teamDetails: {}
};

const teamReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TEAM_CREATED_SUCCESS":
      console.log("New team created successfully");
      return {
        ...state,
        teamDetails: action.teamDetails
      };
    case "NEW_TEAM_FAILED":
      console.log("Failed to create team: ", action.error);
      return state;
    default:
      return state;
  }
};

export default teamReducer;
