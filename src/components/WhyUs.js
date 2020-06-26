import React from 'react';
import {
  faBuilding, faChartLine, faFileSignature, faFlagCheckered, faCertificate, faNeuter,
} from '@fortawesome/free-solid-svg-icons';

import Reason from './Reason';
import reasons from '../data/reasons';

const WhyUs = () => {
  const icons = [faBuilding, faChartLine, faFileSignature, faFlagCheckered, faCertificate, faNeuter];
  const reason_items = reasons.map((reason, index) => <Reason key={reason.tittle} reason={reason} icon={icons[index]} />);

  return (
    <div className="why-us">
      <h3>WHY CHOOSE US</h3>
      { reason_items }
    </div>
  );
};

export default WhyUs;
