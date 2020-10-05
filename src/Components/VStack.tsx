import React from "react";
import classnames from "classnames";
import { StyleProps, computeStyles } from "./standard";

class Props extends StyleProps {
  //Insert Props Here
  className?: string;
  children?: React.ReactNode;
}

const VStack: React.FC<Props> = ({
  className,
  children,
  alignment,
  ...styles
}) => {
  return (
    <div
      className={classnames(
        "flex flex-col gap-4 w-full items-stretch",
        computeStyles(styles),
        className
      )}
    >
      {children}
    </div>
  );
};

export default VStack;
