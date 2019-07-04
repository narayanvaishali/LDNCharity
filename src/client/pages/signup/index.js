import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import { config } from '../../utils/Config';
import { Jumbotron, Button } from 'reactstrap';
import Backendless from 'backendless';

export default class Signup extends React.Component {

  /* render ()
    {
        return(
          <div>Signup Page</div>
        )
    }*/

	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			password: '',
			error: '',
			fireRedirect: false
		};

		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handlePasswordChange = this.handlePasswordChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		const params = {
			name: this.state.name,
			email: this.state.email,
			password: this.state.password
		};

    /*this.props.authenticate({
		    			name: this.state.name,
		    			email: this.state.email,
		    			isLoggedIn: true
		    		});
    */
	  this.setState({
		    			error: '',
		    			fireRedirect: true
		    		}); 

console.log('params : ' + params);

    /*Backendless.Data.of( "LDNUsers" ).save( params )
    .then( function ( savedObject ) {
        console.log(JSON.stringify(savedObject));
        console.log( "LDNUsers instance is created");
          let _updatedobj = JSON.stringify(savedObject);
         console.log(' _updatedobj '+ _updatedobj);

        	this.props.authenticate({
		    			name: _updatedobj.name,
		    			email: _updatedobj.email,
		    			isLoggedIn: true
		    		});
		    		
		    		this.setState({
		    			error: '',
		    			fireRedirect: true
		    		});
      })
    .catch( function( error ) {
        console.log( "an error has occurred : " + error.message );
        	this.setState({
		    			error: response.data.message
		    		});
      }); */
       let success = false;
       let fail = false;
      Backendless.Data.of( "LDNUsers" ).save( params )
		    .then(response => {
		    	if (JSON.stringify(response) != "") {
          let _updatedobj = JSON.stringify(response);
         console.log(' _updatedobj '+ response.name);

		    		this.props.authenticate({
		    	    name: response.name,
		    			email: response.email,
		    			isLoggedIn: true
		    		});
		    		success = true;		    		
		    	} else {
            fail = true;    	
		    	}
		    }).catch(err => {
          fail = true;
		    	console.error(err);
		    });
   
      if (success == true){
        this.setState({
		    			error: '',
		    			fireRedirect: true
		   	});
      }

     if (fail == true){
          	this.setState({
		    			error: response.message
		    		});
     }
	/*	axios.post(config.baseUrl + 'signup', params)
		    .then(response => {
		    	if (response.data && response.data.success) {

		    		this.props.authenticate({
		    			name: response.data.user.name,
		    			email: response.data.user.email,
		    			isLoggedIn: true
		    		});
		    		
		    		this.setState({
		    			error: '',
		    			fireRedirect: true
		    		});
		    	} else {
		    		this.setState({
		    			error: response.data.message
		    		});
		    	}
		    }).catch(err => {
		    	console.error(err);
		    });
    */
	}

	handleNameChange(e) {
		this.setState({
			name: e.target.value
		});
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
			        <h1>Please Signup</h1>
			        <form onSubmit={this.handleSubmit}>
			            <div className="form-group">
				            <label>Name:</label>
				            <input type="text" className="form-control" onChange={this.handleNameChange} />
				        </div>
				        <div className="form-group">
				            <label>Email address:</label>
				            <input type="email" className="form-control" onChange={this.handleEmailChange} />
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
			            Already have an account? 
			            <Link to={'/login'}>Login</Link>
			        </p>
			    </Jumbotron>

			    {this.state.fireRedirect && <Redirect to='/dashboard' push={true} />}
			</div>
		);
	}
}