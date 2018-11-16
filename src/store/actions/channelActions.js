export const singleChannelClick = index => {
  return dispatch => {
    dispatch({ type: "SELECTED_CHANNEL", index });
  };
};

export const createNewChannel = channelDetails => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const { firebase } = getState();

    const { newteam } = getState();
    console.log(newteam);
    const teamId = newteam.currentTeam.id;
    console.log("Doc::", teamId);
  };
};
