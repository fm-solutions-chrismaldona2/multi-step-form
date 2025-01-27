import FormWrapper from "@/shared/components/FormWrapper/FormWrapper";
import AddonItem from "../AddonItem/AddonItem";
import styles from "./AddonsSelectionForm.module.css";

const AddonsSelectionForm = () => {
  return (
    <FormWrapper
      title="Pick add-ons"
      description="Add-ons help enhance your gaming experience."
    >
      <div className={styles.addons__wrapper}>
        <AddonItem
          id="onlineService"
          name="onlineService"
          label="Online Service"
          description="Access to multiplayer games"
          price="$1/mo"
        />
        <AddonItem
          id="largerStorage"
          name="largerStorage"
          label="Larger Storage"
          description="Extra 1TB of cloud save"
          price="$2/mo"
        />
        <AddonItem
          id="profileCustomization"
          name="profileCustomization"
          label="Customizable Profile"
          description="Custom theme on your profile"
          price="$2/mo"
        />
      </div>
    </FormWrapper>
  );
};

export default AddonsSelectionForm;
