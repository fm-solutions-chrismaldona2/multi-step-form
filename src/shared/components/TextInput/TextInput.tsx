import { forwardRef, InputHTMLAttributes } from "react";
import styles from "./TextInput.module.css";
import clsx from "clsx";
import { AnimatePresence, motion, Variants } from "motion/react";

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  label?: string;
  error?: string;
  id?: string;
}

const TextInput = forwardRef<HTMLInputElement, InputTextProps>(
  ({ type = "text", label, error, id, ...props }, ref) => {
    if (label)
      return (
        <div className={styles.input__group}>
          <label htmlFor={id} className={styles.input__label}>
            {label}
          </label>
          <input
            id={id}
            type={type}
            className={clsx(styles.input, error && styles["input--error"])}
            ref={ref}
            {...props}
          />
          <AnimatePresence>
            {error && (
              <motion.span
                className={styles.error}
                variants={errorAnimation}
                initial="hidden"
                animate="visible"
                exit="onExit"
                transition={{ type: "spring", duration: 0.5 }}
              >
                {error}
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      );

    return (
      <div className={styles.input__group}>
        <input
          id={id}
          type={type}
          className={clsx(styles.input, error && styles["input--error"])}
          ref={ref}
          {...props}
        />

        <AnimatePresence>
          {error && (
            <motion.span
              className={styles.error}
              variants={errorAnimation}
              initial="hidden"
              animate="visible"
              exit="onExit"
              transition={{ type: "spring", duration: 0.35 }}
            >
              {error}
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    );
  }
);

export default TextInput;

const errorAnimation: Variants = {
  hidden: {
    opacity: 0,
    y: -5,
    height: 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    height: "auto",
  },
  onExit: {
    opacity: 0,
    y: 5,
    height: 0,
  },
};
