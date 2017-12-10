import React, { Component } from 'react';
import { print, alertInfo } from '../../../../libs/utils.js';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import ContactContainer from '../ContactContainer/ContactContainer.jsx';
import ContactForm from '../Partials/ContactForm/ContactForm.jsx';
import './App.css';


export default class App extends React.Component {
  constructor(props) {
    super(props);
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }


  getSingleContact(id) {
    fetch(`http://localhost:3000/api/contact/${id}`, {
      method: 'GET',
      headers: new Headers({
       'Content-Type': 'application/json',
      }),
    })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      print(data);
      this.setState({
       contactsArr: data,
      });
    })
    .catch((error) => {
      return print(error);
    });
  }



  updateContact(id) {
    fetch(`lhttp://localhost:3000/api/contact/${id}`, {
      method: 'PUT',
      headers: new Headers({
       'Content-Type': 'application/json',
      }),
    })
    .then(this.setState({
      contact: {
        firstName: '',
        lastName: '',
        emailAddress: ''
      }
    }))
    .then((response) => {
      return response.json();
    })
    .then(alertInfo('A contact has been updated'))
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
      let contacts = this.state.contacts.filter((contact) => {
        return contact.id !== id;
      })
      this.setState({ contacts });
    })
    .then(alertInfo('A contact has been deleted'))
    .catch((error) => {
      return print(error);
    });
  }

  render() {
    return (
      <div>
        <h3> My Contact </h3>
        <Switch>
          <Route exact path="/" component={ContactContainer} />
          <Route path="/contact/form" component={ContactForm} />
          <Redirect path="*" to="/" />
        </Switch>
         <Link to="/contact/form">Form</Link>
      </div>
    );
  }
}



