import React, {useState} from 'react';
import './ExpenseForm.css';
const ExpenseForm = (props) => {
    // const [enteredTitle,setEnteredTitle] = useState('');
    // const [enteredAmount,setEnteredAmount] = useState('');
    // const [enteredDate,setDate] = useState('');
    const [userInput, setUserInput] = useState({
        enteredTitle:'',
        enteredAmount:'',
        enteredDate : '',

    });
    const titleHandler = (event) => {
        // setEnteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // });
        setUserInput((prevState) => {
            return {...prevState, enteredTitle:event.target.value};
        });
    };

    const amountHandler = (event) => {
        // setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value
        // });
        setUserInput((prevState) => {
            return {...prevState, enteredAmount:event.target.value};
        });
    }

    const dateHandler = (event) => {
        // setDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value
        // });
        setUserInput((prevState) => {
            return {...prevState, enteredDate:event.target.value};
        });
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const enteredData = {title:userInput.enteredTitle,
        price:userInput.enteredAmount,
        date : new Date(userInput.enteredDate)};
        props.onSaveExpenseData(enteredData);
        setUserInput('');
        
    };

    return (
        <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' value={userInput.enteredTitle} onChange={titleHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' value={userInput.enteredAmount} min="0.01" step="0.01" onChange={amountHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' value={userInput.enteredDate} min="2019-01-01" step="2023-12-31" onChange={dateHandler}/>
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='submit'>Add Expense</button>
        </div>
    </form> 
    )

};
export default ExpenseForm;