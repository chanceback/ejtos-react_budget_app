import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, dispatch, expenses, currency } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const editBudget = (b) => {
        if (b < 20000 && b >= totalExpenses){
            dispatch({
                type: 'SET_BUDGET',
                payload: b
            })
        }
    }

    return (
        <div className='alert alert-secondary'>
            <div className='input-group mb-3'>
                <div className='input-group-prepend'>
                    <span>Budget: {currency}</span>
                </div>
                <div className='inputGroupSelect01'>
                    <input 
                        required='required'
                        type='number'
                        step='10'
                        id='budget'
                        value={budget}
                        //style={{ marginLeft: '2rem' , size: 10}}
                        onChange={(event) => editBudget(event.target.value)}
                    />
                </div>
            </div>
        </div>
    );
};
export default Budget;
