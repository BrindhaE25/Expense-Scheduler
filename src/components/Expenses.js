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
    const filterExpenseByYear = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === selectedYear});

            return ( 
                <Card className='expenses'>
                     <ExpenseFilter selected={selectedYear} onChangeYear={changeYearHandler}/> 
                     
                    {filterExpenseByYear.map(expenseData => 
                        <ExpenseItem key={expenseData.id} expense={expenseData}/>
                        )}
                    </Card>
            )
                    }

export default Expenses;