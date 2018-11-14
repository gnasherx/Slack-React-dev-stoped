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
    default:
      return state;
  }
};

export default channelReducer;
