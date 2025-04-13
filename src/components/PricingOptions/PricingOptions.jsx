import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';

const PricingOptions = ({pricingPromise}) => {
    const pricingData = use(pricingPromise)
    console.log(pricingData)
    return (
        <div className='container mx-auto '>
           <div className='grid grid-cols-3 gap-10 '>
           {
                pricingData.map(pricing=><PricingCard key={pricing.id} pricing={pricing}></PricingCard>)
            }
           </div>
        </div>
    );
};

export default PricingOptions;