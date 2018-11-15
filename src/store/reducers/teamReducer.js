const initialState = {
  teamsData: [],
  tesmSelected: 0,
  currentTeam: {}
};

const teamReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TEAM_CREATED_SUCCESS":
      console.log("New team created successfully");
      return state;
    case "NEW_TEAM_FAILED":
      console.log("Failed to create team: ", action.error);
      return state;
    case "FETCH_TEAMS_SUCCESS":
      console.log("Got all teams successfully");
      return {
        ...state,
        teamsData: action.teamsData
      };
    case "FETACH_TEAMS_FAILED":
      console.log("Failed to get all teams");
      return state;
    case "SET_TEAM_INDEX":
      console.log("Team index: ", action.index);
      return {
        ...state,
        teamSelected: action.index
      };
    case "CURRENTLY_WORKING_WITH_TEAM":
      console.log("Team selected: ", action.currentTeam.teamname);
      return {
        ...state,
        currentTeam: action.currentTeam
      };

    default:
      return state;
  }
};

export default teamReducer;
