import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      Developed by&nbsp;
      <a
        href="https://github.com/chrismaldona2"
        target="_blank"
        className={styles.footer_link}
      >
        Christian
      </a>
    </footer>
  );
};

export default Footer;
