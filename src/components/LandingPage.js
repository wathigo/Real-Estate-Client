import React, { useEffect }  from 'react';
import {connect} from 'react-redux';
import Nav from './Nav'
import Categories from './Category';

const LandingPage = (props) => {
    console.log(props)
    const { user, categories, spin } = props;
    return (
        <div className='landing-page'>
            <Nav current_user={user}/>
            <Categories categories={ categories.categories }/>
        </div>
    )
    
}

const mapStateToProps = (state => state);

  export default connect(mapStateToProps)(LandingPage);