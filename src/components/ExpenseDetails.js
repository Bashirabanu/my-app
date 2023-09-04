const ExpenseDetails = (props) => {
    return (
      <div className="expense-details">
        <h2>{props.title}</h2>
        <div className="expense-item__price">Rs{props.amount}</div>
        <div className="expense-item__location">location:{props.locationOfExpenditure}</div>
      </div>
    );
  };
  
  export default ExpenseDetails;