import React from "react";
import classnames from "classnames";
import { StyleProps, computeStyles } from "../styles";

class Props extends StyleProps {
  //Insert Props Here
  className?: string;
  children?: React.ReactNode;
  ratio?: "4:3";

  constructor() {
    super();
    this.ratio = "4:3";
  }
}

export const Image: React.FC<Props> = (props) => {
  const { className, ratio, style } = props;
  const percentage = {
    "4:3": 75,
  }[ratio!];
  return (
    <div
      style={style}
      className={classnames("bg-gray-200", computeStyles(props), className)}
    >
      <div style={{ paddingBottom: `${percentage}px` }} className="h-full">
        <div className="text-3xl opacity-50 flex items-center justify-center h-full">
          IMAGE
        </div>
      </div>
    </div>
  );
};
