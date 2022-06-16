import React from "react";

const InputField = ({
  label,
  value,
  type,
  isRequired,
  isError,
  onChange,
  ...props
}) => {
  return (
    <>
      <label htmlFor={label} style={{fontWeight: 500, fontSize: 14}}>{label}</label>
      <input
        type={type}
        className="form-control my-2"
        // placeholder={`enter ${placeholder}`}
        onChange={onChange}
        {...props}
        Required={isRequired}
      />
    </>
  );
};

export default InputField;
