import { motion } from "motion/react";
import styles from "./ToggleSwitch.module.css";

interface ToogleSwitchProps {
  onToggle: () => void;
  isOn: boolean;
  ariaLabel: string;
}

const ToggleSwitch = ({ isOn, onToggle, ariaLabel }: ToogleSwitchProps) => {
  return (
    <button
      type="button"
      className={styles.toggle__container}
      style={{
        justifyContent: "flex-" + (isOn ? "end" : "start"),
      }}
      onClick={onToggle}
      aria-label={ariaLabel}
    >
      <motion.div
        className={styles.toggle}
        transition={{
          type: "spring",
          visualDuration: 0.2,
          bounce: 0.2,
        }}
        layout
      />
    </button>
  );
};

export default ToggleSwitch;
