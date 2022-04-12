import React from 'react';
import Expert from '../Expert/Expert';
import experts1 from '../../../images/expert/sman2.jpg';
import experts2 from '../../../images/expert/sman3.jpg';
import experts3 from '../../../images/expert/sman4.jpg';
import experts4 from '../../../images/expert/sman5.jpg';

const experts = [
    { id: 1, name: 'wil Smit', img: experts1 },
    { id: 2, name: 'wil Roc', img: experts2 },
    { id: 3, name: 'hall kol', img: experts3 },
    { id: 4, name: 'wil kak', img: experts4 },

]

const Experts = () => {
    return (
        <div className='container'>
            <h1 className='text-primary text-center mt-5'>Our Experts</h1>
            <div className='row'>
                {
                    experts.map(expert => <Expert
                        key={expert.id}
                        expert={expert}
                    >

                    </Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;