import React from "react";
import classnames from "classnames";
import { StyleProps, computeStyles } from "../standard";

class Props extends StyleProps {
  //Insert Props Here
  alignment?: "left" | "center" | "right" | "stretch";

  className?: string;
  children?: React.ReactNode;
  noGap?: boolean;
  dividor?: boolean;
}

const VStack: React.FC<Props> = ({
  alignment = "stretch",
  className,
  children,
  noGap,
  dividor,
  ...styles
}) => {
  return (
    <div
      className={classnames(
        "flex flex-col w-full",
        {
          "gap-4": noGap !== true && dividor !== true,
        },
        {
          "divide-y": dividor === true,
        },
        {
          "items-center": alignment === "center",
          "items-top": alignment === "right",
          "items-bottom": alignment === "left",
          "items-stretch": alignment === "stretch",
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
