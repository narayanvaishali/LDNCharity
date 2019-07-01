import React from 'react';
import axios from 'axios';
import { config } from '../../utils/Config';
import { Link, Redirect } from 'react-router-dom';

export default class Dashboard extends React.Component {

 /* render ()
  {
      return(
        <div>Dashboard Page </div>
      )
  }*/

	constructor(props) {
		super(props);

		this.state = {
			suggestions: [],
			searchedPlaces: []
		};

		this.getSearchedPlaces();

		this.logout = this.logout.bind(this);
		this.suggestLocations = this.suggestLocations.bind(this);
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

	suggestLocations(e) {
		const params = {
			input: e.target.value
		};

		// check if user has selected some place
		for (let i = 0; i < this.state.suggestions.length; i++) {
			let place = this.state.suggestions[i];
			if (place == params.input) {
				this.saveSearch(place);
				break;
			}
		}

		/*axios.post(config.baseUrl + 'dashboard/get/placeSuggestions', params)
		    .then(response => {
		    	if (response.data && response.data.success) {
		    		this.setState({
		    			suggestions: response.data.suggestions
		    		});
		    	} 
		    }).catch(err => {
		    	console.error(err);
		    });*/
	}

	saveSearch(place) {
		const params = {
			name: place
		};
    /*
		axios.post(config.baseUrl + 'dashboard/save/searchedPlace', params)
		    .then(response => {
		    	if (response.data && response.data.success) {
		    		console.log(response.data.place, ' Saved');
		    	} 
		    }).catch(err => {
		    	console.error(err);
		    });*/
	}

	getSearchedPlaces() {
	/*	axios.post(config.baseUrl + 'dashboard/get/searchedPlaces', {})
		    .then(response => {
		    	if (response.data && response.data.success) {
		    		this.setState({
		    			searchedPlaces: response.data.searchedPlaces
		    		});
		    	} 
		    }).catch(err => {
		    	console.error(err);
		    });*/
	}

	render() {
		return (
			<div class="container-fluid">
			    <div class="jumbotron">
			        <p>
			            <button class="btn btn-primary" onClick={this.logout}>Logout</button>
			        </p>
			        <h1>Hello {this.props.user.name}</h1>
			        <br />
			    </div>
			</div>   
		);
	}
}