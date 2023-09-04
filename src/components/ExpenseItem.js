import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import ExpenseDetails from './ExpenseDetails';

function ExpenseItem(props) {

    return (
        // <div className="expense-item">
        //   <ExpenseDate date={props.date} />
        //   <h2>Expense Items</h2>
        //   <div className="expense-items__description">
        //   <h2>{props.title}</h2>
        //     <div className="expense-item__price">Rs{props.amount}</div>
        //     <div className="expense-item__location">location:{props.locationOfExpenditure}</div>
        //   </div>
        // </div>
        <div className='expense-item'>
        
        <ExpenseDate date ={props.date} />
        <ExpenseDetails amount={props.amount}  location={props.locationOfExpenditure}   title={props.title} />

    </div>
      );
}

export default ExpenseItem;
