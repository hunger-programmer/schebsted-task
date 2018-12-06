import PropTypes from 'prop-types';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Layout = ({ children }) => (
  <React.Fragment>
    <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
      <Link className="navbar-brand" to="/">
        Schibsted Music APP
      </Link>

      <div className="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/create">
              Create
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
    <main role="main" className="container">
      {children}
    </main>
  </React.Fragment>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
