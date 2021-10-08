import React from "react";
import styles from "./video_detail_item.module.css";

const VideoDetailItem = ({ video, video: { snippet }, onVideoClick }) => (
  <li className={styles.wrap} onClick={() => onVideoClick(video)}>
    <div className={styles.video}>
      <img src={snippet.thumbnails.medium.url} alt="thumbnail" />
      <div className={styles.details}>
        <div className={styles.meta}>
          <p className={styles.title}>{snippet.title}</p>
          <p className={styles.channel}>{snippet.channelTitle}</p>
          <p className={styles.publishedAt}>
            {snippet.publishedAt.substring(0, 10)}
          </p>
        </div>
      </div>
    </div>
  </li>
);

export default VideoDetailItem;
