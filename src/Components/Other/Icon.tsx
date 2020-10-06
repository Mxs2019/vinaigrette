import React from "react";
import classnames from "classnames";
import { StyleProps, computeStyles } from "../standard";
import { FaChevronLeft, FaChevronRight, FaSearch } from "react-icons/fa";

export type IconType = "chevron-left" | "search" | "chevron-right";

class Props extends StyleProps {
  //Insert Props Here
  iconType: IconType | undefined;
  className?: string;
  children?: React.ReactNode;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}

const Icon: React.FC<Props> = ({
  className,
  children,
  iconType = "search",
  size,
  ...styles
}) => {
  const computeIcon = {
    search: <FaSearch />,
    "chevron-left": <FaChevronLeft />,
    "chevron-right": <FaChevronRight />,
  };

  const ComputedIcon = computeIcon[iconType];
  return (
    <div
      className={classnames(
        "text-gray-600",
        {
          "text-xs": size === "xs",
          "text-sm": size === "sm",
          "text-lg": size === "lg",
          "text-xl": size === "xl",
        },
        computeStyles(styles),
        className
      )}
    >
      {ComputedIcon}
    </div>
  );
};

export default Icon;
