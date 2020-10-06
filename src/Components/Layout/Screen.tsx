import React from "react";
import classnames from "classnames";
import { StyleProps, computeStyles } from "../styles";

class Props extends StyleProps {
  //Insert Props Here
  className?: string;
  children?: React.ReactNode;
}

export const Screen: React.FC<Props> = ({ className, children, ...styles }) => {
  return (
    <div className={classnames(computeStyles(styles), className)}>
      <div className="max-w-screen-lg w-full mx-auto">{children}</div>
    </div>
  );
};
