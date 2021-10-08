import React, { useEffect, useState } from "react";
import AppLayout from "../layout/appLayout";
import SearchHeader from "../search_header/search_header";
import VideoList from "../video_list/video_list";

const Main = (props) => {
  const [videos, setVideos] = useState([]);
  const search = (query) => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&q=${query}&type=video&key=AIzaSyBvhXba4bE-2qoubJPlyoa4Vo9Zv_CbKw4`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) =>
        result.items.map((item) => ({ ...item, id: item.id.videoId }))
      )
      // .then((result) => console.log(result))
      .then((items) => setVideos(items))
      .catch((error) => console.log("error", error));
  };

  //[] 빈 배열 옵션은, 마운트될떄 한번만 호출
  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyBvhXba4bE-2qoubJPlyoa4Vo9Zv_CbKw4",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <AppLayout onSearch={search}>
      <VideoList videos={videos} />
    </AppLayout>
  );
};

export default Main;
