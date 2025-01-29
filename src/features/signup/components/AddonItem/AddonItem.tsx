import styles from "./AddonItem.module.css";
import Checkbox from "@/shared/components/Checkbox/Checkbox";
import { Addon } from "@/features/signup/types";
import clsx from "clsx";

interface AddonItemProps extends Addon {
  isYearly: boolean;
  isSelected: boolean;
  onChange: () => void;
}

const AddonItem = ({
  id,
  name,
  description,
  price,
  isYearly,
  isSelected,
  onChange,
}: AddonItemProps) => {
  const priceStr = isYearly ? `+$${price.yearly}/yr` : `+$${price.monthly}/mo`;

  return (
    <label
      htmlFor={id}
      className={clsx(styles.item, isSelected && styles["item--checked"])}
    >
      <Checkbox id={id} name={name} onChange={onChange} checked={isSelected} />
      <div className={styles.item__info}>
        <div className={styles.item__generalInfo}>
          <span className={styles.item__name}>{name}</span>
          <span className={styles.item__description}>{description}</span>
        </div>
        <span className={styles.item__price}>{priceStr}</span>
      </div>
    </label>
  );
};

export default AddonItem;
