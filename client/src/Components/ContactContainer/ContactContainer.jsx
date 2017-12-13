'use strict';
import React from 'react';
import { Link } from 'react-router-dom';
import _ from 'underscore';
import './ContactContainer.css';
import ContactItem from './ContactItem/ContactItem.jsx';

const ContactContainer = (props) => {
  const contactItems = _.map(props.contacts, (contact, i) => {
    return (
      <ContactItem
       key={i}
       id={contact.id}
       firstName={contact.firstName}
       lastName={contact.lastName}
       emailAddress={contact.emailAddress}
       deleteContactts={contact.deleteContacts}
      />
    );
  });

 return (
  <div>
   {contactItems}
   <Link to={'/form'}>{props.form}</Link>
  </div>
 );
};

export default ContactContainer;





