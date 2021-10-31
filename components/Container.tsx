import React from "react";

const Container = ({ children }): React.FunctionComponent => {
  return <div className="container mx-auto px-24">{children}</div>;
};

export default Container;
