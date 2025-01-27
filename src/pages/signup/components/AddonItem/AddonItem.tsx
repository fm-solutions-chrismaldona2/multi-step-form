import { forwardRef, useState } from "react";
import styles from "./AddonItem.module.css";
import Checkbox from "@/shared/components/Checkbox/Checkbox";
import clsx from "clsx";

interface AddonItemProps {
  id: string;
  name: string;
  label: string;
  description: string;
  price: string;
}

const AddonItem = forwardRef<HTMLInputElement, AddonItemProps>(
  ({ id, name, label, description, price }, ref) => {
    const [isChecked, setIsChecked] = useState(false);
    const handleCheck = () => setIsChecked((prev) => !prev);

    return (
      <label
        htmlFor={id}
        className={clsx(styles.item, isChecked && styles["item--checked"])}
      >
        <Checkbox
          id={id}
          name={name}
          ref={ref}
          onChange={handleCheck}
          checked={isChecked}
        />
        <div className={styles.item__info}>
          <div className={styles.item__generalInfo}>
            <span className={styles.item__name}>{label}</span>
            <span className={styles.item__description}>{description}</span>
          </div>
          <span className={styles.item__price}>+{price}</span>
        </div>
      </label>
    );
  }
);

export default AddonItem;
