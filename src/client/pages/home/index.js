import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class Home extends React.Component {

 /*render ()
  {
      return(
        <div>Home Page</div>
      )
  }*/

	render() {
		const buttonStyle = {
			marginRight: '1em'
		};
		return (
      <div>
                <h1>LDN Charity</h1>
                <Link to={`/login`}>
                <Button color="primary" size="sm">Login </Button>{'    '}
                </Link>
                <Link to={`/signup`}>
                    <Button> Sign Up</Button>
                </Link>
      </div>
		);
	}
}