import React, { useState } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../actions';

const Login = (props) => {
  const { signIn, closeLogin } = props;
  const [user, setUser] = useState({});

  const handleChange = (evt) => {
    setUser({ ...user, ...{ [evt.target.name]: evt.target.value } })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    signIn(user);
  }

  const closeForm = (ev) => {
    closeLogin('login');
  }

  return (
    <div className='login'>
      <span id='closeLogin' onClick={ closeForm }>&#10006;</span>
      <form onSubmit={handleSubmit}>
        <h4>Login to Your Account </h4>

        <label>Email</label>
        <input
          name='email'
          placeholder='Email'
          value={user['email']}
          onChange={handleChange}
        /><br />

        <label>Password</label>
        <input
          type='password'
          name='password'
          placeholder='Password'
          value={user['password']}
          onChange={handleChange}
        /><br />

        <input type='submit' onClick={ closeForm } />
      </form>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  signIn: user => dispatch(signIn(user))
})

export default connect(null, mapDispatchToProps)(Login);