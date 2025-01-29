import { useState } from "react";

export const useMultiStepForm = <T>(steps: T[]) => {
  const [currentStep, setCurrentStep] = useState(0);

  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === steps.length - 1;

  const next = () => !isLastStep && setCurrentStep((p) => p + 1);
  const prev = () => !isFirstStep && setCurrentStep((p) => p - 1);

  const goTo = (step: number) =>
    setCurrentStep(Math.min(Math.max(step, 0), steps.length - 1));

  return { currentStep, isFirstStep, isLastStep, next, prev, goTo };
};
