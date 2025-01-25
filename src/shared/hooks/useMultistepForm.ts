import { ReactElement, useState } from "react";

export const useMultistepForm = (steps: ReactElement[]) => {
  const [currentStep, setCurrentStep] = useState<number>(0);

  const next = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((step) => step + 1);
    }
  };

  const prev = () => {
    if (currentStep > 0) {
      setCurrentStep((step) => step - 1);
    }
  };

  const goTo = (index: number) => {
    setCurrentStep(index);
  };

  return {
    currentStepIndex: currentStep,
    step: steps[currentStep],
    isFirstStep: currentStep === 0,
    isLastStep: currentStep === steps.length - 1,
    goTo,
    next,
    prev,
  };
};
