import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { signIn } from '../actions';

import Auth from './Auth';

const Login = props => {
  const {
    signIn, closeLogin, toggleForm, syncInfo,
  } = props;

  const closeForm = () => {
    closeLogin('login');
  };

  const toggleSignUp = () => {
    toggleForm('signup');
  };

  return (
    <div className="login">
      <Auth
        login
        action={signIn}
        toggleForm={toggleSignUp}
        closeForm={closeForm}
        syncInfo={syncInfo}
      />
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
  syncInfo: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
