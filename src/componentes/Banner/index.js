import styles from "./Banner.module.css";
import minhaFoto from "assets/imagem_banner02.png";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>Thainá Lopes</h1>
        <p className={styles.paragrafo}>Desenvolvedora Front-end</p>
      </div>

      <div className={styles.imagens}>
        <img
          className={styles.minhaFoto}
          src={minhaFoto}
          alt="Foto da Thainá Lopes"
        />
      </div>
    </div>
  );
}
