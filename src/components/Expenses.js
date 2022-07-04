import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from './Card';

function Expenses(props) {
    const expenseList = props.expenses
        .map(expenseitem => (
            <ExpenseItem expense={expenseitem} />
        ));
            return ( 
                <Card className='expenses'>{expenseList}</Card>
            )
        }

export default Expenses;