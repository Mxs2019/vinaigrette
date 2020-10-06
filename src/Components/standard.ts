import classnames from "classnames";

export class StyleProps {
  background?: true | "dark" | "white";
  padding?: true | "sm" | "md" | "lg";
  bolded?: true;
  rounded?: true | "sm" | "md" | "lg";
  border?: true;
  shadow?: true | "sm" | "md" | "lg";
  hover?: true;
  textCenter?: true;
}

export const computeStyles = ({
  background,
  padding,
  bolded,
  rounded,
  border,
  shadow,
  hover,
  textCenter,
}: StyleProps) => {
  return classnames(
    {
      "p-4": padding === true,
    },
    {
      "rounded-md": rounded === true || rounded === "md",
      "rounded-sm": rounded === "sm",
      "rounded-lg": rounded === "lg",
    },
    {
      "shadow-md": shadow === true || shadow === "md",
      "shadow-sm": shadow === "sm",
      "shadow-lg": shadow === "lg",
    },
    {
      "hover:bg-gray-200 cursor-pointer": hover === true && background !== true,
      "hover:bg-gray-400 cursor-pointer": hover === true && background === true,
    },
    {
      "border border-gray-400": border === true && background,
      "border border-gray-300": border === true && !background,
    },
    {
      "bg-gray-200": background === true,
      "bg-white": background === "white",
    },
    {
      "font-bold": bolded === true,
    },
    {
      "text-center": textCenter === true,
    }
  );
};
