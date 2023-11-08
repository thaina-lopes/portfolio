import styles from "./MenuLink.module.css";

export default function MenuLink({ children, to }) {
  return (
    <a className={styles.link} href={to} end>
      {children}
    </a>
  );
}
