import React from 'react';

const PriceCard = ({price}) => {
    return (
        <div className='bg-indigo-400 mt-5 rounded mx-5'>
            <h2 className='text-center'>
                <span className='text-5xl  font-bold text-purple-700'>{price.price}</span>
                <span className='text-2xl  text-white font-bold'>/mon</span>
            </h2>
         <h5 className='text-4xl font-bold my-5 '>{price.name}</h5>
        </div>
    );
};

export default PriceCard;