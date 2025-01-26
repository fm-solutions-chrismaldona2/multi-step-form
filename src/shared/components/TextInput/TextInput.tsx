import { forwardRef, InputHTMLAttributes } from "react";
import styles from "./TextInput.module.css";
import clsx from "clsx";

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
          {error && <span className={styles.error}>{error}</span>}
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
        {error && <span className={styles.error}>{error}</span>}
      </div>
    );
  }
);

export default TextInput;
