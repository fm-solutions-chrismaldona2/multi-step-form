import FormWrapper from "@/shared/components/FormWrapper/FormWrapper";
import TextInput from "@/shared/components/TextInput/TextInput";
import { useFormContext } from "react-hook-form";
import { SignUpData } from "@/features/signup/types";

const UserInfo = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<SignUpData>();

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
        error={errors.name?.message}
        {...register("name")}
      />
      <TextInput
        label="Email Address"
        id="email"
        placeholder="e.g. stephenking@lorem.com"
        type="email"
        error={errors.email?.message}
        {...register("email")}
      />
      <TextInput
        label="Phone Number"
        id="phone"
        placeholder="e.g. +1 234 567 890"
        type="tel"
        error={errors.phone?.message}
        {...register("phone")}
      />
    </FormWrapper>
  );
};

export default UserInfo;
