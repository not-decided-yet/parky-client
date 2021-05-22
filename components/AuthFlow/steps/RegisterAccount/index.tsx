import React, { useState } from "react";

import PrimaryButton from "../../../PrimaryButton";
import TextField from "../../../TextField";

interface RegisterAccountProps {
  goNext: () => void;
}

const RegisterAccount: React.FC<RegisterAccountProps> = ({ goNext }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <div className="w-full space-y-4">
      <TextField
        name="Email"
        inputProps={{
          placeholder: "email@example.com",
          type: "email",
          value: email,
          onChange: (event) => setEmail(event.target.value),
        }}
      />
      <TextField
        name="Password"
        inputProps={{
          placeholder: "More than 8 letters.",
          type: "password",
          value: password,
          onChange: (event) => setPassword(event.target.value),
        }}
      />
      <div className="h-2"></div>
      <PrimaryButton disabled={!(password.length > 8)} onClick={goNext}>Next</PrimaryButton>
    </div>
  );
};

export default RegisterAccount;
