import React, { useEffect, useState } from "react";
import AppLayout from "../layout/appLayout";
import VideoList from "../video_list/video_list";

const Main = (props) => {
  const [videos, setVideos] = useState([]);

  //[] 빈 배열 옵션은, 마운트될떄 한번만 호출
  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=16&q=bts&type=video&key=AIzaSyBvhXba4bE-2qoubJPlyoa4Vo9Zv_CbKw4",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <AppLayout>
      <VideoList videos={videos} />
    </AppLayout>
  );
};

export default Main;
