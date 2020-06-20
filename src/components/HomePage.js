import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import LandingPage from './LandingPage';
import * as ActionCreators from '../actions';
import Loading from './Spinner';
import Properties from './Properties';
import WhyUs from './WhyUs';
import animateScroll from '../scroll/animate_scroll';

const HomePage = (props) => {
    const { current_user, fetchCategories, loading, spin, fetchProperties, properties } = props;


    useEffect(() => {
        loading(true);
        handleFetch();
      }, [fetchCategories, loading, fetchProperties]);

      async function handleFetch() {
        await Promise.all([fetchCategories(), fetchProperties()]);
        loading(false);
      }

      const handleChange = (event) => {
          const name = event.target.value;
          if(name === 'Housing Properties') {
              animateScroll('house-prop');
          } else if(name === 'Land Properties') {
              animateScroll('land-prop');
          }
      }

      if (spin) {
        return (
            <Loading/>
        )
    } else {
        return (
            <div className='home-page'>
                <LandingPage handleChange={ handleChange } />
                <Properties properties={ properties.properties } />
                <WhyUs/>
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