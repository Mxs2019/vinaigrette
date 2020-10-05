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

const generateTypographyComponent = (typographyClassName: string) => {
  const Component: React.FC<Props> = ({ className, children, ...styles }) => {
    return (
      <div
        className={classnames(
          typographyClassName,
          computeStyles(styles),
          className
        )}
      >
        {children}
        {!children && (
          <div className="w-20">
            <ReactPlaceholder type="textRow" ready={false}>
              <div>Placeholder</div>
            </ReactPlaceholder>
          </div>
        )}
      </div>
    );
  };
  return Component;
};

export const Title = generateTypographyComponent(config.classNames.title);
export const Subtitle = generateTypographyComponent(config.classNames.subtitle);

export const Subheader = generateTypographyComponent(
  config.classNames.subheader
);
export const Header = generateTypographyComponent(config.classNames.header);

export default { Title, Subheader, Header };
