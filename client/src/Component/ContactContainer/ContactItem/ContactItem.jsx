import React from 'react';
import './ContactItem.css';

const ContactItem = (props) => (
	<div>
		<h4>{props.firstName}</h4>
		<h4>{props.lastName}</h4>
		<h4>{props.emailAddress}</h4>
		<button onClink={() => props.deleteContact(props.id)}>
			X
		</button>
	</div>
);

export default ContactItem;
