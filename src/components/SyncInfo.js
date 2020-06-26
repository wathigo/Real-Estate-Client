import React from 'react';
import PropTypes from 'prop-types';

const SyncInfo = (props) => {
    const { info } = props;
    if(info !== "") {
        return (
            <div className='sync-overlay'>
                <p> {info} </p>
            </div>
        )
    } else {
        return (
            ""
        );
    }
    
}

SyncInfo.propTypes = {
    info: PropTypes.string.isRequired,
  };

export default SyncInfo;