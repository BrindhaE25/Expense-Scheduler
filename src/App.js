import logo from './logo.svg';
import './App.css';
import Expenses from './components/Expenses'
import NewExpense from './components/NewExpense';

function App() {
  const addExpenseHandler = expense => {
    console.log("In App.js");
  }
  const expenseData = [{title : 'Book',price : '$300',date:(new Date(2022,6,31))},{title : 'Pencil',price : '$450',date:(new Date(2022,6,22))}];
  return (
    <div>
    <NewExpense onAddExpense={addExpenseHandler}/>
    <Expenses expenses={expenseData}/>
    </div>
  );
}

export default App;
