import classNames from "classnames";
import React, { useState } from "react";

interface RegisterStatusProps {
  goNext: () => void;
}

const STATUS_GROUP = [
  "Physically/Mentally Disabled",
  "Pregnant",
  "Elder",
  "None of the above",
];

const RegisterStatus: React.FC<RegisterStatusProps> = ({ goNext }) => {
  const [select, setSelect] = useState<number>(-1);

  return (
    <div className="w-full space-y-3">
      {STATUS_GROUP.map((status, index) => {
        return (
          <div
            className={classNames(
              index === select && "border-primary",
              "transition duration-400 text-lg text-center p-2 rounded-3xl border-gray-300 border-2"
            )}
            key={index}
            onClick={() => {
              setSelect(index);
              goNext();
            }}
          >
            {status}
          </div>
        );
      })}
    </div>
  );
};

export default RegisterStatus;
