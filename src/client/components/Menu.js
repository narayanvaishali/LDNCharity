import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col,
  Jumbotron,
  Button
} from 'reactstrap';


//https://codepen.io/Lakston/pen/ALvgKB
class MenuLinks extends React.Component {
  constructor(props) {
    super(props);
    // Any number of links can be added here
    this.state = {
      links: [{
        text: 'Dashboard',
        link: 'https://github.com/Lakston',
        icon: 'fa-pencil-square-o'
      }, {
        text: 'Roles',
        link: 'https://github.com/Lakston',
        icon: 'fa-github'
      }, {
        text: 'Logout',
        link: 'https://twitter.com/Fab_is_coding',
        icon: 'fa-twitter'
      }]
    }
  }
  render() {
    let links = this.state.links.map((link, i) => <li ref={i + 1}><i aria-hidden="true" className={`fa ${link.icon}`}></i><a href={link.link} target="_blank">{link.text}</a></li>);

    return (
      <div className={this.props.menuStatus} id='menu'>
        <ul>
          {links}
        </ul>
      </div>
    )
  }
}

export class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
    this._menuToggle = this._menuToggle.bind(this);
    this._handleDocumentClick = this._handleDocumentClick.bind(this);
  }
  componentDidMount() {
    document.addEventListener('click', this._handleDocumentClick, false);
  }
  componentWillUnmount() {
    document.removeEventListener('click', this._handleDocumentClick, false);
  }
  _handleDocumentClick(e) {
    if (!this.refs.root.contains(e.target) && this.state.isOpen === true) {
      this.setState({
        isOpen: false
      });
    };
  }
  _menuToggle(e) {
    e.stopPropagation();
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    let menuStatus = this.state.isOpen ? 'isopen' : '';

    return (
      <div ref="root">
        <div className="menubar">
          <div className="hambclicker" onClick={this._menuToggle}></div>
          <div id="hambmenu" className={menuStatus}><span></span><span></span><span></span><span></span></div>
          <div className="title">
            <span> Welcome to London Charity Admin </span>
          </div>
        </div>
        <MenuLinks menuStatus={menuStatus} />
      </div>
    )
  }
}

//ReactDOM.render(<Menu title='Awesome Title'/>, document.getElementById('app'))