import React from "react";
import classnames from "classnames";
import { StyleProps, computeStyles } from "../standard";

class Props extends StyleProps {
  //Insert Props Here
  alignment?: "top" | "center" | "bottom";
  className?: string;
  children?: React.ReactNode;
  noGap?: boolean;
  dividor?: boolean;
}

const HStack: React.FC<Props> = ({
  className,
  children,
  alignment = "center",
  noGap,
  dividor,
  ...styles
}) => {
  return (
    <div
      className={classnames(
        "flex w-full",
        {
          "gap-4": noGap !== true && dividor !== true,
        },
        {
          "divide-x": dividor === true,
        },
        {
          "items-center": alignment === "center",
          "items-top": alignment === "top",
          "items-bottom": alignment === "bottom",
        },
        computeStyles(styles),
        className
      )}
    >
      {children}
    </div>
  );
};

export default HStack;
