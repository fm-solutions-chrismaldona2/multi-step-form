import FormWrapper from "@/shared/components/FormWrapper/FormWrapper";
import PlanItem from "../PlanItem/PlanItem";
import {
  ArcadeIcon,
  AdvancedIcon,
  ProIcon,
} from "@/shared/components/SvgIcons/SvgIcons";
import styles from "./PlanSelectionForm.module.css";
import ToggleSwitch from "@/shared/components/ToggleSwitch/ToggleSwitch";
import { Plan, SignUpData } from "../../types";
import { useFormContext } from "react-hook-form";

const plans: Plan[] = [
  {
    icon: <ArcadeIcon />,
    id: "arcade",
    name: "Arcade",
    price: {
      monthly: 9,
      yearly: 90,
    },
    yearlyFreeMonths: 2,
  },
  {
    icon: <AdvancedIcon />,
    id: "advanced",
    name: "Advanced",
    price: {
      monthly: 12,
      yearly: 120,
    },
    yearlyFreeMonths: 2,
  },
  {
    icon: <ProIcon />,
    id: "pro",
    name: "Pro",
    price: {
      monthly: 15,
      yearly: 150,
    },
    yearlyFreeMonths: 2,
  },
];

const PlanSelectionForm = () => {
  const { setValue, watch } = useFormContext<SignUpData>();

  const selectedPlan = watch("plan");
  const handlePlanChange = (plan: Plan) => {
    setValue("plan", plan, { shouldValidate: true });
  };

  const isYearly = watch("yearly", false);
  const handleDurationChange = () => {
    setValue("yearly", !isYearly);
  };

  return (
    <FormWrapper
      title="Select your plan"
      description="You have the option of monthly or yearly billing."
    >
      <div className={styles.plans}>
        {plans.map((data, index) => {
          return (
            <PlanItem
              key={index}
              isYearly={isYearly}
              isSelected={selectedPlan?.id === data.id}
              onChange={() => handlePlanChange(data)}
              {...data}
            />
          );
        })}
      </div>

      <div className={styles.planDuration__selector}>
        <span
          className={`${styles.planDuration} ${
            !isYearly && styles["planDuration__active"]
          }`}
          onClick={() => setValue("yearly", false)}
        >
          Monthly
        </span>
        <ToggleSwitch
          onToggle={handleDurationChange}
          isOn={isYearly}
          ariaLabel="Toggle plan duration"
        />
        <span
          className={`${styles.planDuration} ${
            isYearly && styles["planDuration__active"]
          }`}
          onClick={() => setValue("yearly", true)}
        >
          Yearly
        </span>
      </div>
    </FormWrapper>
  );
};

export default PlanSelectionForm;
