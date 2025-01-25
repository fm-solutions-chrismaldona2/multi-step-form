import styles from "./FormWrapper.module.css";
import { ReactNode } from "react";

interface FormWrapperProps {
  title: string;
  description: string;
  children: ReactNode;
}

const FormWrapper = ({ title, description, children }: FormWrapperProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__header}>
        <h1 className={styles.form__title}>{title}</h1>
        <p className={styles.form__description}>{description}</p>
      </div>
      <div className={styles.form__container}>{children}</div>
    </div>
  );
};

export default FormWrapper;
