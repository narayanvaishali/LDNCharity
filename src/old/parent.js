import React, { Component } from 'react'
 import { Signup } from './signup';
 import { Login } from './login';

export class Parent extends Component{
  constructor (props) {
    this.state = {
      signup:false,
      login:true
   };
  }
  switch = (word) => {
     
        var signup,login;
        if(word == "signup"){signup = true;login = false;}
        else{login = true; signup = false;} 
        this.setState({
          login: login,
          signup: signup
        });
  }

  render(){
      var self = this;
        return (
              <div>
                      <div id="buttons">
                         <p id="signupButton" 
                         className={self.state.signup ? "yellow":"blue"}
                         onClick={self.switch.bind(null,"signup")} >Sign In</p>
                     
                      <p id="loginButton" onClick={self.switch.bind(null,"login")} 
                       className={self.state.login ? "yellow":"blue"}
                      > Login</p>
                      </div>
              
                   {self.state.signup? <Signup /> : null}
                   {self.state.login? <Login /> : null}
             </div>        
        )
  }
}

