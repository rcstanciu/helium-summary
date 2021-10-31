import React from "react";

const Container = ({ children }): JSX.Element => {
  return <div className="container mx-auto px-24">{children}</div>;
};

export default Container;
