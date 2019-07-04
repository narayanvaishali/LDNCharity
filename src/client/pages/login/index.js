import React from 'react';
import { Link,Redirect } from 'react-router-dom';
//import { Redirect } from 'react-router';
import axios from 'axios';
import { config } from '../../utils/Config';
import Backendless from 'backendless';
import { Jumbotron, Button } from 'reactstrap';

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

    /*this.props.authenticate({
		    			name: 'Rachel Box',
		    			email: 'rachel.box@ldncharity.com',
		    			isLoggedIn: true
		    		});**/

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

   console.log(this.state);

       let success = false;
       let fail = false;
       var whereClause = "email = '"+ this.state.email +"'";

        console.log(whereClause);

  var queryBuilder = Backendless.DataQueryBuilder.create().setWhereClause( whereClause );

  Backendless.Data.of( "LDNUsers" ).find( queryBuilder )
	.then(response => {
		    	if (JSON.stringify(response) != "") {
          let _updatedobj = JSON.stringify(response);
        
          console.log(' _updatedobj '+ response[0].name);

		    		this.props.authenticate({
		    	    name:  response[0].name,
		    			email:  response[0].email,
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

   //update request
  /* data = [{"address":"10880 Malibu Point","created":1562255385597,"name":"Tony Stark","id":"1","updated":null,"objectId":"14C502C6-41BB-82C2-FFCC-9EC05AA5E300","ownerId":null,"___className":"LDNUsers"},{"address":"New York City, Brooklyn","created":1562255385597,"name":"Steve Rogers","id":"3","updated":null,"objectId":"157F16DC-3E92-C198-FF98-4C9AECAE7C00","ownerId":null,"___className":"LDNUsers"},{"address":"Palace in Asgard","created":1562255385597,"name":"Thor Odinson","id":"4","updated":null,"objectId":"9F43A8AF-6BEE-1CA0-FF58-A361A8F11300","ownerId":null,"___className":"LDNUsers"},{"address":"2766 Taylor Street","created":1562255385597,"name":"Bruce Banner","id":"2","updated":null,"objectId":"BC601CAD-28FB-A0D4-FFC4-3F17351FD700","ownerId":null,"___className":"LDNUsers"}]*/

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
			<div className="container-fluid">
			    <Jumbotron>
			        <h1>Please Login</h1>
			        <form onSubmit={this.handleSubmit}>
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
			            New User? 
			            <Link to={'/signup'}>Signup</Link>
			        </p>
			    </Jumbotron>

			    {this.state.fireRedirect && <Redirect to='/dashboard' push={true} />}
			</div>
		);
	}
}