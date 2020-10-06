import React from "react";
import classnames from "classnames";
import { StyleProps, computeStyles } from "./standard";
import {
  FaChevronCircleRight,
  FaChevronLeft,
  FaChevronRight,
  FaSearch,
} from "react-icons/fa";

type IconType = "chevron-left" | "search" | "chevron-right";

class Props extends StyleProps {
  //Insert Props Here
  iconType: IconType;
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
  return (
    <div
      className={classnames(
        "",
        {
          "text-xs": "xs",
          "text-sm": "sm",
          "text-lg": "lg",
          "text-xl": "xl",
        },
        computeStyles(styles),
        className
      )}
      {...computeIcon[type]}
    ></div>
  );
};

export default Icon;
