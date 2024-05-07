import React from 'react';

function Table({ netIncomes }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Marca</th>
          <th>Ingreso Neto</th>
        </tr>
      </thead>
      <tbody>
        {netIncomes.map((income, index) => (
          <tr key={index}>
            <td>{income.brand}</td>
            <td>${income.income.toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;