import React, { useState } from "react";

import PrimaryButton from "../../../PrimaryButton";
import TextEdit from "../../../TextEdit";
import TextField from "../../../TextField";

interface RegisterVehicleNoProps {
  goNext: () => void;
}

const RegisterVehicleNo: React.FC<RegisterVehicleNoProps> = ({ goNext }) => {
  const [vehicleNo, setVehicleNo] = useState<string>("");

  return (
    <div className="w-full">
      <TextEdit
        className="uppercase"
        placeholder="ex: AGT08999"
        maxLength={8}
        value={vehicleNo}
        onChange={(event) => setVehicleNo(event.target.value)}
      />
      <div className="h-28"></div>
      <PrimaryButton disabled={!(vehicleNo.length >= 8)} onClick={goNext}>
        Next
      </PrimaryButton>
    </div>
  );
};

export default RegisterVehicleNo;
