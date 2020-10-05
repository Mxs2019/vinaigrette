import React from "react";
import classnames from "classnames";
import { StyleProps, computeStyles } from "./standard";
import ReactPlaceholder from "react-placeholder";
import "react-placeholder/lib/reactPlaceholder.css";
import config from "../vinaigrette.config";

class Props extends StyleProps {
  //Insert Props Here
  className?: string;
  children?: React.ReactNode;
}

const Subheader: React.FC<Props> = ({ className, children, ...styles }) => {
  return (
    <div
      className={classnames(
        config.classNames.subheader,
        computeStyles(styles),
        className
      )}
    >
      {children}
      {!children && (
        <ReactPlaceholder type="textRow" ready={false}>
          <div>Placeholder</div>
        </ReactPlaceholder>
      )}
    </div>
  );
};

export default Subheader;
