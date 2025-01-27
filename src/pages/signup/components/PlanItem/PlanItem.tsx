import { forwardRef, ReactElement } from "react";
import styles from "./PlanItem.module.css";
import clsx from "clsx";
import { AnimatePresence, motion, Variants } from "motion/react";

interface PlanItemProps {
  id: string;
  name: string;
  plan: Plan;
  isYearly: boolean;
  isSelected: boolean;
  onChange: () => void;
}

export interface Plan {
  icon?: ReactElement;
  name: string;
  monthlyPrice: number;
  yearlyPrice: number;
  yearlyFreeMonths: number;
}

const PlanItem = forwardRef<HTMLInputElement, PlanItemProps>(
  ({ id, name, plan, isYearly, isSelected, onChange }, ref) => {
    const price = () => {
      if (isYearly) return `$${plan.yearlyPrice}/yr`;
      return `$${plan.monthlyPrice}/mo`;
    };

    return (
      <label
        htmlFor={id}
        className={clsx(
          styles.inputBox,
          isSelected && styles["inputBox--checked"]
        )}
      >
        <div className={styles.plan__icon}>{plan.icon}</div>
        <input
          type="radio"
          id={id}
          name={name}
          value={plan.name}
          ref={ref}
          className={styles.input}
          onChange={onChange}
          required
        />
        <div className={styles.plan__info}>
          <span className={styles.plan__name}>{plan.name}</span>
          <span className={styles.plan__price}>{price()}</span>
          <AnimatePresence>
            {isYearly && plan.yearlyFreeMonths > 0 && (
              <motion.span
                className={styles.plan__free}
                variants={freeMonthsAnimation}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{
                  duration: 0.35,
                  type: "spring",
                }}
              >
                {plan.yearlyFreeMonths} months free
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </label>
    );
  }
);

export default PlanItem;

const freeMonthsAnimation: Variants = {
  hidden: {
    opacity: 0,
    height: 0,
  },
  visible: {
    opacity: 1,
    height: "auto",
  },
};
