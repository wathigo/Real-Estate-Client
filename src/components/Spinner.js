import React from 'react';
import Spinner from 'react-bootstrap/Spinner'

const Loading = () => {
    return (
        <div className="spinners-container">
            <Spinner animation="grow" size="md" variant="primary" />
            <Spinner animation="grow" size="md" variant="primary" />
            <Spinner animation="grow" size="md" variant="primary" />
        </div>
    )
}

export default Loading;