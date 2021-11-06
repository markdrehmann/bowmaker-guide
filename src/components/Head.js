import React, { Component } from "react";
import { connect } from "react-redux";
import { getBowmakers } from "../actions/actions";
import BowmakersContainer from "../containers/BowmakersContainer";

class Head extends Component {
  componentDidMount() {
    this.props.getBowmakers()
  }

  render() {
    return (
      <div>
        <h1>The Bowmaker's Guide</h1>
        {/* <BowmakersContainer /> */}
      </div>
    )
  }
}

export default connect(null, { getBowmakers })(Head)