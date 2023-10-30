import styles from "./Projetos.module.css";

import posts from "json/posts.json";
import PostCard from "componentes/PostCard";

export default function Projetos() {
  return (
    <ul className={styles.posts}>
      {posts.map((post) => (
        <li key={post.id}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  );
}
