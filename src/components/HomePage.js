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
import SyncInfo from './SyncInfo';

const HomePage = (props) => {
    const { 
        current_user, 
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
    } = props;
    console.log(props)

    useEffect(() => {
        loading(true);
        handleFetch();
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


      const toggleLogin = () => {
          const currentScrollTop = window.scrollY || window.scrollTop || document.getElementsByTagName("html")[0].scrollTop;
          const login = document.querySelector('.login');
          if(login){
            login.style.top = `${ currentScrollTop }px`;
            login.style.bottom = 0;
          }
      }

      const closeLogin = (evt) => {
        evt.preventDefault();
        const elId = evt.target.id;
        if(elId === 'closeLogin'){
            const login = document.querySelector('.login')
            login.style.top = `${-1000}px`;
            login.style.bottom = `${10000}px`;
        }
      }

      const addFavourites = (property_id => {
          addToFavourites(property_id);
      })

      if(favourites.error === "Not Authorized") {
          toggleLogin();
          removeFavouritesError()
      } else if (favourites.error) {
            syncInfo("Already added to favourites!");
            removeFavouritesError()
            setTimeout(() => {
                syncInfo("")
                console.log("Done!!!")
            }, 1000)
      }

      if (spin) {
        return (
            <Loading/>
        )
    } else {
        return (
            <div className='home-page' id='h-pg'>
                <SyncInfo info={ sync_info }/>
                <SignUp/>
                <Login closeLogin={ closeLogin }/>
                <LandingPage handleChange={ handleChange } />
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
    removeFavouritesError: () => dispatch(ActionCreators.removeFavouritesError())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);