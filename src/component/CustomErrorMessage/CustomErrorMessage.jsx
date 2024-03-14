import React from "react";

const CustomErrorMessage = ({ content, style }) => {
  return (
    <p className={`mt-1 mb-1  text-red-600 text-[12px] ${style} `}>{content}</p>
  );
};

export default CustomErrorMessage;
