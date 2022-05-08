import React from "react";
import { Dropdown } from "react-bootstrap";
function CustomDropdown({ data, state, handleChange }) {
  return (
    <React.Fragment>
      {data.label && <label htmlFor={data.id}>{data.label}</label>}
      <Dropdown>
        <Dropdown.Toggle
          variant="light"
          className="w-100 d-flex justify-content-between align-items-center"
        >
          {state[data.id]}
        </Dropdown.Toggle>

        <Dropdown.Menu className="w-100">
          {data.menu.map((item) => (
            <Dropdown.Item
              key={item.id}
              onClick={() => handleChange(data.id, item.label)}
            >
              {item.label}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </React.Fragment>
  );
}

export default CustomDropdown;
