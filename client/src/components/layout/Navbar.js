import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-success mb-3 py-0">
          <div className="container">
            <Link to="/" className="navbar-brand">
              LiveLearn
            </Link>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/dashboard" className="nav-link">
                  Dashboard
                </Link>
              </li>
            </ul>

            <div>
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <a href="/" className="nav-link">
                    Login
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/" className="nav-link">
                    Register
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
