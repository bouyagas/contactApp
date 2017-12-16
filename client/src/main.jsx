'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import App from './Components/App/App.jsx';

const theme = createMuiTheme();

const renderRoute = (appComponent) => {
 return ReactDOM.render (
 	<MuiThemeProvider theme={theme}>
	  <BrowserRouter>
	 	<Route component={appComponent} />
	  </BrowserRouter>
 	</MuiThemeProvider>,
 	 document.querySelector('#root-container')
  );
};

renderRoute(App);
