import FormWrapper from "@/shared/components/FormWrapper/FormWrapper";
import styles from "./ConfirmationStep.module.css";

const SummaryStep = () => {
  return (
    <FormWrapper
      title="Finishing up"
      description="Double-check everything looks OK before confirming."
    >
      <div className={styles.summary}>
        <div className={styles.summary__content}>
          <div className={styles.summary__plan}>
            <div className={styles.plan__info}>
              <span className={styles.plan__name}>Arcade (Yearly)</span>
              <button className={styles.plan__changeButton}>Change</button>
            </div>
            <span className={styles.plan__price}>$90/yr</span>
          </div>
          <div className={styles.summary__addons}>
            <div className={styles.addon}>
              <span className={styles.addon__name}>Online service</span>
              <span className={styles.addon__price}>+$10/yr</span>
            </div>
            <div className={styles.addon}>
              <span className={styles.addon__name}>Larger storage</span>
              <span className={styles.addon__price}>+$20/yr</span>
            </div>
          </div>
        </div>
        <div className={styles.summary__footer}>
          <span className={styles.totalPrice__label}>Total (per year)</span>
          <span className={styles.totalPrice}>$120/yr</span>
        </div>
      </div>
    </FormWrapper>
  );
};

export default SummaryStep;
