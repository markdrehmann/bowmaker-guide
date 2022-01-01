import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createDrawing } from '../../actions/actions';

class NewDrawing extends Component {
  state = {
    url: '',
    title: '',
    makerId: ''
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.createDrawing(this.state);
    this.setState({
      url: '',
      title: '',
      makerId: ''
    })
  }

  render() {
    return(
      <div>
        <Link to={`/makers`} >
          Home
        </Link>
        <h2>New Drawing</h2>
        <form onSubmit={this.handleSubmit}>
          <label>URL: </label>
          <input type='text' autoComplete='off' name='url' value={this.state.url} onChange={this.handleChange}/><br/><br/>
          <label>Title: </label>
          <input type='text' autoComplete='off' name='title' value={this.state.title} onChange={this.handleChange}/><br/><br/>
          <label>Maker ID: </label>
          <input type='integer' autoComplete='off' name='makerId' value={this.state.makerId} onChange={this.handleChange}/><br/><br/>

          <input type='submit' value='Create this sucker'/>
        </form>
      </div>
    )
  }
}

export default connect(null, {createDrawing})(NewDrawing)