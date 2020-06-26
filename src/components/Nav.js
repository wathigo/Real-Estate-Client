import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import Avatar from 'react-avatar';
import PropTypes from 'prop-types';

const Nav = props => {
  const { currentUser, logOut, toggleForm } = props;
  const loggedIn = Object.keys(currentUser).length !== 0;

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

  if (loggedIn) {
    return (
      <nav>
        <span className="logo">
          <FontAwesomeIcon icon={faHome} />
          Real Estate
        </span>

        <ul>
          <li>
            <span className='nav-items'>
              Our Properties
            </span>
          </li>
          <li>
            <span className='nav-items'>
              Why Us
            </span>
          </li>
          <li>
            <Avatar email={currentUser.currentUser.email} size="40" />
            <span className='nav-items'>
              {' '}
              { currentUser.currentUser.name }
              {' '}
            </span>
          </li>
          <li>
            <span onClick={logOutUser} className='nav-items' >
              Log out
            </span>
          </li>
        </ul>
      </nav>
    );
  } return (
    <nav>
      <span className="logo">
        <FontAwesomeIcon icon={faHome} />
        Real Estate
      </span>

      <ul>
        <li>
          <span className='nav-items'>
            Our Properties
          </span>
        </li>
        <li>
          <span className='nav-items'>
            About Us
          </span>
        </li>
        <li>
          <span className='nav-items'>
            Contact Us
          </span>
        </li> 
        <li>
          <span className='nav-items' href="#" onClick={toggleLogin}>Sign In</span>
        </li>
        <li>
          <span className='nav-items' onClick={toggleSignup}>Sign Up</span>
        </li>
      </ul>
    </nav>
  );
};

Nav.propTypes = {
  currentUser: PropTypes.object.isRequired,
  logOut: PropTypes.func.isRequired,
  toggleForm: PropTypes.func.isRequired,
};

export default Nav;
