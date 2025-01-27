import styles from "./NavigationStep.module.css";
import clsx from "clsx";

interface NavigationStepProps {
  number: number;
  name: string;
  onClick: () => void;
  isSelected?: boolean;
}

const NavigationStep = ({
  number,
  name,
  onClick,
  isSelected = false,
}: NavigationStepProps) => {
  return (
    <div
      className={clsx(styles.step, isSelected && styles["step--selected"])}
      onClick={onClick}
    >
      <span className={styles.step__number}>{number}</span>
      <div className={styles.step__description}>
        <span className={styles.step__title}>Step {number}</span>
        <span className={styles.step__name}>{name}</span>
      </div>
    </div>
  );
};

export default NavigationStep;
