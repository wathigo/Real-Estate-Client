import React, { useState }  from 'react';
import {connect} from 'react-redux';
import {signIn} from '../actions';

const Login = (props) => {
    const { signIn } = props;
    const [user, setUser] = useState({});

    const handleChange = (evt) => {
        setUser({...user, ...{[evt.target.name]: evt.target.value}})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        signIn(user);
    }

    return (
        <form onSubmit={handleSubmit}>
          <h1>Login to Your Account</h1>

          <label>Email</label>
          <input
            name='email'
            placeholder='Email'
            value={user['email']}
            onChange={handleChange}
            /><br/>
  
          <label>Password</label>
          <input
            type='password'
            name='password'
            placeholder='Password'
            value={user['password']}
            onChange={handleChange}
            /><br/>
  
          <input type='submit'/>
        </form>
      )
}

const mapDispatchToProps = dispatch => ({
    signIn: user => dispatch(signIn(user))
  })

  export default connect(null, mapDispatchToProps)(Login);