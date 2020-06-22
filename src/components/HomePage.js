import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import LandingPage from './LandingPage';
import * as ActionCreators from '../actions';
import Loading from './Spinner';
import Properties from './Properties';
import WhyUs from './WhyUs';
import animateScroll from '../scroll/animate_scroll';
import scrollUp from '../module/back_to_top';

const HomePage = (props) => {
    const { current_user, fetchCategories, loading, spin, fetchProperties, properties, addToFavourites } = props;


    useEffect(() => {
        loading(true);
        handleFetch();
      }, [fetchCategories, loading, fetchProperties]);

      async function handleFetch() {
        await Promise.all([fetchCategories(), fetchProperties()]);
        loading(false);
        scrollUp();
      }

      const handleChange = (event) => {
          const name = event.target.value;
          if(name === 'Housing Properties') {
              animateScroll('house-prop');
          } else if(name === 'Land Properties') {
              animateScroll('land-prop');
          }
          event.target.value = 'All'
      }

      if (spin) {
        return (
            <Loading/>
        )
    } else {
        return (
            <div className='home-page' id='h-pg'>
                <LandingPage handleChange={ handleChange } />
                <Properties properties={ properties.properties } addToFavourites={ addToFavourites } />
                <WhyUs/>
                <a id="back2Top" title="Back to top" href="#">&#10148;</a>
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
    addToFavourites: (property_id) => dispatch(ActionCreators.addToFavourites(property_id))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);