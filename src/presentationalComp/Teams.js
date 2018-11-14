import React from "react";
import TeamIcon from "../SmallComponents/TeamIcon";
import { fetchTeams } from "../store/actions/teamActions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Plus from "../assets/icons/Plus.svg";
import { setTeamIndex } from "../store/actions/teamActions";

class Teams extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTeams(this.props.auth.uid);
  }

  render() {
    let renderTeams = this.props.teamsData.map((team, index) => (
      <TeamIcon
        key={index}
        name={team.teamname}
        coverpic={team.coverpic}
        imgsize="50px"
        marginTop="0"
        handleTeamClick={() => this.props.handleTeamClick(index)}
      />
    ));
    return (
      <div>
        {renderTeams}
        <Link to="/new-team">
          <TeamIcon
            name="New"
            coverpic={Plus}
            imgsize="30px"
            marginTop="11px"
          />
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    teamsData: state.newteam.teamsData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTeams: currentUser => dispatch(fetchTeams(currentUser)),
    handleTeamClick: teamIndex => dispatch(setTeamIndex(teamIndex))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Teams);
