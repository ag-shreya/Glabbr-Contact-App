import React from "react";
import { columns } from "../../../test/columns";
import { data } from "../../../test/data";

function Table({ showModal }) {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          {columns.map((col) => {
            return <th key={col.key}>{col.title}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => {
          return (
            <tr key={row.key} onClick={() => showModal(row)}>
              {columns.map((colItem) => {
                return (
                  <td key={colItem.key} className={colItem.className}>
                    {colItem.render
                      ? colItem.render(row[colItem.dataIndex], row)
                      : row[colItem.dataIndex]}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
