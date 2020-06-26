import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { signIn } from '../actions';

const Login = props => {
  const { signIn, closeLogin, toggleForm } = props;
  const [user, setUser] = useState({});

  const handleChange = evt => {
    setUser({ ...user, ...{ [evt.target.name]: evt.target.value } });
  };

  const handleSubmit = event => {
    event.preventDefault();
    signIn(user);
  };

  const closeForm = () => {
    closeLogin('login');
  };

  const toggleSignUp = () => {
    toggleForm('signup');
  };

  /* eslint-disable-next-line max-len */
  /* eslint-disable jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */
  return (
    <div className="login">
      <span id="closeLogin" onClick={closeForm}>&#10006;</span>
      <form onSubmit={handleSubmit}>
        <h4>Login to Your Account </h4>

        <label htmlFor="email">
          Email
          <input
            name="email"
            placeholder="Email"
            id="email"
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

        <input type="submit" onClick={closeForm} />
        <p>
          Don&apos;t have an account?
          <span onClick={toggleSignUp}> Sign Up</span>
        </p>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  signIn: user => dispatch(signIn(user)),
});

Login.propTypes = {
  signIn: PropTypes.func.isRequired,
  closeLogin: PropTypes.func.isRequired,
  toggleForm: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
