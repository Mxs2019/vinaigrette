import React from "react";
import classnames from "classnames";
import { StyleProps, computeStyles } from "../styles";

class Props extends StyleProps {
  //Insert Props Here
  alignment?: "left" | "center" | "right" | "stretch";

  className?: string;
  children?: React.ReactNode;
  noGap?: boolean;
  dividor?: boolean;
}

export const VStack: React.FC<Props> = ({
  alignment = "stretch",
  className,
  children,
  noGap,
  dividor,
  style,
  ...styles
}) => {
  return (
    <div
      style={style}
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
