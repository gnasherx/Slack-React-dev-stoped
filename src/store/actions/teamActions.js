export const createTeam = teamDetails => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();

    firestore
      .collection("teams")
      .doc()
      .set({
        teamname: teamDetails.teamname,
        workspace: teamDetails.workspace,
        uid: teamDetails.uid,
        description: teamDetails.description
      })
      .then(() => {
        dispatch({ type: "TEAM_CREATED_SUCCESS", teamDetails });
      })
      .catch(error => {
        dispatch({ type: "NEW_TEAM_FAILED", error });
      });
  };
};
