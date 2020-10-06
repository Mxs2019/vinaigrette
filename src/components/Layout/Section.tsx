import React from "react";
import classnames from "classnames";
import { StyleProps, computeStyles } from "../styles";

class Props extends StyleProps {
  //Insert Props Here
  className?: string;
  children?: React.ReactNode;
  padding?: "sm" | "md" | "lg";
}

export const Section: React.FC<Props> = ({
  className,
  children,
  padding = "md",
  ...styles
}) => {
  return (
    <div className={classnames("px-4", computeStyles(styles), className)}>
      <div
        className={classnames("max-w-screen-lg w-full mx-auto ", {
          "py-2 ": padding === "sm",
          "py-4 md:px-4 md:py-4 lg:py-4": padding === "md",
          "py-8 md:px-8 md:py-16 lg:py-24": padding === "lg",
        })}
      >
        {children}
      </div>
    </div>
  );
};
