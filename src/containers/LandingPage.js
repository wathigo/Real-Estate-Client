import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Nav from '../components/Nav';
import Categories from '../components/Category';

const LandingPage = props => {
  const {
    user, categories, handleChange, toggleForm, logOut, scrollTo,
  } = props;
  return (
    <div className="landing-page">
      <input id="toggle" className="toggle" type="checkbox" />
      <Nav currentUser={user} toggleForm={toggleForm} logOut={logOut} scrollTo={scrollTo} />
      <h2>THE BEST WAY TO FIND</h2>
      <h1>YOUR PERFECT PROPERTY</h1>
      <Categories handleChange={handleChange} categories={categories.categories} />
    </div>
  );
};

const mapStateToProps = (state => state);

/* eslint-disable react/forbid-prop-types */
LandingPage.propTypes = {
  user: PropTypes.object.isRequired,
  categories: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  toggleForm: PropTypes.func.isRequired,
  logOut: PropTypes.func.isRequired,
  scrollTo: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(LandingPage);
