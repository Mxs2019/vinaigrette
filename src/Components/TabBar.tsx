import React, { useState } from "react";
import classnames from "classnames";

type TabProps = {
  //Insert Props Here
  className?: string;
  children?: React.ReactNode;
  active?: boolean;
  name: string;
};

export const Tab: React.FC<TabProps> = ({
  className,
  children,
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
      {children}
    </div>
  );
};

type Props = {
  //Insert Props Here
  className?: string;
  children: React.ReactNode[];
};

const TabBar: React.FC<Props> = ({ className, children }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const tabNames = children.map((t: any) => t.props.name);
  console.log(tabNames);
  return (
    <div className={classnames("", className)}>
      {children &&
        children.map((t, index) => (
          <Tab active={selectedTab === index} name="" />
        ))}
    </div>
  );
};

export default TabBar;
