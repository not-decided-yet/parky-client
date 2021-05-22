import React from "react";
import { useAppContext } from "../../../../context/state";
import PrimaryButton from "../../../PrimaryButton";

const RegisterFinished: React.FC<{}> = () => {
  const { setAuth } = useAppContext()!;
  return (
    <div className="w-full">
      <img className="w-52 mx-auto" src="/img/car.png" />
      <p className="text-xl text-center mb-6">AGT08899</p>
      <PrimaryButton
        onClick={() => setAuth(true)}
      >
        Continue Reservation
      </PrimaryButton>
    </div>
  );
};

export default RegisterFinished;
