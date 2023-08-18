import './ExpenseItem.css';

function ExpenseItem() {
    const expenseDate = new Date(2021, 2, 28);
    const expenseTitle = 'Expense Item';
    const expenseAmount = 999.67;
    const locationOfExpenditure = 'Restaurant';

    return (
        <div className="expense-item">
          <div>{expenseDate.toISOString()}</div>
          <h2>Expense Items</h2>
          <div className="expense-item_s_description">
          <h2>{expenseTitle}</h2>
            <p>Food <div className="expense-item__price">Rs{expenseAmount}</div></p>
            <p>Petrol <div className="expense-item__price">Rs{expenseAmount}</div></p>
            <p>Movies <div className="expense-item__price">Rs{expenseAmount}</div></p>
            <p>Location: {locationOfExpenditure}</p> 
          </div>
        </div>
      );

}

export default ExpenseItem;
