import React from "react";
import classnames from "classnames";
import { StyleProps, computeStyles } from "../standard";

class Props extends StyleProps {
  //Insert Props Here
  className?: string;
  children?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

const Logo: React.FC<Props> = ({
  className,
  children,
  size = "md",
  ...styles
}) => {
  const computeSize = {
    sm: 40,
    md: 60,
    lg: 100,
    xl: 160,
  };
  return (
    <div className={classnames("", computeStyles(styles), className)}>
      <img
        src={`//logo.clearbit.com/${children}?size=${computeSize[size]}`}
        alt={children}
      />
    </div>
  );
};

export default Logo;
