export const singleChannelClick = index => {
  return dispatch => {
    dispatch({ type: "SELECTED_CHANNEL", index });
  };
};
