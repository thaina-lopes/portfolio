import SobreMim from "paginas/SobreMim";
import Projetos from "paginas/Projetos";
import styles from "./Inicio.module.css";

export default function Inicio() {
  return (
    <>
      <div className={styles.espacoEmBranco}></div>;
      <SobreMim />
      <div className={styles.espacoEmBranco}></div>;
      <Projetos />
      <div className={styles.espacoEmBranco}></div>;
    </>
  );
}
