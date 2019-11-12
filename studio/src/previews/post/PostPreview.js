import React from "react";

import styles from "./PostPreview.module.css";

function PostPreview(props) {
  const data = props.draft || props.published || props.initialValue;

  return (
    <div className={styles.root}>
      <h1>{data.title || <em>Untitled</em>}</h1>
    </div>
  );
}

export default PostPreview;
