import React from 'react';
import laizy from '../../../images/laizy.jpg';

const NotFound = () => {
    return (
        <div>
            <h2 className='text-primary text-center'>Mechanic is sleeping</h2>
            <img className='w-100' src={laizy} alt="" />
        </div>
    );
};

export default NotFound;