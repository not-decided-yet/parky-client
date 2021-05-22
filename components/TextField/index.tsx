import React from "react";
import TextEdit from "../TextEdit";

interface TextFieldProps {
  name: string;
  inputProps: React.InputHTMLAttributes<HTMLInputElement>;
}

const TextField: React.FC<TextFieldProps> = ({ name, inputProps }) => {
  return (
    <div>
      <label>{name}</label>
      <TextEdit id={name} {...inputProps} />
    </div>
  );
};

export default TextField;
