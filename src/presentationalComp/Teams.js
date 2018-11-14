import React from "react";
import TeamIcon from "../SmallComponents/TeamIcon";
import { fetchTeams } from "../store/actions/teamActions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Teams extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTeams(this.props.auth.uid);
  }

  render() {
    let renderTeams = this.props.teamsData.map((team, index) => (
      <TeamIcon key={index} name={team.teamname} coverpic={team.coverpic} />
    ));
    return (
      <div>
        {renderTeams}
        <Link to="/new-team">
          <p>New</p>
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
    fetchTeams: currentUser => dispatch(fetchTeams(currentUser))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Teams);
