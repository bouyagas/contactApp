'use strict';

import React, { Component } from 'react';
import _ from 'underscore';
import { Link } from 'react-router-dom';
import './ContactContainer.css';
import { print } from '../../../../libs/utils.js';
import ContactItem from './ContactItem/ContactItem.jsx';

export default class ContactContainer extends React.Component {
  constructor(props) {
   super(props);
   this.state = {
    contacts: [],
   };
  }

  componentDidMount() {
  	this.getAllContact();
  }

  getAllContact() {
    fetch('http://localhost:3000/api/contact/', {
      method: 'GET',
      headers: new Headers({
        'Content-type': 'application/json',
      }),
    })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      print(data);
      this.setState({
        contacts: data,
      });
    })
    .catch((error) => {
      return print(error);
    });
  }

  deleteContact(id) {
    fetch(`http://localhost:3000/api/contact/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'DELETE',
    })
    .then(() => {
      let contacts = _.filter(this.state.contacts, (contact) => {
        return contact.id !== id;
      })
      this.setState({ contacts });
    })
    .then(alertInfo('A contact has been deleted'))
    .catch((error) => {
      return print(error);
    });
  }

  renderContacts() {
    return _.map(this.state.contacts, (contact, i) => {
      <ContactItem
        key={i}
        id={contact.id}
        firstName={contact.firstName}
        lastName={contact.lastName}
        emailAddress={contact.emailAddress}
        deleteContact={this.deleteContact.bind(this)}
      />
    });
  }

  render() {
    return (
      <div id='container'>
		   {this.renderContacts()}
        <Link to='/form'></Link>
      </div>
    );
  }
}
