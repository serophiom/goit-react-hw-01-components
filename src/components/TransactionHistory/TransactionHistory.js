import React from 'react';
import transactions from '../../transactions.json'

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
}

export default TransactionHistory;