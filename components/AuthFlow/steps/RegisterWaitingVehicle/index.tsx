import React, { useEffect, useState } from "react";

interface RegisterVehicleNoProps {
  goNext: () => void;
}

const RegisterWaitingVehicle: React.FC<RegisterVehicleNoProps> = ({
  goNext,
}) => {
  useEffect(() => {
    // TODO: vehicle authentication logic
    setTimeout(goNext, 10000);
  }, []);

  return (
    <div className="relative w-full -ml-6">
      <img src="/img/auth-required.png" />
      <div className="absolute top-0 h-full w-7 shining-effect" />
    </div>
  );
};

export default RegisterWaitingVehicle;
