const initialState = {
  channelSelectedIndex: 0
};

const channelReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SELECTED_CHANNEL":
      console.log(`This channel ${action.index} is now selected`);
      return {
        ...state,
        channelSelectedIndex: action.index
      };
    case "CHANNEL_CREATED_SUCCESS":
      console.log("New channel created");
      return state;
    case "CHANNEL_CREATION_FAILED":
      console.log("New channel creation failed: ", action.error);
      return state;
    default:
      return state;
  }
};

export default channelReducer;
