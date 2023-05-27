import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { currency, dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    };

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload:expense
        });
    }

    return(
        <tr>
            <td>{props.name}</td>
            <td>{currency}{props.cost}</td>
            <td>
                <input
                    type='image'
                    src='http://www.clipartbest.com/cliparts/9iz/xrr/9izxrrkzT.gif'
                    alt='+'
                    style={{ width: '30px' }}
                    onClick={event => increaseAllocation(props.name)}
                />
            </td>
            <td>
                <input
                    type='image'
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/OOjs_UI_icon_block-destructive.svg/1024px-OOjs_UI_icon_block-destructive.svg.png?20190809150727'
                    alt='-'
                    style={{ width: '30px' }}
                    onClick={event => decreaseAllocation(props.name)}
                />
            </td>
            <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;