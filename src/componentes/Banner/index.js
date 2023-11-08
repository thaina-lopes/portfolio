import styles from "./Banner.module.css";
import minhaFoto from "assets/imagem_banner02.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>Thainá Lopes</h1>
        <p className={styles.paragrafo}>Desenvolvedora Front-end</p>
        <div className={styles.iconesContainer}>
          <a
            href="https://github.com/thaina-lopes"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={32} className={styles.icones} />
          </a>
          <a
            href="https://www.linkedin.com/in/thaina-lops/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={32} className={styles.icones} />
          </a>
        </div>
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
