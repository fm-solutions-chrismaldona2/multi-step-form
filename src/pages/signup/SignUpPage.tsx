import SignUpLayout from "./layouts/SignUpLayout/SignUpLayout";
import SignUpForm from "@/features/signup/SignUpForm";
import Footer from "@/shared/components/Footer/Footer";

const SignUpPage = () => {
  return (
    <>
      <SignUpLayout>
        <SignUpForm />
      </SignUpLayout>
      <Footer />
    </>
  );
};

export default SignUpPage;
