import React, { useEffect }  from 'react';
import {connect} from 'react-redux';
import Nav from './Nav'
import Categories from './Category';
import Loading from './Spinner';

const LandingPage = (props) => {
    console.log(props)
    const { user, categories, isLoading } = props;
    if (!isLoading) {
        return (
            <Loading/>
        )
    } else {
        return (
            <div className='landing-page'>
                <Nav current_user={user}/>
                <Categories categories={ categories }/>
            </div>
        )
    }
}

const mapStateToProps = (state => state);

  export default connect(mapStateToProps)(LandingPage);