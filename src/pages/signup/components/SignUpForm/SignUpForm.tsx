import styles from "./SignUpForm.module.css";
import { useMultistepForm } from "@/shared/hooks/useMultistepForm";
import Button from "@/shared/components/Button/Button";
import UserInfoForm from "../UserInfoForm/UserInfoForm";
import PlanSelectionForm from "../PlanSelectionForm/PlanSelectionForm";
import AddonsSelectionForm from "../AddonsSelectionForm/AddonsSelectionForm";
import SummaryStep from "../SummaryStep/SummaryStep";
import { FormEvent } from "react";

const SignUpForm = () => {
  const { step, currentStepIndex, isFirstStep, isLastStep, prev, next } =
    useMultistepForm([
      <UserInfoForm />,
      <PlanSelectionForm />,
      <AddonsSelectionForm />,
      <SummaryStep />,
    ]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    next();
  };

  return (
    <div className={styles.form}>
      <aside className={styles.form__navigation}>
        <span className={styles.form__currentStep}>{currentStepIndex + 1}</span>
      </aside>
      <form className={styles.form__content} onSubmit={handleSubmit}>
        {step}
        <div className={styles.form__actions}>
          {isFirstStep || (
            <Button onClick={prev} variant="secondary">
              Go Back
            </Button>
          )}
          <Button type="submit" variant="primary">
            {isLastStep ? "Confirm" : "Next Step"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
