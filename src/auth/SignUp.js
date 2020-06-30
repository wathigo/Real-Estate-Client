import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createUser } from '../actions';

import Auth from './Auth';

const SignUp = props => {
  const {
    createUser, closeSignUp, toggleForm, syncInfo,
  } = props;

  const closeForm = () => {
    closeSignUp('signup');
  };

  const toggleLogin = () => {
    toggleForm('login');
  };

  return (
    <div className="signup">
      <Auth
        login={false}
        action={createUser}
        toggleForm={toggleLogin}
        closeForm={closeForm}
        syncInfo={syncInfo}
      />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  createUser: userInfo => dispatch(createUser(userInfo)),
});

/* eslint-disable react/forbid-prop-types */
SignUp.propTypes = {
  createUser: PropTypes.func.isRequired,
  closeSignUp: PropTypes.func.isRequired,
  toggleForm: PropTypes.func.isRequired,
  syncInfo: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(SignUp);
