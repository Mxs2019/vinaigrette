import React, { useState } from "react";
import classnames from "classnames";
import { HStack } from "../Layout/HStack";
import { computeStyles, StyleProps } from "../styles";
import { VStack } from "../Layout/VStack";
import { Spacer } from "../Layout/Spacer";
import { Icon } from "../Other/Icon";

class Props extends StyleProps {
  //Insert Props Here
  children: React.ReactNode[];
  className?: string;

  constructor() {
    super();
    this.children = [];
  }
}

export const SideBar: React.FC<Props> = ({ className, children }) => {
  const sidebarWidth = "300px";
  const [selectedPageIndex, setSelectedPageIndex] = useState(0);
  const selectedPageProps = (children[selectedPageIndex] as any).props;
  const [showingMobileNav, setShowingMobileNav] = useState(false);
  return (
    <div className={classnames(className)}>
      <div
        style={{ width: sidebarWidth }}
        className="hidden lg:block border-r fixed top-0 bottom-0 overflow-y-auto py-4"
      >
        <VStack noGap>
          {children.map(({ props: { name } }: any, index) => (
            <div
              className={classnames("px-4 py-2 hover:bg-gray-200", {
                "bg-gray-200": index === selectedPageIndex,
                "cursor-pointer  hover:bg-gray-200":
                  index !== selectedPageIndex,
              })}
              onClick={() => setSelectedPageIndex(index)}
            >
              {name}
            </div>
          ))}
        </VStack>
      </div>
      <div className="lg:hidden w-full">
        <HStack padding className="border-b">
          <Spacer />
          <Icon
            iconType="hamburger"
            border
            rounded
            onClick={() => setShowingMobileNav((prev) => !prev)}
          />
        </HStack>
        {showingMobileNav && (
          <VStack noGap className="border-b shadow-md fixed bg-white z-50">
            {children.map(({ props: { name } }: any, index) => (
              <div
                className={classnames("px-4 py-2 hover:bg-gray-200", {
                  "bg-gray-200": index === selectedPageIndex,
                  "cursor-pointer  hover:bg-gray-200":
                    index !== selectedPageIndex,
                })}
                onClick={() => setSelectedPageIndex(index)}
              >
                {name}
              </div>
            ))}
          </VStack>
        )}
      </div>

      {selectedPageProps.children && (
        <>
          <div
            style={{ left: sidebarWidth }}
            className="hidden lg:block fixed right-0 top-0 bottom-0 overflow-y-auto"
          >
            <div className={classnames(computeStyles(selectedPageProps))}>
              {selectedPageProps.children}
            </div>
          </div>
          <div className="lg:hidden">
            <div className={classnames(computeStyles(selectedPageProps))}>
              {selectedPageProps.children}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
