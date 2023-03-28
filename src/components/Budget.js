import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget } = useContext(AppContext);
    const [currentBudget, setCurrentBudget] = useState(budget);

    function modifyBudget(value) {
        if (value > 20000 ) {
            alert("The value cannot exceed 20000");
            setCurrentBudget(2000);
            return;
        }
        setCurrentBudget(value);
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: £</span>
            <input 
                type='number'
                value={currentBudget}
                style={{ marginLeft: '2rem' , size: 10}}
                onChange={(event) => modifyBudget(event.target.value)}
            />
        </div>
    );
};
export default Budget;
