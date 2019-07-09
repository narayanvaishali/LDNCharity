import React from 'react';
import { Link,Redirect } from 'react-router-dom';
import { config } from '../../utils/Config';
import { Jumbotron, Button } from 'reactstrap';
import { loginuser } from '../../../actions/loginactions';

export default class Login extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			error: '',
			fireRedirect: false
		};

		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handlePasswordChange = this.handlePasswordChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
    var data = [];
		const params = {
			email: this.state.email,
			password: this.state.password
		};

     this.setState({
		    			error: '',
		    			fireRedirect: true
		    		});   

 ///Get request
  /*Backendless.Data.of( "LDNUsers" ).find()
  .then( function( result ) {
     // every loaded object from the "Contact" table is now an individual untyped
     // JS object in the "result" array
     console.log('result is' + JSON.stringify(result));
   })
  .catch( function( error ) {
    // an error has occurred, the error code can be retrieved with fault.statusCode
   });*/

    //console.log(this.state);

  if(this.state.email != "" && this.state.password != "" ){
    var whereClause = "email = '"+ this.state.email +"'";
    var queryBuilder = Backendless.DataQueryBuilder.create().setWhereClause( whereClause );

    loginuser(queryBuilder, data => {

      console.log('data -> ' + JSON.stringify(data))
       this.props.authenticate({
        name: data[0].name,
        email: data[0].email,
        isLoggedIn: true
      });

      this.setState(state => {
          state.error =  '';
		    	state.fireRedirect = true;
           return state;
          })
       });
  }
	}

	handleEmailChange(e) {
		this.setState({
			email: e.target.value
		});
	}

	handlePasswordChange(e) {
		this.setState({
			password: e.target.value
		});
	}

	render() {
		return (
			<div className="container-fluid">
			    <Jumbotron>
			        <h1>Please Login</h1>
			        <form onSubmit={this.handleSubmit}>
				        <div className="form-group">
				            <label>Email address:</label>
				            <input type="email"  className="form-control" onChange={this.handleEmailChange} />
				        </div>
				        <div className="form-group">
				            <label>Password:</label>
				            <input type="password" className="form-control" onChange={this.handlePasswordChange} />
				        </div>
				        <button type="submit" className="btn btn-primary">Submit</button>
			        </form>
			        <br />
			        <p className="text-danger">{this.state.error}</p>
			        <p>
			            New User? 
			            <Link to={'/signup'}>Signup</Link>
			        </p>
			    </Jumbotron>

			    {this.state.fireRedirect && <Redirect to='/dashboard' push={true} />}
			</div>
		);
	}
}