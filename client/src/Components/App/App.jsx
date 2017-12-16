import React, { Component } from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import { print, alertInfo } from '../../../../libs/utils.js';
import ContactContainer from '../ContactContainer/ContactContainer.jsx';
import ContactForm from '../Partials/ContactForm/ContactForm.jsx';
import NavBar from '../Partials/NavBar/NavBar.jsx';
import './App.css';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     };
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  // API from the local Server

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


  render() {
    return (
      <div className='material'>
      <NavBar/>
        <h3> My Contact </h3>
        <Switch>
          <Route exact path={"/"} component={ContactContainer} />
          <Route path={"/form"} component={ContactForm} />
          <Redirect path={"*"} to="/" />
        </Switch>
      </div>
    );
  }
}


