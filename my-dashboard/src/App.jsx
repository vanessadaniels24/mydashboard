import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const mockTransactions = [
    {
      txId: "01e4dsa",
      user: "johndoe",
      date: "2021-09-01",
      cost: "43.95",
    },
    {
      txId: "0315dsaa",
      user: "jackdower",
      date: "2022-04-01",
      cost: "133.45",
    },
    
  ];

  return (
    <div>
      <h1>Transaction List</h1>
      <ul>
        {mockTransactions.map((transaction, index) => (
          <li key={index}>
            <p>Transaction ID: {transaction.txId}</p>
            <p>User: {transaction.user}</p>
            <p>Date: {transaction.date}</p>
            <p>Cost: {transaction.cost}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;