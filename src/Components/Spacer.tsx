import React from "react";
import classnames from "classnames";

type Props = {
  //Insert Props Here
  className?: string;
  children?: React.ReactNode;
};

const Spacer: React.FC<Props> = ({ className, children }) => {
  return <div className={classnames("flex-grow", className)}>{children}</div>;
};

export default Spacer;
