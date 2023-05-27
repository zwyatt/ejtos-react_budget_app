import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, expenses } = useContext(AppContext);

    const changeBudget = (value) => {
        const totalExpenses = expenses.reduce((total, item) => {
            return (total = total + item.cost);
        }, 0);

        if(value > 20000) {
            alert('Budget cannot exceed $20,000.');
        } else if(value < totalExpenses) {
            alert('Budget cannot be lower than the expenses.');
        } else {
            dispatch({
                type: 'SET_BUDGET',
                payload: value
            });
        }
    }
    return(
        <div className='alert alert-secondary'>
            <span>Budget: $ <input type='number' name='test' value={budget} step='10' min='0' onChange={(event) => changeBudget(event.target.value)}></input></span>
        </div>
    );
};
export default Budget;