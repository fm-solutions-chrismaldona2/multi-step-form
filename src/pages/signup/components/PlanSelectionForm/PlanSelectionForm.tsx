import FormWrapper from "@/shared/components/FormWrapper/FormWrapper";
import PlanItem from "../PlanItem/PlanItem";
import { Plan } from "../PlanItem/PlanItem";
import { useState } from "react";
import {
  ArcadeIcon,
  AdvancedIcon,
  ProIcon,
} from "@/shared/components/SvgIcons/SvgIcons";
import styles from "./PlanSelectionForm.module.css";
import ToggleSwitch from "@/shared/components/ToggleSwitch/ToggleSwitch";

const plans: Plan[] = [
  {
    icon: <ArcadeIcon />,
    name: "Arcade",
    monthlyPrice: 9,
    yearlyPrice: 9,
    yearlyFreeMonths: 2,
  },
  {
    icon: <AdvancedIcon />,
    name: "Advanced",
    monthlyPrice: 12,
    yearlyPrice: 120,
    yearlyFreeMonths: 2,
  },
  {
    icon: <ProIcon />,
    name: "Pro",
    monthlyPrice: 15,
    yearlyPrice: 150,
    yearlyFreeMonths: 2,
  },
];

const PlanSelectionForm = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string>("");

  const handleDurationChange = () => setIsYearly((prev) => !prev);

  const handlePlanChange = (planName: string) => {
    setSelectedPlan(planName);
  };

  return (
    <FormWrapper
      title="Select your plan"
      description="You have the option of monthly or yearly billing."
    >
      <div className={styles.plans}>
        {plans.map((plan, index) => {
          return (
            <PlanItem
              key={index}
              id={plan.name}
              name="plan"
              plan={plan}
              isYearly={isYearly}
              isSelected={selectedPlan === plan.name}
              onChange={() => handlePlanChange(plan.name)}
            />
          );
        })}
      </div>

      <div className={styles.planDuration__selector}>
        <span
          className={`${styles.planDuration} ${
            !isYearly && styles["planDuration__active"]
          }`}
          onClick={() => setIsYearly(false)}
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
          onClick={() => setIsYearly(true)}
        >
          Yearly
        </span>
      </div>
    </FormWrapper>
  );
};

export default PlanSelectionForm;
