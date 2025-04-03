import React from "react";
import styles from "./Post.module.css";

//hooks
import { useParams } from "react-router-dom";
import { useFetchDocument } from "../../hooks/useFetchDocument";

const Post = () => {
  const { id } = useParams();
  const { document: post, loading } = useFetchDocument("posts", id);

  return (
    <div className={styles.post_container}>
      {loading && <p>Carregando post...</p>}
      {post && (
        <>
          <h1>{post.title}</h1>
          <div className="image">
            <img src={post.image} alt={post.title} />
          </div>
          <p>{post.body}</p>
          <h3>Este post trata sobre:</h3>
          <div className={styles.tags}>
            {Array.isArray(post.tagsArray) && post.tagsArray.length > 0 ? (
              post.tagsArray.map((tag) => (
                <p key={tag}>
                  <span>#</span>
                  {tag}
                </p>
              ))
            ) : (
              <p>Sem tags disponíveis</p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Post;
