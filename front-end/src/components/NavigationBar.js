import React, {Component} from 'react';
import {Navbar} from 'react-bootstrap';
import {Link} from "react-router-dom"

export default class NavigationBar extends Component {
    render() {
        return (
            <Navbar className="navbar-custom">
              <Navbar.Header>
                <Navbar.Brand>
                  <Link to="/"><strong>Automatic Information Extraction</strong></Link>
                </Navbar.Brand>
                <Navbar.Toggle />
              </Navbar.Header>
            </Navbar>
        );
    }
}
