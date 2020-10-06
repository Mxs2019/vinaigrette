import React from "react";
import classnames from "classnames";
import { StyleProps, computeStyles } from "./standard";
import Icon from "./Icon";

class Props extends StyleProps {
  //Insert Props Here
  className?: string;
  children?: React.ReactNode;
  type?: "text" | "number";
  label?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (newValue: string) => void;
}

const Input: React.FC<Props> = ({
  className,
  children,
  type,
  label,
  placeholder,
  value,
  defaultValue,
  onChange,
  ...styles
}) => {
  return (
    <div className={classnames("max-w-xs", computeStyles(styles), className)}>
      {label && <label className="mb-1 block">{label}</label>}
      <div className="border hover:shadow-sm rounded-sm py-1 px-3 focus-within:shadow-sm focus-within:border-blue-800">
        <Icon type="search" />
        <input
          placeholder={placeholder}
          className="focus:outline-none"
          defaultValue={defaultValue}
          value={value}
          onChange={(e) => {
            if (onChange) {
              onChange(e.target.value);
            }
          }}
        />
      </div>
    </div>
  );
};

export default Input;
