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

  return ( // eslint-disable-line jsx-a11y/click-events-have-key-events
    <div className="login">
      <span id="closeLogin" onClick={closeForm}>&#10006;</span>  
      <form onSubmit={handleSubmit}>
        <h4>Login to Your Account </h4>

        <label for='email'>Email</label>
        <input
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={handleChange}
        />
        <br />

        <label for='password'>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={user.password}
          onChange={handleChange}
        />
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
