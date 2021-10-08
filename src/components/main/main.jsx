import React, { useEffect, useState } from "react";
import AppLayout from "../layout/appLayout";
import SearchHeader from "../search_header/search_header";
import VideoList from "../video_list/video_list";

const Main = ({ youtube }) => {
  const [videos, setVideos] = useState([]);
  const search = (query) => {
    youtube
      .search(query) //
      .then((videos) => setVideos(videos));
  };

  //[] 빈 배열 옵션은, 마운트될떄 한번만 호출
  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, []);

  return (
    <AppLayout onSearch={search}>
      <VideoList videos={videos} />
    </AppLayout>
  );
};

export default Main;
