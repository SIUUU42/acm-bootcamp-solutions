import { useState } from 'react';
import './DataTable.css';

export function DataTable({ columns, data }) {
  const [sortKey, setSortKey] = useState(null);
  const [sortDirection, setSortDirection] = useState(null);

  function handleSort(key) {
    if (sortKey !== key) {
      setSortKey(key);
      setSortDirection('ascending');
    } else if (sortDirection === 'ascending') {
      setSortDirection('descending');
    } else {
      setSortKey(null);
      setSortDirection(null);
    }
  }

  let sortedData = [...data];
  if (sortKey) {
    sortedData.sort((a, b) => {
      const aVal = a[sortKey];
      const bVal = b[sortKey];
      const comparison = typeof aVal === 'number'
        ? aVal - bVal
        : String(aVal).localeCompare(String(bVal));
      return sortDirection === 'ascending' ? comparison : -comparison;
    });
  }

  return (
    <table className="data-table">
      <thead>
        <tr>
          {columns.map(col => (
            <th
              key={col.key}
              onClick={() => handleSort(col.key)}
              aria-sort={sortKey === col.key ? sortDirection : 'none'}
            >
              {col.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedData.length === 0 ? (
          <tr>
            <td colSpan={columns.length}>No data available</td>
          </tr>
        ) : (
          sortedData.map(row => (
            <tr key={row.id}>
              {columns.map(col => (
                <td key={col.key}>{row[col.key]}</td>
              ))}
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}