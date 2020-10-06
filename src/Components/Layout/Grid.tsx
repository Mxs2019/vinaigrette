import React from "react";
import classnames from "classnames";
import { StyleProps, computeStyles } from "../styles";

class Props extends StyleProps {
  //Insert Props Here
  className?: string;
  children?: React.ReactNode;
  cols?: 2 | 3 | 4 | 5 | 6;
  centerItems?: boolean;
}

export const Grid: React.FC<Props> = ({
  className,
  children,
  cols = 4,
  centerItems,
  ...styles
}) => {
  const colClasses = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-4",
    5: "md:grid-cols-5",
    6: "md:grid-cols-6",
  };
  return (
    <div
      className={classnames(
        "grid gap-x-4 gap-y-4 w-full grid-cols-1",
        {
          "place-items-center": centerItems,
          "place-items-stretch": !centerItems,
        },
        computeStyles(styles),
        colClasses[cols],
        className
      )}
    >
      {children}
    </div>
  );
};
