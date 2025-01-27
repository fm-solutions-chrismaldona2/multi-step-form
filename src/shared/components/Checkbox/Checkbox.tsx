import { forwardRef, InputHTMLAttributes } from "react";
import { CheckmarkIcon } from "@/shared/components/SvgIcons/SvgIcons";
import styles from "./Chekbox.module.css";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ id, ...props }, ref) => {
    return (
      <label className={styles.checkbox__container} htmlFor={id}>
        <input
          type="checkbox"
          id={id}
          ref={ref}
          className={styles.checkbox__input}
          {...props}
        />
        <div className={styles.checkbox}>
          <CheckmarkIcon className={styles.checkbox__mark} />
        </div>
      </label>
    );
  }
);

export default Checkbox;
