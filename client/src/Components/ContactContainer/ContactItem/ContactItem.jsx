import React from 'react';
import { Button,  withStyles,
	List, ListItem, ListItemIcon, ListItemText, Divider,
}  from 'material-ui';
import PersonIcon from 'material-ui-icons/Person';
import EmailIcon from 'material-ui-icons/Email';
import './ContactItem.css';

const styles = theme => ({
  root: {
    width: '50%',
    marginLeft: 350,
    background: theme.palette.background.paper,
  },
   button: {
    margin: theme.spacing.unit,
  },
});

const ContactItem = (props) => {
	const { classes } = props;

  return (
		 <div className={classes.root}>
			<List>
        <Divider/>
				<ListItem button>
					<ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary={props.firstName} />
				</ListItem>

				<ListItem button>
					<ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary={props.lastName} />
				</ListItem>

				<ListItem button>
					<ListItemIcon>
            <EmailIcon />
          </ListItemIcon>
          <ListItemText primary={props.emailAddress} />
				</ListItem>
				<Button raised color="primary" className={classes.button} onClick={() => props.deleteContacts(props.id)}>
						Abandon 😢
				</Button>
        <Divider/>
			</List>
		 </div>
  );
};



export default withStyles(styles)(ContactItem);
