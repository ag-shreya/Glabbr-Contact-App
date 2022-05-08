import React, { useState, useEffect } from "react";
import { columns } from "../../../test/columns";
import Dropdown from "../common/input/Dropdown";

function Table({ showModal, data, meta, handleGetContactItems }) {
  const [state, setState] = useState({});

  useEffect(() => {
    if (meta) {
      setState({
        ...state,
        currentPage: parseInt(meta.page),
        pageCount: meta.pageCount,
        paginationArray: Array.from(Array(meta.pageCount).keys()),
        take: meta.take,
      });
    }
  }, [meta]);

  const handleChange = (check, value) => {
    setState((prevState) => {
      return { ...prevState, [check]: value };
    });

    if (check === "take") {
      handleGetContactItems(1, value);
    } else if (check === "currentPage") {
      handleGetContactItems(value, state.take);
    }
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
          {data &&
            data.map((row) => {
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

      {meta && state.pageCount > 1 && (
        <div className="row">
          <div className="col-lg-1">
            <Dropdown
              data={{
                id: "take",
                label: "Display Contacts",
                menu: [
                  { label: 5, id: 5 },
                  { label: 10, id: 10 },
                  { label: 15, id: 15 },
                ],
              }}
              state={state}
              handleChange={handleChange}
            />
          </div>

          <nav aria-label="Page navigation" className="col-10 mt-4">
            <ul className="pagination justify-content-md-center mt-1">
              <li className="page-item">
                <button
                  className="btn btn-light me-2"
                  disabled={!meta.hasPreviousPage}
                  onClick={(e) => {
                    e.preventDefault();
                    handleChange("currentPage", state.currentPage - 1);
                  }}
                >
                  Previous
                </button>
              </li>

              {state.paginationArray.map((pagination) => {
                return (
                  <li className="page-item" key={pagination}>
                    <button
                      className={`btn me-2 ${
                        pagination + 1 === state.currentPage
                          ? "btn-primary"
                          : "btn-light"
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        if (state.currentPage !== pagination + 1)
                          handleChange("currentPage", pagination + 1);
                      }}
                    >
                      {pagination + 1}
                    </button>
                  </li>
                );
              })}

              <li className="page-item">
                <button
                  className="btn btn-light me-2"
                  disabled={!meta.hasNextPage}
                  onClick={(e) => {
                    e.preventDefault();
                    handleChange("currentPage", state.currentPage + 1);
                  }}
                >
                  Next
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}

export default Table;
