import React from 'react';
import {
  faBuilding, faChartLine, faFileSignature, faFlagCheckered, faCertificate, faNeuter,
} from '@fortawesome/free-solid-svg-icons';

import Reason from './Reason';
import reasons from '../data/reasons';

const WhyUs = () => {
  const icons = [
    faBuilding,
    faChartLine,
    faFileSignature,
    faFlagCheckered,
    faCertificate,
    faNeuter,
  ];

  /* eslint-disable-next-line max-len */
  const reasonItems = reasons.map((reason, index) => <Reason key={reason.tittle} reason={reason} icon={icons[index]} />);

  return (
    <div className="why-us">
      <h3>WHY CHOOSE US</h3>
      { reasonItems }
    </div>
  );
};

export default WhyUs;
