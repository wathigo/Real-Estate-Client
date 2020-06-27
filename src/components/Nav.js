import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import Avatar from 'react-avatar';
import PropTypes from 'prop-types';

const Nav = props => {
  const {
    currentUser, logOut, toggleForm, scrollTo,
  } = props;
  const loggedIn = Object.prototype.hasOwnProperty.call(currentUser, 'currentUser');

  const toggleLogin = ev => {
    ev.preventDefault();
    toggleForm('login');
  };

  const toggleSignup = ev => {
    ev.preventDefault();
    toggleForm('signup');
  };

  const logOutUser = ev => {
    ev.preventDefault();
    logOut();
  };

  const moveTo = event => {
    const name = event.target.id;
    if (name === 'to-reasons') {
      scrollTo('reasons');
    } else if (name === 'to-properties') {
      scrollTo('land-prop');
    }
  };

  /* eslint-disable-next-line max-len */
  /* eslint-disable jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */
  if (loggedIn) {
    return (
      <nav>
        <span id="open-menu">&#9776;</span>
        <span id="close-menu">&#10006;</span>
        <span className="logo">
          <FontAwesomeIcon icon={faHome} />
          Real Estate
        </span>

        <ul>
          <li>
            <span id="to-properties" onClick={moveTo} className="nav-items">
              Our Properties
            </span>
          </li>
          <li>
            <span id="to-reasons" onClick={moveTo} className="nav-items">
              Why Us
            </span>
          </li>
          <li>
            <Avatar email={currentUser.currentUser.email} size="40" />
            <span className="nav-items">
              {' '}
              { currentUser.currentUser.name }
              {' '}
            </span>
          </li>
          <li>
            <span onClick={logOutUser} className="nav-items">
              Log out
            </span>
          </li>
        </ul>
      </nav>
    );
  } return (
    <nav>
      <span id="open-menu">&#9776;</span>
      <span id="close-menu">&#10006;</span>
      <span className="logo">
        <FontAwesomeIcon icon={faHome} />
        Real Estate
      </span>

      <ul>
        <li>
          <span id="to-properties" onClick={moveTo} className="nav-items">
            Our Properties
          </span>
        </li>
        <li>
          <span id="to-reasons" onClick={moveTo} className="nav-items">
            Why Us
          </span>
        </li>
        <li>
          <span className="nav-items" href="#" onClick={toggleLogin}>Sign In</span>
        </li>
        <li>
          <span className="nav-items" onClick={toggleSignup}>Sign Up</span>
        </li>
      </ul>
    </nav>
  );
};

/* eslint-disable react/forbid-prop-types */
Nav.propTypes = {
  currentUser: PropTypes.object.isRequired,
  logOut: PropTypes.func.isRequired,
  toggleForm: PropTypes.func.isRequired,
  scrollTo: PropTypes.func.isRequired,
};

export default Nav;
