import React from "react";
import classnames from "classnames";
import { StyleProps, computeStyles } from "../styles";

class Props extends StyleProps {
  //Insert Props Here
  className?: string;
  children?: React.ReactNode;
  label?: string;
  value?: boolean;
  defaultValue?: boolean;
  onChange?: (newValue: boolean) => void;
}

export const Checkbox: React.FC<Props> = ({
  className,
  children,
  label,
  value,
  defaultValue,
  onChange,
  ...styles
}) => {
  return (
    <div
      className={classnames(
        "flex items-center gap-2",
        computeStyles(styles),
        className
      )}
    >
      <input
        type="checkbox"
        defaultChecked={defaultValue}
        checked={value}
        onChange={(e) => {
          if (onChange) {
            onChange(e.target.checked);
          }
        }}
      />
      {label && (
        <label className="text-sm text-gray-700 flex-grow block">{label}</label>
      )}
    </div>
  );
};
