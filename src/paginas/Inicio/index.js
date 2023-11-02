import SobreMim from "paginas/SobreMim";
import Projetos from "paginas/Projetos";
import styles from "./Inicio.module.css";
import Setas from "componentes/Setas";

export default function Inicio() {
  return (
    <>
      <Setas />
      <SobreMim />
      <Projetos />
    </>
  );
}
