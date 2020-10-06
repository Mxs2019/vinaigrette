import React from "react";
import classnames from "classnames";
import { StyleProps, computeStyles } from "../styles";
import {
  FaChevronLeft,
  FaChevronRight,
  FaSearch,
  FaBars,
} from "react-icons/fa";

export type IconType =
  | "chevron-left"
  | "search"
  | "chevron-right"
  | "hamburger";

class Props extends StyleProps {
  //Insert Props Here
  iconType: IconType;
  className?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";

  constructor() {
    super();
    this.iconType = "search";
  }
}

export const Icon: React.FC<Props> = (props) => {
  const { className, iconType, size, onClick } = props;

  const computeIcon = {
    search: <FaSearch />,
    "chevron-left": <FaChevronLeft />,
    "chevron-right": <FaChevronRight />,
    hamburger: <FaBars />,
  };

  const ComputedIcon = computeIcon[iconType];
  return (
    <div
      className={classnames(
        "text-gray-600 -m-2 p-2",
        {
          "text-xs": size === "xs",
          "text-sm": size === "sm",
          "text-lg": size === "lg",
          "text-xl": size === "xl",
        },
        computeStyles(props),
        className
      )}
      onClick={onClick}
    >
      {ComputedIcon}
    </div>
  );
};
