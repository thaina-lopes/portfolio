import styles from "./SobreMim.module.css";

import fotoSobreMim from "assets/sobre_mim_foto1.png";

export default function SobreMim() {
  return (
    <section className={styles.sobreMimContainer} id="sobreMim">
      <div className={styles.postConteudoContainer}>
        <h2 className={styles.titulo}>Sobre mim</h2>
        <h3 className={styles.subtitulo}>Oii, eu sou a Thainá!</h3>
        <img
          src={fotoSobreMim}
          alt="Foto da Thainá"
          className={styles.fotoSobreMim}
        />
        <p className={styles.paragrafo}>
          Sou estudante de Análise e Desenvolvimento de Sistemas e estou feliz
          de te ver por aqui.
        </p>
        <p className={styles.paragrafo}>
          Sou apaixonada por tecnologia, especialmente no desenvolvimento
          Front-End. Tenho conhecimento em <strong>HTML</strong>,{" "}
          <strong>CSS</strong>, <strong>JavaScript</strong> e{" "}
          <strong>React</strong>.
        </p>
        <p className={styles.paragrafo}>
          No último ano, tomei uma decisão importante: fazer a transição de
          carreira. Vi nisso a oportunidade de unir minha paixão por tecnologia
          com minha trajetória profissional.
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
      </div>
    </section>
  );
}
