import styles from "./FormActions.module.css";
import Button from "@/shared/components/Button/Button";

interface FormActionsProps {
  isFirstStep: boolean;
  isLastStep: boolean;
  onPrev: () => void;
  onNext: () => void;
}
const FormActions = ({
  isFirstStep,
  isLastStep,
  onPrev,
  onNext,
}: FormActionsProps) => {
  return (
    <div className={styles.form__actions}>
      {isFirstStep || (
        <Button onClick={onPrev} variant="secondary">
          Go Back
        </Button>
      )}

      <Button
        variant="primary"
        onClick={onNext}
        color={(isLastStep && "purple") || "blue"}
      >
        {isLastStep ? "Confirm" : "Next Step"}
      </Button>
    </div>
  );
};

export default FormActions;
