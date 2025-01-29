import { SidebarBackground } from "@/shared/components/SvgIllustrations/SvgIllustrations";
import NavigationStep from "@/features/signup/components/NavigationStep/NavigationStep";
import styles from "./FormNavigation.module.css";

interface FormNavigationProps {
  goTo: (stepIndex: number) => void;
  currentStep: number;
}

const FormNavigation = ({ goTo, currentStep }: FormNavigationProps) => {
  return (
    <aside className={styles.navigator}>
      <NavigationStep
        number={1}
        name="Your info"
        onClick={() => goTo(0)}
        isSelected={currentStep === 0}
      />
      <NavigationStep
        number={2}
        name="Select plan"
        onClick={() => goTo(1)}
        isSelected={currentStep === 1}
      />
      <NavigationStep
        number={3}
        name="Add-ons"
        onClick={() => goTo(2)}
        isSelected={currentStep === 2}
      />
      <NavigationStep
        number={4}
        name="Summary"
        onClick={() => goTo(3)}
        isSelected={currentStep === 3}
      />
      <SidebarBackground className={styles.navigator__background} />
    </aside>
  );
};

export default FormNavigation;
