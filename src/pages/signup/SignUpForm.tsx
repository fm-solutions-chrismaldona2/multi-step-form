import styles from "./SignUpForm.module.css";
import { useMultistepForm } from "@/shared/hooks/useMultistepForm";
import Button from "@/shared/components/Button/Button";
import UserInfoForm from "./components/UserInfoForm/UserInfoForm";
import PlanSelectionForm from "./components/PlanSelectionForm/PlanSelectionForm";
import AddonsSelectionForm from "./components/AddonsSelectionForm/AddonsSelectionForm";
import ConfirmationStep from "./components/ConfirmationStep/ConfirmationStep";
import { FormEvent, useState } from "react";
import { SidebarBackground } from "@/shared/components/SvgIllustrations/SvgIllustrations";
import NavigationStep from "./components/NavigationStep/NavigationStep";
import SubmittedMessage from "./components/SubmittedMessage/SubmittedMessage";

const SignUpForm = () => {
  const { step, currentStepIndex, isFirstStep, isLastStep, prev, next, goTo } =
    useMultistepForm([
      <UserInfoForm />,
      <PlanSelectionForm />,
      <AddonsSelectionForm />,
      <ConfirmationStep />,
    ]);

  const [submited, setSubmited] = useState(false);

  const handleNavigation = (stepIndex: number) => {
    if (submited) return;
    goTo(stepIndex);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!isLastStep) {
      next();
    } else {
      setSubmited(true);
    }
  };

  return (
    <div className={styles.form__container}>
      <aside className={styles.navigator}>
        <NavigationStep
          number={1}
          name="Your info"
          onClick={() => handleNavigation(0)}
          isSelected={currentStepIndex === 0}
        />
        <NavigationStep
          number={2}
          name="Select plan"
          onClick={() => handleNavigation(1)}
          isSelected={currentStepIndex === 1}
        />
        <NavigationStep
          number={3}
          name="Add-ons"
          onClick={() => handleNavigation(2)}
          isSelected={currentStepIndex === 2}
        />
        <NavigationStep
          number={4}
          name="Summary"
          onClick={() => handleNavigation(3)}
          isSelected={currentStepIndex === 3}
        />
        <SidebarBackground className={styles.navigator__background} />
      </aside>

      <form className={styles.form} onSubmit={handleSubmit}>
        {submited ? (
          <div className={styles.form__content}>
            <SubmittedMessage />
          </div>
        ) : (
          <>
            <div className={styles.form__content}>{step}</div>
            <div className={styles.form__actions}>
              {isFirstStep || (
                <Button onClick={prev} variant="secondary">
                  Go Back
                </Button>
              )}

              <Button
                type="submit"
                variant="primary"
                color={(isLastStep && "purple") || "blue"}
              >
                {isLastStep ? "Confirm" : "Next Step"}
              </Button>
            </div>
          </>
        )}
      </form>
    </div>
  );
};

export default SignUpForm;
