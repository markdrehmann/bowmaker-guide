import React, { Component } from "react";
import { connect } from "react-redux";
import { getBowmakers } from "../actions/actions";

class Head extends Component {
  componentDidMount() {
    this.props.getBowmakers()
  }

  render() {
    return (
      <div>
        <h1>The Bowmaker's Guide</h1>
      </div>
    )
  }
}

export default connect(null, { getBowmakers })(Head)