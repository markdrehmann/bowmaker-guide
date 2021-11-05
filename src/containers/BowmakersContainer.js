import React, { Component } from "react";
import { connect } from "react-redux";

class BowmakersContainer extends Component {

  render() {
    return (
      <div>
        <h3>Bowmakers</h3>
        <h4>{this.props.bowmakers.length}</h4>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bowmakers: state.bowmakers
  }
}

export default connect(mapStateToProps)(BowmakersContainer)