import { LayoutComponentProps } from "@/shared/types";
import styles from "./SignUpLayout.module.css";

const SignUpLayout = ({ children }: LayoutComponentProps) => {
  return (
    <main className={styles.main}>
      <div className={styles.form}>{children}</div>
    </main>
  );
};

export default SignUpLayout;
