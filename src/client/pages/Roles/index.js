import React, {Component} from 'react';
import { Link,Redirect } from 'react-router-dom';
import { fetchRoles } from '../../../actions/roleactions';
import { Jumbotron, Button } from 'reactstrap';
//import { Authorization } from '../../client/components/Auth';

export default class Roles extends Component {

  constructor (props){
      super(props);  
    }

  render ()
    {
        return(
          <div>Role Page</div>
        )
    }
}







