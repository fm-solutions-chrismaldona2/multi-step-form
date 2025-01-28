import styles from "./SignUpForm.module.css";
import Button from "@/shared/components/Button/Button";
import UserInfoForm from "./components/UserInfoForm/UserInfoForm";
import PlanSelectionForm from "./components/PlanSelectionForm/PlanSelectionForm";
import AddonsSelectionForm from "./components/AddonsSelectionForm/AddonsSelectionForm";
import ConfirmationStep from "./components/ConfirmationStep/ConfirmationStep";
import { useState } from "react";
import { SidebarBackground } from "@/shared/components/SvgIllustrations/SvgIllustrations";
import NavigationStep from "./components/NavigationStep/NavigationStep";
import SubmittedMessage from "./components/SubmittedMessage/SubmittedMessage";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpData } from "./types";
import { signUpSchema } from "./schema/signUpSchema";

const SignUpForm = () => {
  const steps = [
    { form: <UserInfoForm />, fields: ["name", "email", "phone"] },
    { form: <PlanSelectionForm />, fields: ["plan", "yearly"] },
    { form: <AddonsSelectionForm />, fields: ["addons"] },
    { form: <ConfirmationStep /> },
  ];

  const [currentStep, setCurrentStep] = useState<number>(0);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === steps.length;

  const goTo = async (step: number) => {
    if (step <= currentStep && !submitted) setCurrentStep(step);
  };

  const methods = useForm<SignUpData>({
    resolver: zodResolver(signUpSchema),
    mode: "onTouched",
    defaultValues: {
      yearly: false,
    },
  });

  const next = async () => {
    let fields = [];

    if (steps[currentStep].fields) {
      fields = steps[currentStep].fields;
    }
    const output = await methods.trigger(fields);

    if (!output) return;

    if (!isLastStep) {
      if (currentStep === steps.length - 1) {
        await methods.handleSubmit(processForm)();
      }
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prev = () => {
    if (!isFirstStep) setCurrentStep((prev) => prev - 1);
  };

  const processForm: SubmitHandler<SignUpData> = (data) => {
    console.log(data);
    setSubmitted(true);
  };

  return (
    <div className={styles.form__container}>
      <aside className={styles.navigator}>
        <NavigationStep
          number={1}
          name="Your info"
          onClick={() => goTo(0)}
          isSelected={currentStep === 0}
        />
        <NavigationStep
          number={2}
          name="Select plan"
          onClick={() => goTo(1)}
          isSelected={currentStep === 1}
        />
        <NavigationStep
          number={3}
          name="Add-ons"
          onClick={() => goTo(2)}
          isSelected={currentStep === 2}
        />
        <NavigationStep
          number={4}
          name="Summary"
          onClick={() => goTo(3)}
          isSelected={currentStep === 3}
        />
        <SidebarBackground className={styles.navigator__background} />
      </aside>

      <FormProvider {...methods}>
        <form
          className={styles.form}
          onSubmit={methods.handleSubmit(processForm)}
        >
          <div className={styles.form__content}>
            {submitted ? <SubmittedMessage /> : steps[currentStep].form}
          </div>

          {submitted || (
            <div className={styles.form__actions}>
              {isFirstStep || (
                <Button onClick={prev} variant="secondary">
                  Go Back
                </Button>
              )}

              <Button
                variant="primary"
                onClick={next}
                type={(isLastStep && "submit") || "button"}
                color={(isLastStep && "purple") || "blue"}
              >
                {isLastStep ? "Confirm" : "Next Step"}
              </Button>
            </div>
          )}
        </form>
      </FormProvider>
    </div>
  );
};

export default SignUpForm;
