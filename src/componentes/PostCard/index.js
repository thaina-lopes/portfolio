import styles from "./Post.module.css";
import BotaoPrincipal from "componentes/BotaoPrincipal";

export default function PostCard({ post }) {
  return (
    <section>
      <div className={styles.post}>
        <img
          className={styles.capa}
          src={`/assets/posts/${post.id}/capa.png`}
          alt="Imagem de capa do post"
        />

        <h2 className={styles.titulo}>{post.titulo}</h2>
        <div className={styles.botoes}>
          <BotaoPrincipal to={post.site}>Site</BotaoPrincipal>
          <BotaoPrincipal to={post.github}>Código</BotaoPrincipal>
        </div>
      </div>
    </section>
  );
}
