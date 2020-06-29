import React from 'react';
import PropTypes from 'prop-types';

const SyncInfo = ({ info }) => !!info && (
  <div className="sync-overlay">
        <p>
          {' '}
          {info}
          {' '}
        </p>
      </div>
)

SyncInfo.propTypes = {
  info: PropTypes.string.isRequired,
};

export default SyncInfo;
