import React from "react";
import classnames from "classnames";
import { StyleProps, computeStyles } from "./standard";
import ReactPlaceholder from "react-placeholder";
import "react-placeholder/lib/reactPlaceholder.css";

class Props extends StyleProps {
  //Insert Props Here
  className?: string;
  children?: React.ReactNode;
  placeholderRows?: number;
}

const Paragraph: React.FC<Props> = ({
  className,
  children,
  placeholderRows = 3,
  ...styles
}) => {
  return (
    <div className={classnames("", computeStyles(styles), className)}>
      {children}
      {!children && (
        <ReactPlaceholder type="text" rows={placeholderRows} ready={false}>
          <div>Placeholder</div>
        </ReactPlaceholder>
      )}
    </div>
  );
};

export default Paragraph;
