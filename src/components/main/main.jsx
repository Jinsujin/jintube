import React, { useEffect, useState } from "react";
import AppLayout from "../layout/appLayout";
import VideoDetail from "../video_detail/video_detail";
import VideoList from "../video_list/video_list";
import styles from "./main.module.css";

const Main = ({ youtube }) => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isDetailView, setIsDetailView] = useState(false);

  const selectVideo = (video) => {
    setSelectedVideo(video);

    // setIsDetailView(video != null ? true : false);
    // console.log(isDetailView, video); // false
  };

  const search = (query) => {
    setSelectedVideo(null);
    youtube
      .search(query) //
      .then((videos) => setVideos(videos))
      .catch((error) => console.log("error", error));
  };

  //[] 빈 배열 옵션은, 마운트될떄 한번만 호출
  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <AppLayout onSearch={search} isDetailView={isDetailView}>
      <section className={styles.contents}>
        {selectedVideo !== null ? (
          <div className={styles.detail}>
            <VideoDetail
              video={selectedVideo}
              popularVideos={videos}
              onVideoClick={selectVideo}
            />
          </div>
        ) : (
          <div className={styles.list}>
            <VideoList videos={videos} onVideoClick={selectVideo} />
          </div>
        )}
      </section>
    </AppLayout>
  );
};

export default Main;
