import React, { useState }  from 'react';
import {connect} from 'react-redux';
import Nav from './Nav'

const LandingPage = (props) => {
    const { current_user } = props;
    return (
        <div className='landing-page'>
            <Nav current_user={current_user}/>
        </div>
    )
}

const mapStateToProps = function (state) {
    return {
      current_user: state,
    };
  };

  export default connect(mapStateToProps)(LandingPage);