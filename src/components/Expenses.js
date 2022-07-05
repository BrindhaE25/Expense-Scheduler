import './Expenses.css';
import {useState} from 'react';
import ExpenseItem from './ExpenseItem';
import Card from './Card';
import ExpenseFilter from './ExpenseFilter';

function Expenses(props) {
    const [selectedYear,setSelectedYear] = useState('2022');
    const changeYearHandler = year => {
        setSelectedYear(year);
    }
            return ( 
                <Card className='expenses'>
                     <ExpenseFilter selected={selectedYear} onChangeYear={changeYearHandler}/> 
                     
                    {props.expenses.map(expenseData => 
                        <ExpenseItem expense={expenseData}/>
                        )}
                    </Card>
            )
        }

export default Expenses;