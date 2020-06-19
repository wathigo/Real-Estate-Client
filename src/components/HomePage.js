import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import LandingPage from './LandingPage';
import * as ActionCreators from '../actions';
import Loading from './Spinner';


const HomePage = (props) => {
    const { current_user, fetchCategories, loading, spin, fetchProperties } = props;

    useEffect(() => {
        loading(true);
        handleFetch();
      }, [fetchCategories, loading, fetchProperties]);

      async function handleFetch() {
        await Promise.all([fetchCategories(), fetchProperties()]);
        loading(false);
      }

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
    },
    fetchProperties: () => dispatch(ActionCreators.fetchProperties()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);