import React from 'react';
import './ContactItem.css';

const ContactItem = (props) => (
	<div>
		<h4>{props.first}</h4>
		<h4>{props.last}</h4>
		<h4>{props.email}</h4>
		<button onClink={() => props.deleteContact(props.id)}>
			X
		</button>
	</div>
);

export default ContactItem;
