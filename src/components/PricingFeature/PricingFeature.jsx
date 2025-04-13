import React from 'react';
import { CircleCheck } from 'lucide-react';

const PricingFeature = ({feature}) => {
    
    return (
        <div className='flex gap-2'>
            <p><CircleCheck></CircleCheck></p>
            <p>{feature}</p>
        </div>
    );
};

export default PricingFeature;