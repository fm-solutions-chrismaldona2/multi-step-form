import FormWrapper from "@/shared/components/FormWrapper/FormWrapper";
import TextInput from "@/shared/components/TextInput/TextInput";

const UserInfoForm = () => {
  return (
    <FormWrapper
      title="Personal info"
      description="Please provide your name, email address, and phone number."
    >
      <TextInput
        label="Name"
        id="name"
        placeholder="e.g. Stephen King"
        autoFocus
        required
      />
      <TextInput
        label="Email Address"
        id="email"
        placeholder="e.g. stephenking@lorem.com"
        type="email"
        required
      />
      <TextInput
        label="Phone Number"
        id="phone"
        placeholder="e.g. +1 234 567 890"
        type="tel"
        required
      />
    </FormWrapper>
  );
};

export default UserInfoForm;
