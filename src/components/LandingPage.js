import React, { useEffect }  from 'react';
import {connect} from 'react-redux';
import Nav from './Nav'
import Categories from './Category';

const LandingPage = (props) => {
    const { user, categories, handleChange, toggleForm, logOut } = props;
    console.log(user)
    return (
        <div className='landing-page'>
            <Nav current_user={user} toggleForm={ toggleForm } logOut={ logOut }/>
            <h2>THE BEST WAY TO FIND</h2>
            <h1>YOUR PERFECT PROPERTY</h1>
            <Categories handleChange={ handleChange } categories={ categories.categories }/>
        </div>
    )
    
}

const mapStateToProps = (state => state);

  export default connect(mapStateToProps)(LandingPage);