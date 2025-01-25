import FormWrapper from "@/shared/components/FormWrapper/FormWrapper";

const SummaryStep = () => {
  return (
    <FormWrapper
      title="Finishing up"
      description="Double-check everything looks OK before confirming."
    >
      <input required></input>
    </FormWrapper>
  );
};

export default SummaryStep;
