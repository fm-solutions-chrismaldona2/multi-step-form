import styles from "./PlanSelection.module.css";
import FormWrapper from "@/shared/components/FormWrapper/FormWrapper";
import PlanItem from "@/features/signup/components/PlanItem/PlanItem";
import PlanDurationToggle from "@/features/signup/components/PlanDurationToggle/PlanDurationToggle";
import { Plan, SignUpData } from "@/features/signup/types";
import { plansList } from "@/features/signup/data/plans";
import { useFormContext } from "react-hook-form";
import { AnimatePresence, motion, Variants } from "motion/react";

const PlanSelection = () => {
  const {
    setValue,
    watch,
    formState: { errors },
  } = useFormContext<SignUpData>();

  const error = errors.plan?.message;
  const [plan, yearly] = watch(["plan", "yearly"]);
  const handlePlanChange = (plan: Plan) => {
    setValue("plan", plan, { shouldValidate: true });
  };

  return (
    <FormWrapper
      title="Select your plan"
      description="You have the option of monthly or yearly billing."
    >
      <div>
        <AnimatePresence>
          {error && (
            <motion.span
              className={styles.error}
              variants={errorAnimation}
              initial="hidden"
              animate="visible"
              exit="onExit"
              transition={{ type: "spring", duration: 0.35 }}
            >
              {error}
            </motion.span>
          )}
        </AnimatePresence>
        <div className={styles.plans}>
          {plansList.map((data, index) => {
            return (
              <PlanItem
                key={index}
                isYearly={yearly}
                isSelected={plan?.id === data.id}
                onChange={() => handlePlanChange(data)}
                {...data}
              />
            );
          })}
        </div>
      </div>
      <PlanDurationToggle
        yearly={yearly}
        onChange={(v) => setValue("yearly", v)}
      />
    </FormWrapper>
  );
};

export default PlanSelection;

const errorAnimation: Variants = {
  hidden: {
    opacity: 0,
    y: -5,
    height: 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    height: "auto",
  },
  onExit: {
    opacity: 0,
    y: 5,
    height: 0,
  },
};
