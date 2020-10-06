import React, { useState } from "react";
import classnames from "classnames";
import { HStack } from "../Layout/HStack";
import { computeStyles, StyleProps } from "../styles";

type TabProps = {
  //Insert Props Here
  className?: string;
  children?: React.ReactNode;
  active?: boolean;
  name: string;
};

export const Tab: React.FC<TabProps> = ({
  className,
  active = false,
  name,
}) => {
  return (
    <div
      className={classnames(
        "px-3 py-2 ",
        {
          "border-b-2 border-gray-900": active,
        },
        className
      )}
    >
      {name}
    </div>
  );
};

class Props extends StyleProps {
  //Insert Props Here
  children?: React.ReactNode[];
  className?: string;
}

export const TabBar: React.FC<Props> = ({
  className,
  children = [""],
  ...styles
}) => {
  console.log("Loading Tab Bar");
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className={classnames("", className)}>
      <HStack noGap className="border-b">
        {children.map(({ props: { name } }: any, index) => (
          <div
            className={classnames("px-4 py-2 hover:bg-gray-200", {
              "border-b-2 border-gray-700 font-medium": index === selectedTab,
              "cursor-pointer border-b-2 border-gray-300 hover:border-gray-500":
                index !== selectedTab,
            })}
            onClick={() => setSelectedTab(index)}
          >
            {name}
          </div>
        ))}
      </HStack>
      <div className={classnames(computeStyles(styles))}>
        {(children[selectedTab] as any).props.children}
      </div>
    </div>
  );
};
