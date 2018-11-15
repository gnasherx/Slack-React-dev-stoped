export const createTeam = teamDetails => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();

    firestore
      .collection("teams")
      .doc()
      .set({
        coverpic:
          "https://i0.wp.com/dev.slack.com/img/avatars/ava_0010-512.v1443724322.png?ssl=1",
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

export const fetchTeams = currentUser => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();

    firestore
      .collection("teams")
      .where("uid", "==", currentUser)
      .get()
      .then(function(querySnapshot) {
        let allTeamsOfThisUser = [];
        querySnapshot.forEach(function(doc) {
          allTeamsOfThisUser.push(doc.data());
        });
        dispatch({
          type: "FETCH_TEAMS_SUCCESS",
          teamsData: allTeamsOfThisUser
        });
      })
      .catch(function(error) {
        console.log("Error getting documents: ", error);
        dispatch({ type: "FETACH_TEAMS_FAILED", error: error });
      });
  };
};

export const setTeamIndex = index => {
  return (dispatch, getState, { getFirestore }) => {
    // const firestore = getFirestore();
    dispatch({ type: "SET_TEAM_INDEX", index });
  };
};

export const getDocumentId = index => {
  return (dispatch, getState) => {
    const { firebase, firestore } = getState();
    let docId = firestore.ordered.teams.filter(
      doc => doc.uid == firebase.auth.uid
    );
    // console.log("===>", docId[index].id, " Name ==>", docId[index].teamname);
    dispatch({
      type: "CURRENTLY_WORKING_WITH_TEAM",
      currentTeam: docId[index]
    });
  };
};
