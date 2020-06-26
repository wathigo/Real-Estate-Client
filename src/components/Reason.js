import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

const Reason = props => {
  const { reason, icon } = props;

  return (
    <div className="reason">
      <FontAwesomeIcon icon={icon} />
      <div className="fl-right">
        <h4>
          { reason.title }
        </h4>
        <p>
          { reason.desc }
        </p>
      </div>
    </div>
  );
};

Reason.propTypes = {
  reason: PropTypes.object.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Reason;
