import React from 'react';

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

export default SyncInfo;