import FormWrapper from "@/shared/components/FormWrapper/FormWrapper";

const UserInfoForm = () => {
  return (
    <FormWrapper
      title="Personal info"
      description="Please provide your name, email address, and phone number."
    >
      <input required></input>
    </FormWrapper>
  );
};

export default UserInfoForm;
