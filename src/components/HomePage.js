import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import LandingPage from './LandingPage';
import * as ActionCreators from '../actions';


const HomePage = (props) => {
    const { current_user, fetchCategories, loading } = props;

    useEffect(() => {
        console.log("Before Dispatch")
        loading(true);
        console.log("After Dispatch")
        fetchCategories();
      }, [fetchCategories]);

    return (
        <div className='home-page'>
            <LandingPage />
        </div>
    )
}

const mapStateToProps = (state => state);

const mapDispatchToProps = dispatch => ({
    fetchCategories: () => dispatch(ActionCreators.fetchCategories()),
    loading: (value) => {
        dispatch(ActionCreators.isLoading(value))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);