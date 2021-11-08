import React, { Component } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";

class ShowBowmaker extends Component {
  render() {
    const { id } = useParams();
    console.log('showbowmaker', id)
    // let idx = Number(this.props.match.params.id)
    // let bowmaker = this.props.bowmakers.find(b => b.id === idx)
    return (
      <p>Show individual bowmaker</p>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log('ownProps', ownProps)
  // const idx = ownProps.match.params.id;
  // const maker = state.bowmakers.find(maker => maker.id === idx);
  return {
    bowmakers: state.bowmakers,
    // bowmaker: maker
  }
}

// function mapStateToProps(state, ownProps) {
//   const id = ownProps.match.params.id;
//  // get the user
//   const contextuser = getUserById(state.users, id);
//   return {
//       contextuser; contextuser
//   };
// }

export default connect(mapStateToProps)(ShowBowmaker)