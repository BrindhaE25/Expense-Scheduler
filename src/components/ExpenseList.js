import ExpenseItem from './ExpenseItem';
import './ExpenseList.css'

const ExpenseList = props => {

if(props.expenses.length === 0) {
    return <h2 className='expenses-list__fallback'>Found no expenses</h2>
}

    return (
    <ul className='expenses-list'>
        {props.expenses.map(expenseData => 
        <ExpenseItem 
        key={expenseData.id} expense={expenseData}
        />
        )};

    </ul>
    )
        }

    export default ExpenseList;