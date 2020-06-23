import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createUser } from '../actions';

const SignUp = (props) => {
  const { createUser } = props;
  const [user, setUser] = useState({});

  const handleChange = (evt) => {
    setUser({ ...user, ...{ [evt.target.name]: evt.target.value } })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    createUser(user);
  }

  return (
    <div className='signup'>
      <form onSubmit={handleSubmit}>
        <h1>Sign Up For An Account</h1>

        <label>Name</label>
        <input
          name='name'
          placeholder='Name'
          value={user['name']}
          onChange={handleChange}
        /><br />

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

        <label>Password Confirmation</label>
        <input
          type='password'
          name='password_confirmation'
          placeholder='Password Confirmation'
          value={user['password_confirmation']}
          onChange={handleChange}
        /><br />

        <input type='submit' />
      </form>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  createUser: userInfo => dispatch(createUser(userInfo))
})

export default connect(null, mapDispatchToProps)(SignUp);