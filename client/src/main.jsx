'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';
import App from './Component/App/App.jsx';

const renderRoute = (appRoutes) => {
    ReactDOM.render(
    	 <BrowserRouter>
    	    <Route component={appRoutes} />
    	 </BrowserRouter>,
    	document.querySelector('#root-container')
    );
};

renderRoute(App);
