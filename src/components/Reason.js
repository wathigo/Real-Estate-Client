import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Reason = (props) => {
    const { reason, icon } = props;

    return (
        <div className='reason'>
            <FontAwesomeIcon icon={ icon } />
            <div className='fl-right'>
                <h4>
                    { reason.title }
                </h4>
                <p>
                    { reason.desc }
                </p>
            </div>
        </div>
    )
}

export default Reason;