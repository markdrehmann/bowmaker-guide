import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createBowmaker } from '../../actions/actions';

class NewBowmaker extends Component {
  state = {
    first_name: '',
    last_name: '',
    birth_year: '',
    year_of_death: '',
    biography: '',
    notes: ''
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.createBowmaker(this.state);
    this.setState({
      first_name: '',
      last_name: '',
      birth_year: '',
      year_of_death: '',
      biography: '',
      notes: ''
    })
  }

  render() {
    return(
      <div>
        <Link to={`/makers`} >
          Home
        </Link>
        <h2>New Bowmaker</h2>
        <form onSubmit={this.handleSubmit}>
          <label>First Name: </label>
          <input type='text' autoComplete='off' name='first_name' value={this.state.first_name} onChange={this.handleChange}/><br/><br/>
          <label>Last Name: </label>
          <input type='text' autoComplete='off' name='last_name' value={this.state.last_name} onChange={this.handleChange}/><br/><br/>
          <label>Year Born: </label>
          <input type='number' autoComplete='off' name='birth_year' value={this.state.birth_year} onChange={this.handleChange}/><br/><br/>
          <label>Year of Death: </label>
          <input type='number' autoComplete='off' name='year_of_death' value={this.state.year_of_death} onChange={this.handleChange}/><br/><br/>
          <label>Biography: </label>
          <textarea autoComplete='off' name='biography' value={this.state.biography} onChange={this.handleChange}/><br/><br/>
          <label>Notes: </label>
          <textarea autoComplete='off' name='notes' value={this.state.notes} onChange={this.handleChange}/><br/><br/>

          <input type='submit' value='Create this sucker'/>
        </form>
      </div>
    )
  }
}

export default connect(null, {createBowmaker})(NewBowmaker)