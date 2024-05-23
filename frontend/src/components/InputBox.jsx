import React from "react";

function InputBox({ name, value, onChange }) {
  return (
    <input
      required
      className="w-full"
      name={name}
      value={value}
      onChange={onChange}
    />
  );
}

export default InputBox;
