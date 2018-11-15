export const singleChannelClick = index => {
  return dispatch => {
    dispatch({ type: "SELECTED_CHANNEL", index });
  };
};

export const createNewChannel = currentUser => {
  return (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();

    
  }
}