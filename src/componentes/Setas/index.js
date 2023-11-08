import styles from "./Setas.module.css";
import setas from "assets/setas.png";

export default function Setas() {
  return (
    <section className={styles.sessaoSetas}>
      <a href="#sobreMim">
        <img
          className={styles.setas}
          src={setas}
          alt="Duas setas apontando para baixo"
        />
      </a>
    </section>
  );
}
