import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, currency, dispatch, expenses } = useContext(AppContext);

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
            <label for='budget'>Budget: {currency}</label>
            <input type='number' name='budget' style={{ width: '175px' }} value={budget} step='10' min='0' onChange={(event) => changeBudget(event.target.value)}></input>
        </div>
    );
};
export default Budget;