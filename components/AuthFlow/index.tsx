import React, { useState } from "react";
import { Mounty } from "mounty";
import classNames from "classnames";
import StepWrapper from "./StepWrapper";
import StartStep from "./steps/Start";
import PrimaryButton from "../PrimaryButton";

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
        <div>
          registerStatus
          <button onClick={() => setCurrentStep(CurrentStep.start)}>
            Back
          </button>
          <button onClick={() => setCurrentStep(CurrentStep.registerAccount)}>
            Next
          </button>
        </div>
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
        <div className="w-full">
          registerAccount
          <PrimaryButton onClick={() => setCurrentStep(CurrentStep.registerVehicleNo)}>
            Next
          </PrimaryButton>
        </div>
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
        <div className="w-full">
          registerAccount
          <PrimaryButton
            onClick={() => setCurrentStep(CurrentStep.registerWaitingVehicle)}
          >
            Next
          </PrimaryButton>
        </div>
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
        <div>
          registerAccount
          <button onClick={() => setCurrentStep(CurrentStep.registerFinished)}>
            Next
          </button>
        </div>
      </StepWrapper>
    ),
  },
  {
    step: CurrentStep.registerFinished,
    component: (setCurrentStep) => <div>registerFinished</div>,
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
