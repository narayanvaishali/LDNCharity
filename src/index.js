import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Redirect } from 'react-router-dom';
import AppRoutes from '../src/client/components/AppRoutes';

const app = document.getElementById('app');

ReactDOM.render((
	<BrowserRouter>
	    <AppRoutes />
	</BrowserRouter>
), app);