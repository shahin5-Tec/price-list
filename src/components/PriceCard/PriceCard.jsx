import React from 'react';
import Feature from '../Feature/Feature';

const PriceCard = ({price}) => {
    return (
        <div className='bg-indigo-400 mt-5 rounded mx-5 p-4 flex flex-col'>
            <h2 className='text-center'>
                <span className='text-5xl  font-bold text-purple-700'>{price.price}</span>
                <span className='text-2xl  text-white font-bold'>/mon</span>
            </h2>
         <h5 className='text-4xl font-bold my-5 '>{price.name}</h5>
         <p className='underline font-bold text-white mb-2'>Features</p>
         {
            price.features.map((feature,idx)=><Feature
            key = {idx}
                feature = {feature}
            ></Feature>)
         }
          <button className='text-white font-bold w-full bg-green-500 py-2 rounded-md mt-auto hover:bg-slate-900 '>Buy Now</button>
        </div>
    );
};

export default PriceCard;