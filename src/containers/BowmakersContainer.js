import React, { Component } from "react";
import { connect } from "react-redux";
import Bowmaker from "../components/bowmakers/Bowmaker";

class BowmakersContainer extends Component {
  renderBowmakers = () => {
    let bowmakers = this.props.bowmakers
    if (bowmakers) {
      return (
        <ul>
          {bowmakers.map(bowmaker => <Bowmaker key={bowmaker.id} bowmaker={bowmaker} />)}
        </ul>
      )
    } else {
      return (
        <p>No bowmakers in db!</p>
      )
    }
  }

  render() {
    return (
      <div>
        <h3>Bowmakers</h3>
        {this.renderBowmakers()}
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