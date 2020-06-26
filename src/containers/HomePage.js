import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import LandingPage from './LandingPage';
import * as ActionCreators from '../actions';
import Loading from '../components/Spinner';
import Properties from './Properties';
import WhyUs from '../components/WhyUs';
import Login from '../auth/Login';
import SignUp from '../auth/SignUp';
import animateScroll from '../scroll/animate_scroll';
import scrollUp from '../module/back_to_top';
import SyncInfo from '../components/SyncInfo';
import PropertyItem from '../components/PropertyItem';

const HomePage = (props) => {
    const { 
        fetchCategories, 
        loading, 
        spin, 
        fetchProperties, 
        properties, 
        addToFavourites, 
        favourites, 
        fetchAllFavourites, 
        sync_info, 
        syncInfo,
        removeFavouritesError,
        current_property,
        currentScroll,
        logOutUser,
    } = props;

    const curr_scroll = () => {
        return window.scrollY || window.scrollTop || document.getElementsByTagName("html")[0].scrollTop;
    }

    useEffect(() => {
        loading(true);
        handleFetch();

        return () => {
            currentScroll(curr_scroll);
        }
      }, [fetchCategories, loading, fetchProperties]);

      async function handleFetch() {
        await Promise.all([fetchCategories(), fetchProperties(), fetchAllFavourites()]);
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

      const favouriteProperties = favourites === {} ? favourites : favourites.favourites


      const toggleForm = (name) => {
          const currentScrollTop = curr_scroll();
          if(name === 'signup') {
              closeForm('login');
          } else {
              closeForm('signup');
          }
          const login = document.querySelector(`.${name}`);
          if(login){
            login.style.top = `${ currentScrollTop }px`;
            login.style.bottom = 0;
          }
      }

      const closeForm = (name) => {
        const domEl = document.querySelector(`.${name}`)
        if(domEl) {
            domEl.style.top = `${-1000}px`;
            domEl.style.bottom = `${10000}px`;
        }
      }

      const addFavourites = (property_id => {
          addToFavourites(property_id);
      })

      if(favourites.error === "Not Authorized") {
          syncInfo("You need to log in before perfoming this action!")
          setTimeout(() => {
              syncInfo("");
          }, 1000)
          toggleForm('login');
          removeFavouritesError()
      } else if (favourites.error) {
            syncInfo("Already added to favourites!");
            removeFavouritesError()
            setTimeout(() => {
                syncInfo("")
            }, 3000)
      }

      if (spin) {
        return (
            <Loading/>
        )
    }
    if(current_property) {
        return (
            <div className='home-page'>
                <SyncInfo info={ sync_info }/>
                <PropertyItem property={ current_property }/>
            </div>
            
        )
    } else {
        return (
            <div className='home-page' id='h-pg'>
                <SyncInfo info={ sync_info }/>
                <SignUp closeSignUp={ closeForm } toggleForm={ toggleForm } />
                <Login closeLogin={ closeForm } toggleForm={ toggleForm }/>
                <LandingPage handleChange={ handleChange } logOut={ logOutUser } toggleForm={ toggleForm } />
                <Properties properties={ properties.properties } favourites={favouriteProperties} addToFavourites={ addFavourites } />
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
    addToFavourites: (property_id) => dispatch(ActionCreators.addToFavourites(property_id)),
    fetchAllFavourites: () => dispatch(ActionCreators.fetchAllFavourites()),
    syncInfo: (info) => dispatch(ActionCreators.syncInfo(info)),
    removeFavouritesError: () => dispatch(ActionCreators.removeFavouritesError()),
    currentScroll: (scroll) => dispatch(ActionCreators.currentScroll(scroll)),
    logOutUser: () => dispatch(ActionCreators.logOutUser()),
});

/* eslint-disable react/forbid-prop-types */
HomePage.propTypes = {
    properties: PropTypes.object.isRequired,
    favourites: PropTypes.object.isRequired,
    fetchCategories: PropTypes.func.isRequired,
    fetchProperties: PropTypes.func.isRequired,
    addToFavourites: PropTypes.func.isRequired,
    fetchAllFavourites: PropTypes.func.isRequired,
    syncInfo: PropTypes.func.isRequired,
    removeFavouritesError: PropTypes.func.isRequired,
    currentScroll: PropTypes.func.isRequired,
    logOutUser: PropTypes.func.isRequired,
  };

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);