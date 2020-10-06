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
  center?: true;
  dark?: true;
  maxWidth?: true | "xs" | "sm" | "md" | "lg" | "xl";
  style?: any;
  uppercase?: true;
  colSpan?: "2" | "3" | "4" | "5" | "6";
  onClick?: () => void;
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
  center,
  dark,
  maxWidth,
  colSpan,
  onClick,
  uppercase,
}: StyleProps) => {
  const showHoverStyles = hover === true || onClick;

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
        showHoverStyles && background !== true && !dark,
      "hover:bg-gray-400 cursor-pointer":
        showHoverStyles && background === true && !dark,
      "hover:bg-gray-800 cursor-pointer": showHoverStyles && dark,
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
    },
    {
      "uppercase tracking-wider": uppercase === true,
    },
    {
      "mx-auto": center === true,
    },
    {
      "max-w-xs": maxWidth === "xs",
      "max-w-sm": maxWidth === "sm",
      "max-w-md": maxWidth === true || maxWidth === "md",
      "max-w-lg": maxWidth === "lg",
      "max-w-xl": maxWidth === "xl",
    },
    {
      "col-span-2": colSpan === "2",
      "col-span-3": colSpan === "3",
      "col-span-4": colSpan === "4",
      "col-span-5": colSpan === "5",
      "col-span-6": colSpan === "6",
    }
  );
};
