import ToggleSwitch from "@/shared/components/ToggleSwitch/ToggleSwitch";
import styles from "./PlanDurationToggle.module.css";

interface PlanDurationToggleProps {
  yearly: boolean;
  onChange: (value: boolean) => void;
}

const PlanDurationToggle = ({ yearly, onChange }: PlanDurationToggleProps) => {
  return (
    <div className={styles.selector}>
      <span
        className={`${styles.plan} ${!yearly && styles["plan--active"]}`}
        onClick={() => onChange(false)}
      >
        Monthly
      </span>
      <ToggleSwitch
        onToggle={() => onChange(!yearly)}
        isOn={yearly}
        ariaLabel="Toggle plan duration"
      />
      <span
        className={`${styles.plan} ${yearly && styles["plan--active"]}`}
        onClick={() => onChange(true)}
      >
        Yearly
      </span>
    </div>
  );
};

export default PlanDurationToggle;
