import React from "react";
import classnames from "classnames";
import { StyleProps, computeStyles } from "./standard";

class Props extends StyleProps {
  //Insert Props Here
  className?: string;
  children?: React.ReactNode;
}

const Container: React.FC<Props> = ({ className, children, ...styles }) => {
  return (
    <div className={classnames("", computeStyles(styles), className)}>
      {children}
    </div>
  );
};

export default Container;
