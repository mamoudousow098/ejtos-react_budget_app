import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { IoIosAddCircle} from 'react-icons/io';
import { IoRemoveCircleSharp} from 'react-icons/io5';


import { AppContext } from '../context/AppContext';


const ExpenseItem = (props) => {
    const { dispatch , Currency} = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{Currency} {props.cost}</td>
        <td> <IoIosAddCircle size='1.5em' onClick={event=> increaseAllocation(props.name)} style={{color : "green"}}></IoIosAddCircle> </td>
        <td> <IoRemoveCircleSharp size='1.5em' onClick={event=> decreaseAllocation(props.name)} style={{color : "red"}}></IoRemoveCircleSharp> </td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete>  </td>
        </tr>
    );
};

export default ExpenseItem;
