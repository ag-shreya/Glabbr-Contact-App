import React, { useState, useEffect } from "react";
import { columns } from "../../../test/columns";

function Table({ showModal, data }) {
  const pageSize = 10;
  const paginationSize = 4;

  useEffect(() => {
    const pageCount = Math.ceil(data.length / pageSize);
    const paginationCount = Math.ceil(pageCount / paginationSize);
    const paginationArray = Array.from(Array(pageCount).keys());

    handleChange("pageCount", pageCount);
    handleChange("paginationCount", paginationCount);
    handleChange("paginationArray", paginationArray);
  }, [data]);

  const [state, setState] = useState({
    currentPage: 1,
    currentPagination: 0,
    pageCount: 0,
    paginationCount: 0,
    paginationArray: [],
  });

  const handleChange = (check, value) => {
    setState((prevState) => {
      return { ...prevState, [check]: value };
    });
  };

  const onPageChange = (index) => {
    let minPages = state.currentPagination * paginationSize;
    let maxPages = (state.currentPagination + 1) * paginationSize;

    if (index > maxPages)
      handleChange("currentPagination", state.currentPagination + 1);

    if (index <= minPages)
      handleChange("currentPagination", state.currentPagination - 1);

    handleChange("currentPage", index);
  };

  return (
    <div className="table-responsive">
      <table className="table table-hover">
        <thead>
          <tr>
            {columns.map((col) => {
              return <th key={col.key}>{col.title}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {data
            .slice(
              (state.currentPage - 1) * pageSize,
              state.currentPage * pageSize
            )
            .map((row) => {
              return (
                <tr key={row.id} onClick={() => showModal(row)}>
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

      {data.length > pageSize && (
        <nav aria-label="Page navigation">
          <ul className="pagination justify-content-center">
            <li className="page-item">
              <button
                className="btn btn-light me-2"
                disabled={state.currentPage === 1}
                onClick={(e) => {
                  e.preventDefault();
                  onPageChange(state.currentPage - 1);
                }}
              >
                Previous
              </button>
            </li>

            {state.paginationArray
              .slice(
                state.currentPagination * paginationSize,
                (state.currentPagination + 1) * paginationSize
              )
              .map((page) => {
                return (
                  <li className="page-item" key={page}>
                    <button
                      className={`btn me-2 ${
                        page + 1 === state.currentPage
                          ? "btn-primary"
                          : "btn-light"
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        onPageChange(page + 1);
                      }}
                    >
                      {page + 1}
                    </button>
                  </li>
                );
              })}

            <li className="page-item">
              <button
                className="btn btn-light me-2"
                disabled={state.currentPagination >= state.pageCount}
                onClick={(e) => {
                  e.preventDefault();
                  onPageChange(state.currentPage + 1);
                }}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}

export default Table;
