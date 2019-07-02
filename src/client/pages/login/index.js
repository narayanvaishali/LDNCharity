import React from 'react';
import { Link,Redirect } from 'react-router-dom';
//import { Redirect } from 'react-router';
import axios from 'axios';
import { config } from '../../utils/Config';

export default class Login extends React.Component {

  //  render ()
  //   {
  //       return(
  //         <div>Login Page</div>
  //       )
  //   }

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

    this.props.authenticate({
		    			name: 'Rachel Box',
		    			email: 'rachel.box@ldncharity.com',
		    			isLoggedIn: true
		    		});

     this.setState({
		    			error: '',
		    			fireRedirect: true
		    		});   
     /* data = [{
          "id": 1,
          "name": "leena Graham",
          "username": "Bret",
          "email": "Sincere@april.biz",
          "phone": "1-770-736-8031 x56442",
          "website": "hildegard.org",
        }]
        fetch('data.json', {
        method: 'PUT',
        mode: 'CORS',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        return res;
    }).catch(err => err);   */

    fetch('data.json', {
                method: 'POST',
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
                body:JSON.stringify({name: "Graham"})
            }).then((res) => res.json())
            .then((data) =>  console.log(data))
            .catch((err)=>console.log('here ' + err))      

		/* axios.post(config.baseUrl + 'login', params)
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
		    });*/
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
			<div class="container-fluid">
			    <div class="jumbotron">
			        <h1>Please Login</h1>
			        <form onSubmit={this.handleSubmit}>
				        <div class="form-group">
				            <label>Email address:</label>
				            <input type="email" class="form-control" onChange={this.handleEmailChange} />
				        </div>
				        <div class="form-group">
				            <label>Password:</label>
				            <input type="password" class="form-control" onChange={this.handlePasswordChange} />
				        </div>
				        <button type="submit" class="btn btn-primary">Submit</button>
			        </form>
			        <br />
			        <p class="text-danger">{this.state.error}</p>
			        <p>
			            New User? 
			            <Link to={'/signup'}>Signup</Link>
			        </p>
			    </div>

			    {this.state.fireRedirect && <Redirect to='/dashboard' push={true} />}
			</div>
		);
	}
}