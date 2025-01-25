import FormWrapper from "@/shared/components/FormWrapper/FormWrapper";

const PlanSelectionForm = () => {
  return (
    <FormWrapper
      title="Select your plan"
      description="You have the option of monthly or yearly billing"
    >
      <input required></input>
    </FormWrapper>
  );
};

export default PlanSelectionForm;
