import styles from "./SubmittedMessage.module.css";
import { SuccessfullIcon } from "@/shared/components/SvgIcons/SvgIcons";

const SubmittedMessage = () => {
  return (
    <div className={styles.message__container}>
      <SuccessfullIcon className={styles.message__icon} />
      <span className={styles.message__title}>Thank you!</span>
      <p className={styles.message}>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
};

export default SubmittedMessage;
