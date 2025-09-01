import { CircleCheckBig } from 'lucide-react';
import React from 'react';

const PricingFeature = ({feature}) => {
  return (
    <div>
      <p className='flex gap-4 mt-3'> <CircleCheckBig></CircleCheckBig> {feature}</p>
    </div>
  );
};

export default PricingFeature;