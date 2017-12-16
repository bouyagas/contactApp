import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles, TextField  } from 'material-ui';
import{ print, alertInfo } from '../../../../../libs/utils.js';
import  './ContactForm.css';

const styles = theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    margin: theme.spacing.unit,
    width: 500,
  },
});

 class ContactForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      contact: {
        firstName: '',
        lastName: '',
        emailAddress: ''
      },
      myContact: 'My Contacts',
      submit: 'Submit',
      first: 'First Name',
      last: 'Last Name',
      email: 'Email Address',
      text: 'text'
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
    .then(() =>{
      props.history.push('/');
    })
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

    const { classes } = this.props;

    return (
        <div id='form-container'>
        	<form className={classes.container} onSubmit={this.createContact.bind(this)}>
          <TextField
            label={this.state.first}
            className={classes.textField}
            type={this.state.text}
            margin="normal"
            value={this.state.contact.firstName}
            onChange={event => this.handleUpdateFirstName(event)}
          />

         <TextField
          label={this.state.last}
          className={classes.textField}
          type={this.state.text}
          margin="normal"
          value={this.state.contact.lastName}
          onChange={event => this.handleUpdateLastName(event)}
         />

        <TextField
          label={this.state.email}
          className={classes.textField}
          type={this.state.text}
          margin="normal"
          value={this.state.contact.emailAddress}
          onChange={event => this.handleUpdateEmailAddress(event)}
         />
          <button className='button'>{this.state.submit}</button>
        </form>
      </div>
    );
  }
}

export default withStyles(styles)(ContactForm);
