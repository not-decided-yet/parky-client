import React from "react";
import { CurrentStep, SetStepHandler } from "../..";
import PrimaryButton from "../../../PrimaryButton";

const StartStep: React.FC<{ setStep: SetStepHandler }> = ({ setStep }) => {
  return (
    <div className="w-full h-full pt-8 flex flex-col justify-between items-start">
      <img src="/img/auth-required.png" />
      <div className="w-full px-6 pb-6">
        <p className="text-5xl mt-9 mb-9">
          Sign in
          <br />
          to continue
        </p>

        <PrimaryButton onClick={() => setStep(CurrentStep.registerStatus)}>
          Sign Up
        </PrimaryButton>
        <button
          className="underline font-bold bloc w-full mt-4"
          onClick={() => setStep(CurrentStep.login)}
        >
          Already have Account?
        </button>
      </div>
    </div>
  );
};

export default StartStep;
