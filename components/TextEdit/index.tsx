import classNames from "classnames";
import React from "react";

const TextEdit: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({
  className,
  ...props
}) => {
  return (
    <input
      className={classNames(
        className,
        "w-full px-3 py-4 bg-gray-200 rounded-xl text-sm font-bold focus:outline-none"
      )}
      {...props}
    />
  );
};

export default TextEdit;
