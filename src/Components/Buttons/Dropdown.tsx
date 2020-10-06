import React from "react";
import classnames from "classnames";
import { StyleProps, computeStyles } from "../styles";
import { Menu, Transition } from "@headlessui/react";

class Props extends StyleProps {
  //Insert Props Here
  className?: string;
  children?: React.ReactNode;
}

export const Dropdown: React.FC<Props> = ({
  className,
  children,
  ...styles
}) => {
  return (
    <div className={classnames("", computeStyles(styles), className)}>
      <Menu>
        {({ open }) => (
          <>
            <Menu.Button>More</Menu.Button>

            {/* Use the Transition + open render prop argument to add transitions. */}
            <Transition
              show={open}
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Menu.Items static className="max-w-xs bg-gray-200 shadow border">
                <Menu.Item>
                  <div>hello</div>
                </Menu.Item>
                <Menu.Item>
                  <div>hello 2</div>
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </div>
  );
};
