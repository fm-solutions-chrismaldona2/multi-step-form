import styles from "./SignUpForm.module.css";
import UserInfo from "./components/steps/UserInfo/UserInfo";
import PlanSelection from "./components/steps/PlanSelection/PlanSelection";
import AddonsSelection from "./components/steps/AddonsSelection/AddonsSelection";
import ConfirmationStep from "./components/steps/ConfirmationStep/ConfirmationStep";
import SubmittedMessage from "./components/SubmittedMessage/SubmittedMessage";
import FormActions from "./components/FormActions/FormActions";
import FormNavigation from "./components/FormNavigation/FormNavigation";
import { SignUpData } from "./types";
import { signUpSchema } from "./schemas/signUpSchema";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { useMultiStepForm } from "@/shared/hooks/useMultiStepForm";

const SignUpForm = () => {
  const steps = [
    { form: <UserInfo />, fields: ["name", "email", "phone"] },
    { form: <PlanSelection />, fields: ["plan", "yearly"] },
    { form: <AddonsSelection />, fields: ["addons"] },
    { form: <ConfirmationStep onModify={() => goTo(1)} /> },
  ];

  const { currentStep, isFirstStep, isLastStep, next, prev, goTo } =
    useMultiStepForm(steps);

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [completedSteps, setCompletedSteps] = useState(
    Object.fromEntries(steps.map((_, index) => [index, false]))
  );

  const methods = useForm<SignUpData>({
    resolver: zodResolver(signUpSchema),
    mode: "onTouched",
    defaultValues: {
      yearly: false,
      addons: [],
    },
  });

  const onSubmit: SubmitHandler<SignUpData> = (data) => {
    console.log("Submitting:", data);
    setIsSubmitted(true);
  };

  const validateStep = async () => {
    const stepFields =
      (steps[currentStep].fields as (keyof SignUpData)[]) || [];

    const isValid = await methods.trigger(stepFields);
    if (isValid) {
      setCompletedSteps((prev) => ({
        ...prev,
        [currentStep]: true,
      }));
      return true;
    }
    return false;
  };

  const handleNext = async () => {
    const valid = await validateStep();
    if (valid) {
      if (isLastStep) {
        methods.handleSubmit(onSubmit)();
      } else {
        next();
      }
    }
  };

  const handleGoTo = async (stepIndex: number) => {
    if (isSubmitted) return;
    await validateStep();

    const allPreviousStepsCompleted = [...Array(stepIndex).keys()].every(
      (index) => completedSteps[index]
    );
    if (allPreviousStepsCompleted) {
      goTo(stepIndex);
    }
  };

  return (
    <div className={styles.form__container}>
      <FormNavigation goTo={handleGoTo} currentStep={currentStep} />
      <FormProvider {...methods}>
        <form className={styles.form} onSubmit={methods.handleSubmit(onSubmit)}>
          <div className={styles.form__content}>
            {isSubmitted ? <SubmittedMessage /> : steps[currentStep].form}
          </div>
          {!isSubmitted && (
            <FormActions
              isFirstStep={isFirstStep}
              isLastStep={isLastStep}
              onPrev={prev}
              onNext={handleNext}
            />
          )}
        </form>
      </FormProvider>
    </div>
  );
};

export default SignUpForm;
