import React from "react";

const Dropdown = () => {
  return (
    <>
      <div className="dropdown" >
        <button
          className="btn btn-light dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          style= {{padding: '5px 40px', height: 45}}
        >
          <span style={{padding: '0 20px'}}>All</span>
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li>
            <a className="dropdown-item" href="#">
              Active verifiers
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Pending verifiers
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
             Deactivated verifiers
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Dropdown;
