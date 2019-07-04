import React from 'react';
import { Link,Redirect } from 'react-router-dom';
//import { Redirect } from 'react-router';
import axios from 'axios';
import { config } from '../../utils/Config';
import Backendless from 'backendless';

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

   //update request
  /* data = [{"address":"10880 Malibu Point","created":1562255385597,"name":"Tony Stark","id":"1","updated":null,"objectId":"14C502C6-41BB-82C2-FFCC-9EC05AA5E300","ownerId":null,"___class":"LDNUsers"},{"address":"New York City, Brooklyn","created":1562255385597,"name":"Steve Rogers","id":"3","updated":null,"objectId":"157F16DC-3E92-C198-FF98-4C9AECAE7C00","ownerId":null,"___class":"LDNUsers"},{"address":"Palace in Asgard","created":1562255385597,"name":"Thor Odinson","id":"4","updated":null,"objectId":"9F43A8AF-6BEE-1CA0-FF58-A361A8F11300","ownerId":null,"___class":"LDNUsers"},{"address":"2766 Taylor Street","created":1562255385597,"name":"Bruce Banner","id":"2","updated":null,"objectId":"BC601CAD-28FB-A0D4-FFC4-3F17351FD700","ownerId":null,"___class":"LDNUsers"}]*/

/*
  data = {"address":"10880 Malibu Point","name":"Tony Stark C","id":"1","objectId":"14C502C6-41BB-82C2-FFCC-9EC05AA5E300"}

  Backendless.Data.of( "LDNUsers" ).save( data )
  .then( function( savedObject ) {
      console.log(JSON.stringify(savedObject));
      console.log( "LDNUsers instance has been updated" );
    })
  .catch( function( error ) {
      console.log( "an error has occurred " + error.message );
    });
*/

   /* fetch('http://myjson.com/7x3fz', {
                method: 'POST',
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
                body:JSON.stringify({name: "Graham"})
            }).then((res) => res)
            .then((data) =>  console.log(data))
            .catch((err)=>console.log('here login error -> ' + err))      
    */

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