import React from "react";
import classnames from "classnames";
import { StyleProps, computeStyles } from "../styles";
import { IconType } from "../Other/Icon";

class Props extends StyleProps {
  //Insert Props Here
  className?: string;
  children?: React.ReactNode;
  name: string;
  icon?: IconType;

  constructor() {
    super();
    this.name = "";
  }
}

export const Page: React.FC<Props> = ({
  className,
  children,
  name = "",
  icon,
  ...styles
}) => {
  return (
    <div className={classnames("", computeStyles(styles), className)}>
      {children}
    </div>
  );
};
