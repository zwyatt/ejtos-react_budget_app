import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { currency, dispatch } = useContext(AppContext);

    const changeCurrency = (value) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: value
        });
    }
    return(
        <div className='alert alert-secondary'>
            <label for='currencySelect'>Currency:&nbsp;</label>
            <select style={{ 'background-color': 'darkseagreen', color: 'white' }} id='currencySelect' value={currency} onChange={(event) => changeCurrency(event.target.value)}>
                <option style={{ color: 'black' }} value='$' name='Dollar'>$ Dollar</option>
                <option style={{ color: 'black' }} value='£' name='Pound'>£ Pound</option>
                <option style={{ color: 'black' }} value='€ ' name='Euro'>€ Euro</option>
                <option style={{ color: 'black' }} value='₹' name='Ruppee'>₹ Ruppee</option>
            </select>
        </div>
    );
}

export default Currency;