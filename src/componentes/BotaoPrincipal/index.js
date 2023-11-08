import styles from "./BotaoPrincipal.module.css";

export default function BotaoPrincipal({ children, tamanho, to }) {
  return (
    <a
      href={to}
      target="_blank"
      rel="noreferrer"
      className={`
      ${styles.botaoPrincipal}
      ${styles[tamanho]}
  `}
    >
      {children}
    </a>
  );
}
