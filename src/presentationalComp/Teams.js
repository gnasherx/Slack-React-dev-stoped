import React from "react";
import TeamIcon from "../SmallComponents/TeamIcon";

class Teams extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: [
        { teamName: "Apple", projectId: "01" },
        { teamName: "Banana", projectId: "02" },
        { teamName: "Mango", projectId: "03" }
      ]
    };
  }

  render() {
    let teams = [...this.state.teams];
    let renderTeams = teams.map((team, index) => (
      <TeamIcon name={team.teamName} />
    ));
    return (
      <div>
        {renderTeams}
        <p>New</p>
      </div>
    );
  }
}

export default Teams;
