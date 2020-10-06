import React from "react";
import classnames from "classnames";
import { StyleProps, computeStyles } from "../styles";

class Props extends StyleProps {
  //Insert Props Here
  className?: string;
  children?: React.ReactNode;
  size?: "sm" | "md" | "lg";

  constructor() {
    super();
    this.size = "md";
  }
}

export const FixedSpacer: React.FC<Props> = (props) => {
  const { className, children, style, size = "md" } = props;
  return (
    <div
      style={style}
      className={classnames(
        "block transparent",
        {
          "h-8 w-8": size === "sm",
          "h-16 w-16": size === "md",
          "h-32 w-32": size === "lg",
        },
        computeStyles(props),
        className
      )}
    >
      {children}
    </div>
  );
};
