import { forwardRef } from "react";
import styles from "./PlanItem.module.css";
import clsx from "clsx";
import { AnimatePresence, motion, Variants } from "motion/react";
import { Plan } from "@/features/signup/types";

interface PlanItemProps extends Plan {
  isYearly: boolean;
  isSelected: boolean;
  onChange: () => void;
}

const PlanItem = forwardRef<HTMLInputElement, PlanItemProps>(
  (
    { icon, id, name, price, yearlyFreeMonths, isYearly, isSelected, onChange },
    ref
  ) => {
    const priceStr = isYearly ? `$${price.yearly}/yr` : `$${price.monthly}/mo`;

    return (
      <label
        htmlFor={id}
        className={clsx(
          styles.inputBox,
          isSelected && styles["inputBox--checked"]
        )}
      >
        <div className={styles.plan__icon}>{icon}</div>
        <input
          type="radio"
          name="plan"
          id={id}
          value={name}
          ref={ref}
          className={styles.input}
          onChange={onChange}
          required
        />
        <div className={styles.plan__info}>
          <span className={styles.plan__name}>{name}</span>
          <span className={styles.plan__price}>{priceStr}</span>
          <AnimatePresence>
            {isYearly && yearlyFreeMonths && (
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
                {yearlyFreeMonths} months free
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
