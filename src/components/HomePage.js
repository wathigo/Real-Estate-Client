import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import LandingPage from './LandingPage';
import { fetchCategories } from '../actions';


const HomePage = (props) => {
    const { current_user, fetchCategories } = props;

    useEffect(() => {
        fetchCategories();
      }, []);

    return (
        <div className='home-page'>
            <LandingPage />
        </div>
    )
}

const mapStateToProps = (state => state);

const mapDispatchToProps = dispatch => ({
    fetchCategories: () => dispatch(fetchCategories())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);