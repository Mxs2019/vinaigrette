import React from "react";
import classnames from "classnames";
import { StyleProps, computeStyles } from "../standard";
import Icon, { IconType } from "../Icon";
import FormLabel from "../FormLabel";

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
  leftIcon?: IconType;
}

const TextArea: React.FC<Props> = ({
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
      {label && <FormLabel>{label}</FormLabel>}
      <div className="border hover:shadow-sm rounded-sm py-2 px-3 focus-within:shadow-sm focus-within:border-blue-800 flex gap-2">
        <textarea
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

export default TextArea;
