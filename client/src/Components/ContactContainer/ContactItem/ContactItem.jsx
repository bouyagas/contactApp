import React from 'react';
import './ContactItem.css';

const ContactItem = (props) => (
    <div className="row">
	<div className="col s6 push-s3 ">
      <ul className="collection">
		<li className="collection-item">Fisrt Name: {props.firstName}</li>
		<li className="collection-item">Last Name: {props.lastName}</li>
		<li className="collection-item">Email: {props.emailAddress}</li>
		<button className="waves-effect waves-light btn" onClick={() => props.deleteContacts(props.id)}>
			Abandon 😢
		</button>
      </ul>
	</div>
</div>
);

export default ContactItem;
