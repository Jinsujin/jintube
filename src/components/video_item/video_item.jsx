import React from "react";
import styles from "./video_item.module.css";

const VideoItem = ({ video: { snippet } }) => (
  <li className={styles.wrap}>
    <div className={styles.video}>
      <img src={snippet.thumbnails.medium.url} alt="thumbnail" />
      <p>{snippet.title}</p>
      <p>{snippet.channelTitle}</p>
      <p>{snippet.publishedAt}</p>
    </div>
  </li>
);

export default VideoItem;
