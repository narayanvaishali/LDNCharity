import React from 'react';
import { Link, Redirect } from 'react-router-dom';
//import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Container, Col, Form, FormGroup, Label, Input, Button, Jumbotron,Row, Col } from 'reactstrap';

export default class Home extends React.Component {

 /*render ()
  {
      return(
        <div>Home Page</div>
      )
  }*/

	render() {
		return (
      <div>
        <Jumbotron>
              <Container>
                  <Row>
                      <Col>
                          <h1>LDN Charity</h1>
                          <p>
                            <Link to={`/login`}>
                          <Button color="primary" size="sm">Login </Button>{'    '}
                          </Link>
                          <Link to={`/signup`}>
                              <Button color="primary" > Sign Up</Button>
                          </Link>
                          </p>
                      </Col>
                  </Row>
              </Container>
          </Jumbotron>
      </div>
		);
	}
}