import React, { Component } from 'react'

export class Login extends Component {
  render(){
              return (
                 <div>
                 <div id="login">
                          <input type="email" id="email" placeholder="Email"/>
                          <input type="password" id="password" placeholder="Password"/>
                          <button id="send">Send</button>
                  </div>                
           </div>
            )
      }
}
