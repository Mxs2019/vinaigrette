import React from "react";
import classnames from "classnames";
import { StyleProps, computeStyles } from "../styles";

class Props extends StyleProps {
  //Insert Props Here
  alignment?: "top" | "center" | "bottom";
  className?: string;
  children?: React.ReactNode;
  noGap?: boolean;
  dividor?: boolean;
}

export const HStack: React.FC<Props> = ({
  className,
  children,
  alignment = "center",
  noGap,
  dividor,
  style,
  onClick,
  ...styles
}) => {
  return (
    <div
      className={classnames(
        "flex",
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
      onClick={onClick}
      style={style}
    >
      {children}
    </div>
  );
};
