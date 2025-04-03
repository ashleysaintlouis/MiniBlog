import React from "react";
import styles from "./PostDetail.module.css";

import { Link } from "react-router-dom";

const PostDetail = ({ post }) => {
  return (
    <div className={styles.post_detail}>
      <div className="image">
        <img src={post.image} alt={post.title} />
      </div>
      <h2>{post.tilte}</h2>
      <p className="createdby">{post.createdBy}</p>
      <div>
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
      <Link to={`/posts/${post.id}`} className="btn btn-outline">
        Ler
      </Link>
    </div>
  );
};

export default PostDetail;
