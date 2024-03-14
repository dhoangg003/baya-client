import React, { useState } from "react";
const FieldTextInput = ({
  id,
  label,
  placeholder,
  // showPassword,
  // setShowToggleIcon,
  handleChange,
  ...restProps
}) => {
  const inputProps = {
    id,
    placeholder,
    // showPassword,
    // setShowToggleIcon,
    onChange: handleChange,
    ...restProps,
  };
  return (
    <div className="relative">
      <input
        {...inputProps}
        className="w-full py-2 px-3 text-gray-700 bg-white border-b-2 outline-0 focus:border-b-yellow-700 mb-3 "
      ></input>
      {/* <span
        className="absolute right-1 top-2 cursor-pointer"
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
      </span> */}
    </div>
  );
};

export default FieldTextInput;
