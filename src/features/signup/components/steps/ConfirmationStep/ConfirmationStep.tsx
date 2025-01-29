import FormWrapper from "@/shared/components/FormWrapper/FormWrapper";
import styles from "./ConfirmationStep.module.css";
import { SignUpData } from "@/features/signup/types";
import { calculateTotal } from "@/features/signup/utils/pricing";
import { useFormContext } from "react-hook-form";

interface ConfirmationStepProps {
  onModify?: () => void;
}

const ConfirmationStep = ({ onModify }: ConfirmationStepProps) => {
  const { watch } = useFormContext<SignUpData>();
  const [plan, addons, yearly] = watch(["plan", "addons", "yearly"]);
  const total = calculateTotal(plan, addons, yearly);

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
                {plan.name} ({yearly ? "Yearly" : "Monthly"})
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
              ${yearly ? `${plan.price.yearly}/yr` : `${plan.price.monthly}/mo`}
            </span>
          </div>
          <div className={styles.summary__addons}>
            {addons.map(({ name, price }, index) => {
              return (
                <div className={styles.addon} key={index}>
                  <span className={styles.addon__name}>{name}</span>
                  <span className={styles.addon__price}>
                    +${yearly ? `${price.yearly}/yr` : `${price.monthly}/mo`}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.summary__footer}>
          <span className={styles.totalPrice__label}>
            Total (per {yearly ? "year" : "month"})
          </span>
          <span className={styles.totalPrice}>
            ${yearly ? `${total}/yr` : `${total}/mo`}
          </span>
        </div>
      </div>
    </FormWrapper>
  );
};

export default ConfirmationStep;
