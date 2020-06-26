import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import Avatar from 'react-avatar';
import PropTypes from 'prop-types';

const Nav = props => {
  const { current_user, logOut, toggleForm } = props;
  const loggedIn = Object.keys(current_user).length !== 0;

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
            <a href="">
              Our Properties
            </a>
          </li>
          <li>
            <a href="#">
              Why Us
            </a>
          </li>
          <li>
            <Avatar email={current_user.currentUser.email} size="40" />
            <a href="#">
              {' '}
              { current_user.currentUser.name }
              {' '}
            </a>
          </li>
          <li>
            <a onClick={logOutUser} href="#">
              Log out
            </a>
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
          <a href="">
            Our Properties
          </a>
        </li>
        <li>
          <a href="#">
            About Us
          </a>
        </li>
        <li>
          <a href="#">
            Contact Us
          </a>
        </li>
        <li>
          <image src="#" />
          <a href="#" onClick={toggleLogin}>Sign In</a>
        </li>
        <li>
          <image src="#" />
          <a href="#" onClick={toggleSignup}>Sign Up</a>
        </li>
      </ul>
    </nav>
  );
};

Nav.propTypes = {
  current_user: PropTypes.object.isRequired,
  logOut: PropTypes.func.isRequired,
  toggleForm: PropTypes.func.isRequired,
};

export default Nav;
