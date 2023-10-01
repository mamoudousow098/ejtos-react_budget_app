
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget , Currency, dispatch} = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
        console.log(newBudget);

        dispatch({
            type: 'SET_BUDGET',
            payload: event.target.value,
        })
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {Currency} {newBudget}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;