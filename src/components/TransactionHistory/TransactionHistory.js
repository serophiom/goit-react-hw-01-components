import React from 'react';
import PropTypes from 'prop-types';
import transactions from '../../transactions.json'
import './TransactionHistory.css'

const TransactionHistory = () => {
    return (
        <table className="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
  {transactions.map(({ type, amount, currency, id }) => (
    <tr key={id}>
     <td>{type}</td>
     <td>{amount}</td>
     <td>{currency}</td>
   </tr> 
))   
}
  </tbody>
</table>
    )
};

transactions.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TransactionHistory;