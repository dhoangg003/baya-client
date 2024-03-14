import React from "react";

const Button = ({ type = "button", children, name, ...restProps }) => {
  return (
    <button
      type={type}
      className="bg-yellow-700 hover:opacity-70 text-white text-center mb-4 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      {...restProps}
    >
      {name}
    </button>
  );
};

export default Button;
