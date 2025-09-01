import React from 'react';
import PricingFeature from './PricingFeature';

const PricingCard = ({pricing}) => {
  const{name , price, features} = pricing;
  console.log(pricing);
  return (
    <div className='flex flex-col border bg-blue-400 rounded-2xl p-4'>
      {/* card header */}
      <div>
        <h1 className='text-7xl'>{name}</h1>
        <h3 className='text-3xl'>{price}</h3>
      </div>
      {/* card body */}
      <div className='bg-amber-300 text-black rounded-xl p-4 flex-1'>
        {
          features.map((feature ,index) => <PricingFeature key={index} feature={feature}></PricingFeature>)
        }
      </div>
      <button className="btn w-full mt-2">Subscribe</button>
    </div>
  );
};

export default PricingCard;