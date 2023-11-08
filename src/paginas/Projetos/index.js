import styles from "./Projetos.module.css";

import posts from "json/posts.json";
import PostCard from "componentes/PostCard";

export default function Projetos() {
  return (
    <section className={styles.projetosContainer} id="projetos">
      <h2 className={styles.titulo}>Projetos</h2>
      <ul className={styles.posts}>
        {posts.map((post) => (
          <li key={post.id}>
            <PostCard post={post} />
          </li>
        ))}
      </ul>
    </section>
  );
}
