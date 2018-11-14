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
        querySnapshot.forEach(function(doc) {
          let teamData = doc.data();
          dispatch({ type: "FETCH_TEAMS_SUCCESS", teamsData: teamData });
        });
      })
      .catch(function(error) {
        console.log("Error getting documents: ", error);
        dispatch({ type: "FETACH_TEAMS_FAILED", error: error });
      });
  };
};
