import React from "react";
import classnames from "classnames";
import { StyleProps, computeStyles } from "../standard";

class Props extends StyleProps {
  //Insert Props Here
  className?: string;
  children?: React.ReactNode;
}

const FormLabel: React.FC<Props> = ({ className, children, ...styles }) => {
  return (
    <label
      className={classnames(
        "mb-1 text-sm text-gray-700 block",
        computeStyles(styles),
        className
      )}
    >
      {children}
    </label>
  );
};

export default FormLabel;
