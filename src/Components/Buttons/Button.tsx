import React from "react";
import classnames from "classnames";
import { computeStyles, StyleProps } from "../styles";

class Props extends StyleProps {
  //Insert Props Here
  className?: string;
  children?: React.ReactNode;
  type?: "primary" | "secondary" | "link";
  size?: "sm" | "md" | "lg";

  constructor() {
    super();
    this.type = "secondary";
    this.size = "md";
  }
}

export const Button: React.FC<Props> = (props) => {
  const { className, children, type, size } = props;
  return (
    <div
      className={classnames(
        "px-4 py-2  hover:shadow-md rounded  cursor-pointer flex items-center justify-center",
        {
          "border-2 border-gray-400 hover:bg-gray-200 text-gray-700":
            type === "secondary",
          "border-2 bg-gray-700 border-gray-700 hover:bg-gray-900 text-gray-100":
            type === "primary",
          "hover:bg-gray-200 text-gray-700": type === "link",
          "text-sm px-2 py-1": size === "sm",
          "px-4 py-2": size === "md",
          "text-lg px-8 py-4": size === "lg",
        },
        computeStyles(props),
        className
      )}
    >
      {children}
    </div>
  );
};
