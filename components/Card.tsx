import React from "react";

const Card = ({ children }): JSX.Element => {
  return (
    <div className="flex-1 shadow-md mx-4 overflow-hidden p-4 rounded-md bg-gray-700">
      {children}
    </div>
  );
};

export default Card;
