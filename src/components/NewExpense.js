import React, {useState} from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
const NewExpense = (props) => {
    const [addExpenseButton, setAddExpenseButton] = useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    }

    const changeButtonStatus = () => {
        setAddExpenseButton(!addExpenseButton);
    }
    if(addExpenseButton === true) {
        return (
            <div className="new-expense">
                <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onClickChangeButtonStatus={changeButtonStatus}/>
            </div>
        )};
    return (
        <div className="new-expense">
            <button onClick={changeButtonStatus}>Add New Expense</button>
        </div>
    )

};
export default NewExpense;