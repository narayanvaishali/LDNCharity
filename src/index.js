import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Redirect } from 'react-router-dom';
import AppRoutes from '../src/client/components/AppRoutes';
import 'bootstrap/dist/css/bootstrap.min.css';
import Backendless from 'backendless';
 
Backendless.initApp('F7C10331-A8CC-D8D1-FFB5-6722FAE56000', '6C03435C-3642-81F6-FF3D-CBF0D362A800');

const app = document.getElementById('app');

ReactDOM.render((
	<BrowserRouter>
	    <AppRoutes />
	</BrowserRouter>
), app);