import React from "react";
import classnames from "classnames";

type Props = {
  //Insert Props Here
  className?: string;
  children?: React.ReactNode;
};

const Container: React.FC<Props> = ({ className, children }) => {
  return <div className={classnames("p-4", className)}>{children}</div>;
};

export default Container;
