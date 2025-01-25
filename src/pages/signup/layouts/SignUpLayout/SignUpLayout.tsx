import { LayoutComponentProps } from "@/shared/types";
import styles from "./SignUpLayout.module.css";

const SignUpLayout = ({ children }: LayoutComponentProps) => {
  return <main className={styles.main}>{children}</main>;
};

export default SignUpLayout;
