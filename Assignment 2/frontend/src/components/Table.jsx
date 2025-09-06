// src/components/Table.jsx
import React from "react";
import PropTypes from "prop-types";

const Table = ({ columns, data, striped }) => {
  return (
    <div className="overflow-x-auto rounded-lg shadow-md">
      <table className="w-full border border-gray-300 rounded-lg text-sm">
        <thead>
          <tr className="bg-gray-100">
            {columns.map((col) => (
              <th
                key={col.accessor}
                className="border border-gray-300 px-6 py-3 text-left font-semibold text-gray-700"
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((row, i) => (
              <tr
                key={i}
                className={`${
                  striped && i % 2 === 0 ? "bg-gray-50" : ""
                } hover:bg-gray-100`}
              >
                {columns.map((col) => (
                  <td
                    key={col.accessor}
                    className="border border-gray-300 px-6 py-3 text-gray-800"
                  >
                    {row[col.accessor]}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={columns.length}
                className="text-center py-6 text-gray-500"
              >
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

Table.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      header: PropTypes.string.isRequired,
      accessor: PropTypes.string.isRequired,
    })
  ).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  striped: PropTypes.bool,
};

Table.defaultProps = {
  striped: true,
};

export default Table;
