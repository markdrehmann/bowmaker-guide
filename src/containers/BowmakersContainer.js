import React, { Component } from "react";
import { connect } from "react-redux";

class BowmakersContainer extends Component {

  render() {
    return (
      <div>
        <h1>Bowmakers Container</h1>
        <h2>{this.props.bowmakers.length}</h2>
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