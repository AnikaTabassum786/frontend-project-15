import React from 'react';
import PricingFeature from '../PricingFeature/PricingFeature';

const PricingCard = ({pricing}) => {
    // console.log(price)
    const {name,price,description,features}=pricing
    return (
        <div>
            <div className='bg-amber-500 text-white px-4 py-4 rounded-lg '>
                <p className='text-5xl'>{name}</p>
                <p className='text-lg'>{price}</p>

                <div className='text-sm mt-10 bg-amber-700 p-2 rounded-2xl'>{description}</div>

                <div className='mt-2 bg-amber-600 rounded-2xl  p-2 '>
                    <div className='h-[300px]'>
                    {
                        features.map(feature => <PricingFeature feature={feature}></PricingFeature> )
                    }
                    </div>
                </div>
                <button class="btn w-full mt-4">Subscribe</button>
            </div>
        </div>
    );
};

export default PricingCard;