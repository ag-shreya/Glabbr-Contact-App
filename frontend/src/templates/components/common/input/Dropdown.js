import React from "react";

function Dropdown({ data, state, handleChange }) {
  return (
    <React.Fragment>
      <label htmlFor={data.id}>{data.label}</label>
      <div className="dropdown">
        <button
          type="button"
          className="btn btn-light dropdown-toggle w-100 d-flex justify-content-between align-items-center"
          onClick={() =>
            handleChange("showDropdownMenu", !state.showDropdownMenu)
          }
        >
          {state[data.id]}
        </button>
        <div
          className={`dropdown-menu w-100 ${
            state.showDropdownMenu ? "show" : ""
          }`}
        >
          {data.menu.map((item) => (
            <button
              type="button"
              className="dropdown-item"
              key={item.id}
              onClick={() => {
                handleChange(data.id, item.label);
                handleChange("showDropdownMenu", false);
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Dropdown;
