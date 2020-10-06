import React from "react";
import classnames from "classnames";

type Props = {
  //Insert Props Here
  className?: string;
};

const Dividor: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={classnames("h-1 border-t border-gray-400 w-full", className)}
    ></div>
  );
};

export default Dividor;
