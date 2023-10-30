import styles from "./SobreMim.module.css";

import PostModelo from "componentes/PostModelo";
import fotoSobreMim from "assets/sobre_mim_foto1.png";

export default function SobreMim() {
  return (
    <PostModelo titulo="Sobre mim" id="sobreMim">
      <h3 className={styles.subtitulo}>Olá, eu sou a Thainá!</h3>
      <img
        src={fotoSobreMim}
        alt="Foto da Thainá"
        className={styles.fotoSobreMim}
      />
      <p className={styles.paragrafo}>
        Sou estudante de Análise e desenvolvimento de Sistemas e estou feliz de
        te ver por aqui.
      </p>
      <p className={styles.paragrafo}>
        Sou apaixonada por tecnologia, especialmente no desenvolvimento
        Front-End. Tenho conhecimento em HTML, CSS, JavaScript e React.
      </p>
      <p className={styles.paragrafo}>
        Meu objetivo é contribuir para o desenvolvimento de soluções
        tecnológicas e inovadoras que facilitem a vida das pessoas.
      </p>
      <p className={styles.paragrafo}>
        Estou sempre em busca de novos desafios e aprendizados na área de
        desenvolvimento, buscando evoluir minhas habilidades em todos os
        aspectos.
      </p>
    </PostModelo>
  );
}
