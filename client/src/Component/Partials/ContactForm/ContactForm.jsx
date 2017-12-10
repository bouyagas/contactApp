import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import{ print, alertInfo } from '../../../../../libs/utils.js';
import  './ContactForm.css';

export default class ContactForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      contact: {
        firstName: '',
        lastName: '',
        emailAddress: ''
      }
    };
  }

   createContact() {
    fetch('http://localhost:3000/api/contact/', {
      method: 'POST',
      headers: new Headers({
       'Content-Type': 'application/json',
      }),
      body: JSON.stringify({
        firstName: this.state.contact.firstName,
        lastName: this.state.contact.lastName,
        emailAddress: this.state.contact.emailAddress
      })
    })
    .then(this.setState({
      contact: {
        firstName: '',
        lastName: '',
        emailAddress: ''
      }
    }))
    .then(alertInfo('A contact has been saved'))
    .catch((error) => {
      return print(error);
    });
  }


  handleUpdateFirstName(event) {
    event.preventDefault();
    this.setState({
      contact: {
        firstName: event.target.value,
        lastName: this.state.contact.lastName,
        emailAddress: this.state.contact.emailAddress
      }
    });
  }

  handleUpdateLastName(event) {
    event.preventDefault();
    this.setState({
      contact: {
        firstName: this.state.contact.firstName,
        lastName: event.target.value,
        emailAddress: this.state.contact.emailAddress
      }
    });
  }

  handleUpdateEmailAddress(event) {
    event.preventDefault();
    this.setState({
      contact: {
        firstName: this.state.contact.firstName,
        lastName: this.state.contact.lastName,
        emailAddress: event.target.value,
      }
    });
  }


  render() {
    return (
      <div>
        <div id='form-container'>
        	<form onSubmit={this.createContact.bind(this)}>
  				<input
  					type="text"
  					placeholder="FirstName"
  					value={this.state.contact.firstName}
  					onChange={event => this.handleUpdateFirstName(event)}
  				/>
  				<input
  					type="text"
  					placeholder="LastName"
  					value={this.state.contact.lastName}
  					onChange={event => this.handleUpdateLastName(event)}
  				/>
  				<input
  					type="text"
  					placeholder="EmailAddress"
  					value={this.state.contact.emailAddress}
  					onChange={event => this.handleUpdateEmailAddress(event)}
  				/>
  				<button className='search-button'>Submit</button>
          	</form>
        </div>
        <Link to='/'>My Contacts</Link>
      </div>
    );
  }
}
