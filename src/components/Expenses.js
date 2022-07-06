import './Expenses.css';
import {useState} from 'react';
import Card from './Card';
import ExpenseFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {
    const [selectedYear,setSelectedYear] = useState('2022');
    const changeYearHandler = year => {
        setSelectedYear(year);
        
    }
    const filterExpenseByYear = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === selectedYear});

            return ( 
                <Card className='expenses'>
                     <ExpenseFilter selected={selectedYear} onChangeYear={changeYearHandler}/>
                     <ExpensesChart expenses={filterExpenseByYear}/> 
                    <ExpenseList expenses={filterExpenseByYear}/>
                    </Card>
            )
                    }

export default Expenses;