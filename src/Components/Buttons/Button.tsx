import React from "react";
import classnames from "classnames";

type Props = {
  //Insert Props Here
  className?: string;
  children?: React.ReactNode;
  type?: "primary" | "secondary" | "link";
  size?: "sm" | "md" | "lg";
};

const Button: React.FC<Props> = ({
  className,
  children,
  type = "secondary",
  size = "md",
}) => {
  return (
    <div
      className={classnames(
        "px-4 py-2  hover:shadow-md rounded-sm  cursor-pointer flex items-center justify-center",
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
        className
      )}
    >
      {children}
    </div>
  );
};

export default Button;
