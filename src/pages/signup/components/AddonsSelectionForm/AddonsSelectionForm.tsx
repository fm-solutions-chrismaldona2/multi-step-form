import FormWrapper from "@/shared/components/FormWrapper/FormWrapper";
import AddonItem from "../AddonItem/AddonItem";
import styles from "./AddonsSelectionForm.module.css";
import { Addon, SignUpData } from "../../types";
import { useFormContext } from "react-hook-form";

const addons: Addon[] = [
  {
    id: "onlineService",
    name: "Online Service",
    description: "Access to multiplayer games",
    price: {
      yearly: 10,
      monthly: 1,
    },
  },
  {
    id: "largerStorage",
    name: "Larger Storage",
    description: "Extra 1TB of cloud save",
    price: {
      yearly: 20,
      monthly: 2,
    },
  },
  {
    id: "profileCustomization",
    name: "Customizable Profile",
    description: "Custom theme on your profile",
    price: {
      yearly: 20,
      monthly: 2,
    },
  },
];

const AddonsSelectionForm = () => {
  const { setValue, watch } = useFormContext<SignUpData>();
  const isYearly = watch("yearly");
  const selectedAddons = watch("addons", []);

  const handleAddonToggle = (addon: Addon) => {
    const isSelected = selectedAddons.some((item) => item.id === addon.id);
    const updatedAddons = isSelected
      ? selectedAddons.filter((item) => item.id !== addon.id)
      : [...selectedAddons, addon];

    setValue("addons", updatedAddons, { shouldValidate: true });
  };

  return (
    <FormWrapper
      title="Pick add-ons"
      description="Add-ons help enhance your gaming experience."
    >
      <div className={styles.addons__wrapper}>
        {addons.map((data, index) => {
          const isSelected = selectedAddons.some((item) => item.id === data.id);

          return (
            <AddonItem
              key={index}
              isYearly={isYearly}
              isSelected={isSelected}
              onChange={() => handleAddonToggle(data)}
              {...data}
            />
          );
        })}
      </div>
    </FormWrapper>
  );
};

export default AddonsSelectionForm;
