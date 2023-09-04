import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import ExpenseDetails from './ExpenseDetails';

const ExpenseItem = (props) => {

    return (
        <div className="expense-item">
        <h2>Expense Items</h2>
        <ExpenseDate date ={props.date} />
        <ExpenseDetails amount={props.amount}  location={props.locationOfExpenditure}   title={props.title} />

    </div>
      );
}

export default ExpenseItem;
