import classNames from "classnames";
import { ButtonHTMLAttributes } from "react";

const PrimaryButton: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  disabled,
  ...rest
}) => {
  return (
    <button
      className={classNames(
        disabled
          ? "bg-gray-200 text-opacity-20 text-black"
          : "bg-primary text-white",
        `block appearance-none rounded-full py-4 font-bold w-full outline-none`
      )}
      {...rest}
    />
  );
};

export default PrimaryButton;
