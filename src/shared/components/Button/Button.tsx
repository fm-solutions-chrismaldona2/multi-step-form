import clsx from "clsx";
import styles from "./Button.module.css";
import { ReactNode } from "react";
import { memo } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
  type?: "submit" | "button" | "reset";
  onClick?: () => void;
  disabled?: boolean;
}

const Button = memo(
  ({
    variant = "primary",
    children,
    type = "button",
    onClick,
    disabled,
  }: ButtonProps) => {
    return (
      <button
        className={clsx(styles.button, styles[`button--${variant}`])}
        type={type}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    );
  }
);

export default Button;
