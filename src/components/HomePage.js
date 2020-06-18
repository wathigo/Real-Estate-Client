import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import LandingPage from './LandingPage';
import * as ActionCreators from '../actions';
import Loading from './Spinner';


const HomePage = (props) => {
    const { current_user, fetchCategories, loading, spin } = props;

    useEffect(() => {
        console.log("Before Dispatch")
        loading(true);
        console.log("After Dispatch")
        fetchCategories();
      }, []);

      if (spin) {
        return (
            <Loading/>
        )
    } else {
        return (
            <div className='home-page'>
                <LandingPage />
            </div>
        )
    }
}

const mapStateToProps = (state => state);

const mapDispatchToProps = dispatch => ({
    fetchCategories: () => dispatch(ActionCreators.fetchCategories()),
    loading: (value) => {
        dispatch(ActionCreators.loading(value))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);