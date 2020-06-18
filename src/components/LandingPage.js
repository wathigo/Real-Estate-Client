import React, { useEffect }  from 'react';
import {connect} from 'react-redux';
import Nav from './Nav'

const LandingPage = (props) => {
    const { fetchCategories, current_user } = props;
    return (
        <div className='landing-page'>
            <Nav current_user={current_user}/>
        </div>
    )
}

const mapStateToProps = (state => state);

  export default connect(mapStateToProps)(LandingPage);