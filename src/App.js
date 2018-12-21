// App.js  raspberry-spy
// All this component does is declare the user interface.
// The real work is done in components included here.

// React
import React, { Component } from 'react'
import {BrowserRouter, Link, Route, Redirect, Switch} from 'react-router-dom'

// Bootstrap (reactstrap in this case)
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Button
} from 'reactstrap'

// My own React components
import Home from './home'
import About from './about'
import Contact from './contact'
import NotFound from './notfound'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

class PrimaryLayout extends Component {
    constructor() {
        super();
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
          <div>
             <Navbar color="light" light expand="md">
                <NavbarBrand href="/">
                  <span id="sitelogo"></span>
                  <span id="sitename"></span>
                </NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>

                  <Nav className="ml-auto" navbar>

                  <NavItem>
                    <NavLink href="/about">About</NavLink>
                  </NavItem>

                  <NavItem>
                      <NavLink href="/contact">Contact us</NavLink>
                  </NavItem>

                  </Nav>
                </Collapse>
              </Navbar>

              <Switch>
                  <Route exact path="/"         component={Home} />
                  <Route       path="/about"    component={About} />
                  <Route       path="/contact"  component={Contact} />
                  <Route       path="/404"      component={NotFound} />
                  <Redirect to="/404" />
              </Switch>

          </div>
        );
    }
}

const App = () => (
    <BrowserRouter>
    <PrimaryLayout/>
    </BrowserRouter>
)
export default App;

console.log('App loaded.')
