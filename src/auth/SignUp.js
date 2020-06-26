import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createUser, syncInfo } from '../actions';

const SignUp = props => {
  const { createUser, closeSignUp, toggleForm } = props;
  const [user, setUser] = useState({});

  const handleChange = evt => {
    setUser({ ...user, ...{ [evt.target.name]: evt.target.value } });
  };

  const handleSubmit = event => {
    event.preventDefault();
    syncInfo('User account creation async action in progress');
    createUser(user);
  };

  const closeForm = () => {
    closeSignUp('signup');
  };

  const toggleLogin = () => {
    toggleForm('login');
  };

  /* eslint-disable-next-line max-len */
  /* eslint-disable jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */
  return (
    <div className="signup">
      <span id="closeSignup" onClick={closeForm}>&#10006;</span>
      <form onSubmit={handleSubmit}>
        <h1>Sign Up For An Account</h1>

        <label htmlFor="name">
          Name
          <input
            name="name"
            id="name"
            placeholder="Name"
            value={user.name}
            onChange={handleChange}
          />
        </label>

        <br />

        <label htmlFor="email">
          Email
          <input
            name="email"
            id="email"
            placeholder="Email"
            value={user.email}
            onChange={handleChange}
          />
        </label>
        <br />

        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={user.password}
            onChange={handleChange}
          />
        </label>
        <br />

        <label htmlFor="password_confirmation">
          Password Confirmation
          <input
            type="password"
            name="password_confirmation"
            id="password_confirmation"
            placeholder="Password Confirmation"
            value={user.password_confirmation}
            onChange={handleChange}
          />
        </label>
        <br />

        <input type="submit" onClick={closeForm} />
        <p>
          Already have an account?
          <span onClick={toggleLogin}> Log In</span>
        </p>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  createUser: userInfo => dispatch(createUser(userInfo)),
  syncInfo: info => dispatch(syncInfo(info)),
});

/* eslint-disable react/forbid-prop-types */
SignUp.propTypes = {
  createUser: PropTypes.func.isRequired,
  closeSignUp: PropTypes.func.isRequired,
  toggleForm: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(SignUp);
