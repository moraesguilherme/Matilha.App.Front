import React from 'react';
import './TableCard.css';

const TableCard = ({ columns, data }) => (
  <div className="table-card">
    <table>
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col}>{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {row.map((cell) => (
              <td key={cell}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default TableCard;