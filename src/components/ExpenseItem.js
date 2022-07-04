 import './ExpenseItem.css'
 import ExpenseDate from './ExpenseDate';
import Card from './Card';
import {useState} from 'react';

 function ExpenseItem (props) {
     const [title, setTitle] = useState(props.expense.title);

    function clickHandler() {
        setTitle("Updated!!")
    }
      
     return (
         <Card className="expense-item">
             <ExpenseDate date={props.expense.date}/>
             <div className="expense-item__description">
                 <h2>{title}</h2>
             </div>
             <div className="expense-item__price">
                 <h2>{props.expense.price}</h2>
             </div>
             <button onClick={() => {clickHandler()}}>Change Title</button>
         </Card>
     )
 }

 export default ExpenseItem;