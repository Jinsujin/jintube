import React from "react";
import styles from "./video_detail.module.css";
import VideoDetailItem from "../video_detail_item/video_detail_item";

const VideoDetail = ({
  popularVideos,
  video,
  video: { snippet },
  onVideoClick,
}) => {
  return (
    <section className={styles.wrap}>
      <div className={styles.contents}>
        <div className={styles.details_wrap}>
          <iframe
            className={styles.video}
            type="text/html"
            width="100%"
            height="500px"
            src={`http://www.youtube.com/embed/${video.id}`}
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <div className={styles.details}>
            <h2>{snippet.title}</h2>
            <h3>{snippet.channelTitle}</h3>
            <pre className={styles.description}>{snippet.description}</pre>
          </div>
        </div>
        <ul className={styles.list}>
          {popularVideos.map((video) => (
            <VideoDetailItem
              key={video.id}
              video={video}
              onVideoClick={onVideoClick}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default VideoDetail;
