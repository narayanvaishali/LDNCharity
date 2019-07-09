import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Nav
} from 'reactstrap';
import PerfectScrollbar from 'react-perfect-scrollbar';
//import Roles from '../../client/pages/roles';
import Roles from '../pages/Roles';
/*
var ThemeRoutes = [
    {
      path: '/pages/Roles',
      name: 'Roles',
      icon: 'mdi mdi-adjust',
      component: Roles
    },
    {
      path: '/pages/home',
      name: 'Home',
      icon: 'mdi mdi-comment-processing-outline',
      component: Home
    }
 ]*/

export class Sidebar extends React.Component {
  constructor(props) {
      super(props);
     // this.expandLogo = this.expandLogo.bind(this);
      this.activeRoute.bind(this);
      this.state = {
        dropdownOpen: false
      };
      this.toggle = this.toggle.bind(this);
    }

    
    toggle() {
      this.setState(prevState => ({
        dropdownOpen: !prevState.dropdownOpen
      }));
    }

    /*--------------------------------------------------------------------------------*/
  /*Verifies if routeName is the one active (in browser input)                      */
  /*--------------------------------------------------------------------------------*/
  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1
      ? 'selected'
      : '';
  }


   render() {
    return (
      <aside
        className="left-sidebar"
        id="sidebarbg"
        data-sidebarbg="skin6"
        onMouseEnter={this.expandLogo}
        onMouseLeave={this.expandLogo}
      >
        <div className="scroll-sidebar">
          <PerfectScrollbar className="sidebar-nav">
            <Nav id="sidebarnav">
                    <li key="1">
                      <NavLink
                        to={'/roles'}
                        className="sidebar-link"
                        activeClassName="active"
                      >
                        <span className="hide-menu">roles</span><br/>
                      </NavLink>
                    </li>
                    <li key="2">
                      <NavLink
                        to={'/roles'}
                        className="sidebar-link"
                        activeClassName="active"
                      >
                        <span className="hide-menu">dash</span>
                      </NavLink>
                    </li>
            </Nav>
          </PerfectScrollbar>
        </div>
      </aside>
    );
  }
}