import React from "react";

export const SelectFields = ({ label, onChange, value, data }) => {
  const business = ["business 1", "business 2"];
  return (
    <>
      <label htmlFor={label} style={{fontWeight: 500, fontSize: 14}}>{label}</label>
      <select defaultValue={value} className="form-select" onChange={onChange}>
        <option selected></option>
        {business.length === "" ? (
          <option defaultValue>No category found</option>
        ) : (
          business.map((d) => (
            <>
              <option value={d} key={d}>
                {d}
              </option>
            </>
          ))
        )}
      </select>
    </>
  );
};
