import styles from "./PostModelo.module.css";

export default function PostModelo({ children, fotoCapa, titulo, ...props }) {
  return (
    <article className={styles.postModeloContainer} {...props}>
      <h2 className={styles.titulo}>{titulo}</h2>

      <div className={styles.postConteudoContainer}>{children}</div>
    </article>
  );
}
