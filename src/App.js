import React , {useState} from 'react';
import './App.css';
import Expenses from './components/Expenses'
import NewExpense from './components/NewExpense';

const DUMMY_EXPENSES = [
  {id:'e1',title : 'Book',price : 300,date:(new Date(2022,6,31))},
  {id:'e2',title : 'Pencil',price : 450,date:(new Date(2021,6,22))},];
function App() {
  const [expenseData,setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {

    setExpenses(prevExpenses => {
      return [expense,...prevExpenses];
    });
  }

    return (
    <div>
    <NewExpense onAddExpense={addExpenseHandler}/>
    <Expenses expenses={expenseData}/>
    </div>
  );
}

export default App;
