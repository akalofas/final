import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);
    
    return (
        <div class="alert alert-dark" role="alert" className='alert alert-secondary'>
            <span>Budget: $  <input
                        required='required'
                        type='number'
                        id='cost'
                        value={budget}
                        style={{ marginLeft: '2rem' , size: 10, width: 150}}
                        onChange={(event) => (event.target.value)}>
                        </input> </span>
        </div>
    );
};
export default Budget;
