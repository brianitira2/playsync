import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import ChannelCard from "./ChannelCard";
import Videos from "./Videos";

import { fetchFromApi } from "../utils/Api";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  const { id } = useParams();

  console.log(channelDetail, videos);

  useEffect(() => {
    fetchFromApi(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );

    fetchFromApi(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              "linear-gradient(95deg, rgba(0,8,36,1) 0%, rgba(121,47,9,1) 35%, rgba(255,173,0,1) 100%)",
            zIndex: 10,
            height: "300px",
          }}
        />
      </Box>
      <ChannelCard channelDetail={channelDetail}/>
    </Box>
  );
};

export default ChannelDetail;
