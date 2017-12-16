
import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import {  AppBar , Toolbar,
	        Typography, Button, withStyles
	     } from 'material-ui';
import './NavBar.css';

const styles = {
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
  },
};

const Navbar = (props) => {
	const { classes } = props;
  return (
   <div className={classes.root}>
			<AppBar>
				<Toolbar>
					<Typography type='title' className={classes.flex}>
           <Link to={'/'}>Contact</Link>
          </Typography>
					<Button color='contrast'>
						<Link to={'/'}> My Contacts</Link>
					</Button>
					<Button color='contrast'>
						<Link to={'/form'}> Create New From </Link>
					</Button>
				</Toolbar>
			</AppBar>
   </div>
  );
};

export default withStyles(styles)(Navbar);
