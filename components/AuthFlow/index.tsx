import React, { useState } from "react";
import { Mounty } from "mounty";
import classNames from "classnames";
import StepWrapper from "./StepWrapper";
import StartStep from "./steps/Start";
import RegisterAccount from "./steps/RegisterAccount";
import RegisterStatus from "./steps/RegisterStatus";
import RegisterVehicleNo from "./steps/RegisterVehicleNo";
import RegisterWaitingVehicle from "./steps/RegisterWaitingVehicle";
import PrimaryButton from "../PrimaryButton";
import RegisterFinished from "./steps/RegisterFinished";

export enum CurrentStep {
  start,
  login,
  registerStatus,
  registerAccount,
  registerVehicleNo,
  registerWaitingVehicle,
  registerFinished,
}

export type SetStepHandler = (setStep: CurrentStep) => void;

interface AuthStep {
  step: CurrentStep;
  component: (setCurrentStep: SetStepHandler) => React.ReactNode;
}

const steps: AuthStep[] = [
  {
    step: CurrentStep.start,
    component: (setStep) => <StartStep setStep={setStep} />,
  },
  {
    step: CurrentStep.login,
    component: (setCurrentStep) => (
      <div>
        login
        <button onClick={() => setCurrentStep(CurrentStep.start)}>Back</button>
      </div>
    ),
  },
  {
    step: CurrentStep.registerStatus,
    component: (setCurrentStep) => (
      <StepWrapper
        title={`First,
Let me know
Your **Status.**
`}
      >
        <RegisterStatus
          goNext={() => setCurrentStep(CurrentStep.registerAccount)}
        />
      </StepWrapper>
    ),
  },
  {
    step: CurrentStep.registerAccount,
    component: (setCurrentStep) => (
      <StepWrapper
        title={`Second,
Let me know
Your **Account.**
`}
      >
        <RegisterAccount
          goNext={() => setCurrentStep(CurrentStep.registerVehicleNo)}
        />
      </StepWrapper>
    ),
  },
  {
    step: CurrentStep.registerVehicleNo,
    component: (setCurrentStep) => (
      <StepWrapper
        title={`Finally,
Let me know
Your **Vehicle No.**
`}
      >
        <RegisterVehicleNo
          goNext={() => setCurrentStep(CurrentStep.registerWaitingVehicle)}
        />
      </StepWrapper>
    ),
  },
  {
    step: CurrentStep.registerWaitingVehicle,
    component: (setCurrentStep) => (
      <StepWrapper
        title={`Please Allow
**Parky** from your
Vehicle.
`}
      >
        <RegisterWaitingVehicle
          goNext={() => setCurrentStep(CurrentStep.registerFinished)}
        />
      </StepWrapper>
    ),
  },
  {
    step: CurrentStep.registerFinished,
    component: (setCurrentStep) => (
      <StepWrapper title={`Hoody!\nToday is your\nFirst **Parky** day.`}>
        <RegisterFinished />
      </StepWrapper>
    ),
  },
];

const AuthFlow: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<CurrentStep>(
    CurrentStep.start
  );

  return (
    <div className="relative w-full h-full">
      {steps.map(({ step, component }) => (
        <Mounty
          in={currentStep === step}
          timeout={400}
          shouldUnmount={true}
          key={step}
        >
          {({ ready, entered, exiting }) => {
            return (
              <div
                className={classNames(
                  entered || exiting ? "opacity-100" : "opacity-0",
                  "transform",
                  "transition-opacity",
                  "duration-1000",
                  "absolute",
                  "w-full h-full"
                )}
              >
                {component(setCurrentStep)}
              </div>
            );
          }}
        </Mounty>
      ))}
    </div>
  );
};

export default AuthFlow;
