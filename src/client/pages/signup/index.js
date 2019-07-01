import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import { config } from '../../utils/Config';
import { Jumbotron, Button } from 'reactstrap';

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

    this.props.authenticate({
		    			name: this.state.name,
		    			email: this.state.email,
		    			isLoggedIn: true
		    		});

	this.setState({
		    			error: '',
		    			fireRedirect: true
		    		});            

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
			    <div className="Jumbotron">
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
			    </div>

			    {this.state.fireRedirect && <Redirect to='/dashboard' push={true} />}
			</div>
		);
	}
}