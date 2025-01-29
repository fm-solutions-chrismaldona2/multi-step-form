import styles from "./AddonsSelection.module.css";
import FormWrapper from "@/shared/components/FormWrapper/FormWrapper";
import AddonItem from "@/features/signup/components/AddonItem/AddonItem";
import { Addon, SignUpData } from "@/features/signup/types";
import { useFormContext } from "react-hook-form";
import { AddonsList } from "@/features/signup/data/addons";

const AddonsSelection = () => {
  const { setValue, watch } = useFormContext<SignUpData>();
  const [yearly, addons] = watch(["yearly", "addons"]);

  const toggleAddon = (addon: Addon) => {
    const newAddons = addons.some((a) => a.id === addon.id)
      ? addons.filter((a) => a.id !== addon.id)
      : [...addons, addon];
    setValue("addons", newAddons);
  };

  return (
    <FormWrapper
      title="Pick add-ons"
      description="Add-ons help enhance your gaming experience."
    >
      <div className={styles.addons__wrapper}>
        {AddonsList.map((data, index) => {
          return (
            <AddonItem
              key={index}
              isYearly={yearly}
              isSelected={addons.some((item) => item.id === data.id)}
              onChange={() => toggleAddon(data)}
              {...data}
            />
          );
        })}
      </div>
    </FormWrapper>
  );
};

export default AddonsSelection;
