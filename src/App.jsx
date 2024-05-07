import React from 'react';
import Table from './components/table';

const netIncomes = [
  { brand: 'McDonalds', income: 1291283 },
  { brand: 'Burger King', income: 1927361 },
  { brand: 'KFC', income: 1098463 }
];

function App() {
  const totalIncome = netIncomes.reduce((acc, curr) => acc + curr.income, 0);
  const averageIncome = totalIncome / netIncomes.length;

  return (
    <div>
      <Table netIncomes={netIncomes} />
      <p>El promedio de ingreso neto es: ${averageIncome.toLocaleString()}</p>
    </div>
  );
}

export default App;