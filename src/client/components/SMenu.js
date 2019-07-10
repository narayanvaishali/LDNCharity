import  React, {Component}  from 'react';
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';
import Home from '../pages/home';
import Login from '../pages/login';
import Signup from '../pages/signup';
import Dashboard from '../pages/dashboard';
import Roles from '../pages/Roles';

const routes =[
  {
    path : '/',
    exact : true,
    sidebar : () => <div>Home</div>,
    main : () => <h1>Home</h1>
  },
  {  
    path : '/Roles',
    sidebar : () => <div>Roles</div>,
    main : () => <div><Redirect to='/Roles' push={true} /></div>
    },
  {
    path : '/Logout',
    sidebar : () => <div>Logout</div>,
    main : () => <h1>Logout</h1>
  }
]

export  class SMenu extends  Component {

  constructor (props){
    super(props);
  }

render (){
  return(
    <Router>
      <div>
          <div>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/Roles'>Roles</Link></li>
                <li><Link to='/Logout'>Logout</Link></li>
            </ul>
            </div>
            <div style= {{flex :1, padding: '10px'}}> 
              {
              routes.map ((route) => (
                <Route 
                key = {route.path}
                path = {route.path}
                exact = {route.exact}
                component = {route.main}
                />
              ))
            }
            </div>
      </div>

     </Router>
  )
}
}