import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Auth = props => {
  const {
    action, login, closeForm, toggleForm, syncInfo,
  } = props;

  const [user, setUser] = useState({});

  const loginInfo = 'User Login async action in progress';
  const signupInfo = 'User account creation async action in progress';
  const header = login === true ? 'Login to Your Account' : 'Sign Up for an Account';

  const handleChange = evt => {
    setUser({ ...user, ...{ [evt.target.name]: evt.target.value } });
  };

  const handleSubmit = event => {
    event.preventDefault();
    const info = login === true ? loginInfo : signupInfo;
    syncInfo(info);
    action(user);
  };

  /* eslint-disable-next-line max-len */
  /* eslint-disable jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */
  return (
    <div>
      <span id="closeForm" onClick={closeForm}>&#10006;</span>
      <form onSubmit={handleSubmit}>
        <h4>
          {' '}
          { header }
        </h4>
        { !login && (
        <label htmlFor="name">
          Name
          <input
            name="name"
            placeholder="Name"
            value={user.name}
            onChange={handleChange}
          />
        </label>
        )}
        <br />
        <label htmlFor="email">
          Email
          <input
            name="email"
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
            placeholder="Password"
            value={user.password}
            onChange={handleChange}
          />
        </label>

        <br />

        { !login && (
        <label htmlFor="password_confirmation">
          Password Confirmation
          <input
            type="password"
            name="password_confirmation"
            placeholder="Password Confirmation"
            value={user.password_confirmation}
            onChange={handleChange}
          />
        </label>
        )}
        <br />
        <input type="submit" onClick={closeForm} />
        { login && (
        <p>
          Don&apos;t have an account?
          <span onClick={toggleForm}> Sign Up</span>
        </p>
        )}
        { !login && (
        <p>
          Already have an account?
          <span onClick={toggleForm}> Login</span>
        </p>
        )}
      </form>
    </div>

  );
};

/* eslint-disable react/forbid-prop-types */
Auth.propTypes = {
  action: PropTypes.func.isRequired,
  closeForm: PropTypes.func.isRequired,
  toggleForm: PropTypes.func.isRequired,
  syncInfo: PropTypes.func.isRequired,
  login: PropTypes.bool.isRequired,
};

export default Auth;
