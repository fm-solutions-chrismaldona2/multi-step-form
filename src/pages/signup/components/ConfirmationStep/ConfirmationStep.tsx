import FormWrapper from "@/shared/components/FormWrapper/FormWrapper";
import styles from "./ConfirmationStep.module.css";
import { SignUpData } from "../../types";
import { useFormContext } from "react-hook-form";

interface ConfirmationStepProps {
  onModify?: () => void;
}

const ConfirmationStep = ({ onModify }: ConfirmationStepProps) => {
  const { watch } = useFormContext<SignUpData>();
  const selectedPlan = watch("plan");
  const selectedAddons = watch("addons");
  const isYearly = watch("yearly");

  const addonsTotalPrice = selectedAddons.reduce((total, current) => {
    if (isYearly) return total + current.price.yearly;

    return total + current.price.monthly;
  }, 0);
  const totalPrice = isYearly
    ? `$${selectedPlan.price.yearly + addonsTotalPrice}/yr`
    : `$${selectedPlan.price.monthly + addonsTotalPrice}/mo`;
  return (
    <FormWrapper
      title="Finishing up"
      description="Double-check everything looks OK before confirming."
    >
      <div className={styles.summary}>
        <div className={styles.summary__content}>
          <div className={styles.summary__plan}>
            <div className={styles.plan__info}>
              <span className={styles.plan__name}>
                {selectedPlan.name} ({isYearly ? "Yearly" : "Monthly"})
              </span>
              {onModify && (
                <button
                  type="button"
                  className={styles.plan__changeButton}
                  onClick={onModify}
                >
                  Change
                </button>
              )}
            </div>
            <span className={styles.plan__price}>
              $
              {isYearly
                ? `${selectedPlan.price.yearly}/yr`
                : `${selectedPlan.price.monthly}/mo`}
            </span>
          </div>
          <div className={styles.summary__addons}>
            {selectedAddons.map(({ name, price }, index) => {
              return (
                <div className={styles.addon} key={index}>
                  <span className={styles.addon__name}>{name}</span>
                  <span className={styles.addon__price}>
                    ${isYearly ? `${price.yearly}/yr` : `${price.monthly}/mo`}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.summary__footer}>
          <span className={styles.totalPrice__label}>
            Total (per {isYearly ? "year" : "month"})
          </span>
          <span className={styles.totalPrice}>{totalPrice}</span>
        </div>
      </div>
    </FormWrapper>
  );
};

export default ConfirmationStep;
