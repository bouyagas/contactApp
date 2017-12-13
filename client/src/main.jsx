'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';
import App from './Components/App/App.jsx';

const renderRoute = (appComponent) => {
 return ReactDOM.render (
	 	<BrowserRouter>
	 	 <Route component={appComponent} />
	 	</BrowserRouter>,
 	document.querySelector('#root-container')
 	);
};

renderRoute(App);
