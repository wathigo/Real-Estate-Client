import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const Loading = () => (
  <div className="spinners-container">
    <Spinner animation="grow" size="md" variant="warning" />
    <Spinner animation="grow" size="md" variant="warning" />
    <Spinner animation="grow" size="md" variant="warning" />
  </div>
);

export default Loading;
