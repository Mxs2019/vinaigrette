import classnames from "classnames";

export class StyleProps {
  background?: true | "dark" | "white";
  padding?: true | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
  bolded?: true;
  rounded?: true | "sm" | "md" | "lg";
  border?: true;
  shadow?: true | "sm" | "md" | "lg";
  hover?: true;
  textCenter?: true;
  dark?: true;
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
  dark,
}: StyleProps) => {
  return classnames(
    {
      "p-4": padding === true,
      "p-2": padding === "sm",
      "p-8": padding === "lg",
      "p-16": padding === "xl",
      "p-32": padding === "2xl",
      "p-48": padding === "3xl",
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
      "hover:bg-gray-200 cursor-pointer":
        hover === true && background !== true && !dark,
      "hover:bg-gray-400 cursor-pointer":
        hover === true && background === true && !dark,
      "hover:bg-gray-800 cursor-pointer": hover === true && dark,
    },
    {
      "border border-gray-400": border === true && background && !dark,
      "border border-gray-300": border === true && !background && !dark,
      "border border-gray-900": border === true && background && dark,
      "border border-gray-800": border === true && !background && dark,
    },
    {
      "bg-gray-200": background === true && !dark,
      "bg-white": background === "white" && !dark,
      "bg-gray-900 text-white": dark,
    },
    {
      "font-bold": bolded === true,
    },
    {
      "text-center": textCenter === true,
    }
  );
};
