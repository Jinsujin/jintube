import React from "react";
import styles from "./video_item.module.css";

const VideoItem = ({ video: { snippet } }) => (
  <li className={styles.wrap}>
    <div className={styles.video}>
      <img src={snippet.thumbnails.medium.url} alt="thumbnail" />
      <div className={styles.details}>
        <div className={styles.avatar}>
          <div className={styles.circle}>
            <span>{snippet.channelTitle.charAt(0)}</span>
          </div>
        </div>
        <div className={styles.meta}>
          <p className={styles.title}>{snippet.title}</p>
          <p className={styles.channel}>{snippet.channelTitle}</p>
          <p className={styles.publishedAt}>{snippet.publishedAt}</p>
        </div>
      </div>
    </div>
  </li>
);

export default VideoItem;
