import React from "react";
import classnames from "classnames";
import { StyleProps, computeStyles } from "../standard";

class Props extends StyleProps {
  //Insert Props Here
  className?: string;
  children?: React.ReactNode;
  noGap?: boolean;
  dividor?: boolean;
}

const VStack: React.FC<Props> = ({
  className,
  children,
  noGap,
  dividor,
  ...styles
}) => {
  return (
    <div
      className={classnames(
        "flex flex-col w-full items-stretch",
        {
          "gap-4": noGap !== true && dividor !== true,
        },
        {
          "divide-y": dividor === true,
        },
        computeStyles(styles),
        className
      )}
    >
      {children}
    </div>
  );
};

export default VStack;
