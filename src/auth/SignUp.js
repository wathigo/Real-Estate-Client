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

  return ( // eslint-disable-line jsx-a11y/click-events-have-key-events
    <div className="signup">
      <span id="closeSignup" onClick={closeForm}>&#10006;</span>
      <form onSubmit={handleSubmit}>
        <h1>Sign Up For An Account</h1>

        <label htmlFor="name">Name</label>
        <input
          name="name"
          placeholder="Name"
          value={user.name}
          onChange={handleChange}
        />
        <br />

        <label htmlFor="email">Email</label>
        <input
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={handleChange}
        />
        <br />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={user.password}
          onChange={handleChange}
        />
        <br />

        <label htmlFor="password_confirmation">Password Confirmation</label>
        <input
          type="password"
          name="password_confirmation"
          placeholder="Password Confirmation"
          value={user.password_confirmation}
          onChange={handleChange}
        />
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
