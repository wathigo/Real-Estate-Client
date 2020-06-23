import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import LandingPage from './LandingPage';
import * as ActionCreators from '../actions';
import Loading from './Spinner';
import Properties from './Properties';
import WhyUs from './WhyUs';
import Login from '../auth/Login';
import SignUp from '../auth/SignUp';
import animateScroll from '../scroll/animate_scroll';
import scrollUp from '../module/back_to_top';

const HomePage = (props) => {
    const { current_user, fetchCategories, loading, spin, fetchProperties, properties, addToFavourites, favourites } = props;
    console.log(props)


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

      const toggleLogin = () => {
          const currentScrollTop = window.scrollY || window.scrollTop || document.getElementsByTagName("html")[0].scrollTop;
          console.log(currentScrollTop);
          const login = document.querySelector('.login');
          login.style.top = `${ currentScrollTop }px`;
          login.style.bottom = 0;
      }

      if(favourites.error) {
          toggleLogin();
      }

      if (spin) {
        return (
            <Loading/>
        )
    } else {
        return (
            <div className='home-page' id='h-pg'>
                <SignUp/>
                <Login/>
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