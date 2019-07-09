import React from 'react';
import axios from 'axios';
import { config } from '../../utils/Config';
import { Menu } from '../../../client/components/Menu';
import { Sidebar } from '../../../client/components/Sidebar';
import  { SMenu } from '../../../client/components/SMenu';
import { Link, Redirect } from 'react-router-dom';
import { Container, Col, Form, FormGroup, Label, Input, Button, Jumbotron,Row, Col } from 'reactstrap';

export default class Dashboard extends React.Component {

 /* render ()
  {
      return(
        <div>Dashboard Page </div>
      )
  }*/

	constructor(props) {
		super(props);

    console.log('dashboard ' + JSON.stringify(this.props));
		this.logout = this.logout.bind(this);
	}

	logout(e) {
		e.preventDefault();
    this.props.authenticate({isLoggedIn: false});
	/*	axios.post(config.baseUrl + 'logout', {})
		    .then(response => {
		    	if (response.data && response.data.success) {
		    		this.props.authenticate({isLoggedIn: false});
		    	} 
		    }).catch(err => {
		    	console.error(err);
		    });*/
	}

	render() {
		return (
			<div class="container-fluid">
      <Row>  
        <Col>     
            <SMenu/>
         </Col>
        <Col>
			            <button class="btn btn-primary" onClick={this.logout}>Logout</button>
			        <h1>Hello {this.props.user.name}</h1>
			        <br />
          </Col>
      </Row>
      <Row> 
      </Row>
			</div>   
		);
	}
}