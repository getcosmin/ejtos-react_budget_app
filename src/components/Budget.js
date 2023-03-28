import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, expenses } = useContext(AppContext);
    const [currentBudget, setCurrentBudget] = useState(budget);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    function modifyBudget(value) {
        if (value > 20000 ) {
            alert("The budget cannot exceed 20000");
            setCurrentBudget(2000);
            return;
        }
        if (currentBudget < totalExpenses) {
            alert("The budget cannot be lower than the spending.");
            setCurrentBudget(totalExpenses);
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
