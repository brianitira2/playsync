import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Grid } from "@mui/material";

import ChannelCard from "./ChannelCard";
import Videos from "./Videos";

import { fetchFromApi } from "../utils/Api";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetchFromApi(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );

    fetchFromApi(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          background:
            "linear-gradient(95deg, rgba(0,8,36,1) 0%, rgba(121,47,9,1) 35%, rgba(255,173,0,1) 100%)",
          zIndex: 10,
          height: "300px",
          width: "100%",
        }}
      />
      <ChannelCard channelDetail={channelDetail} />
      <Box sx={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={8} md={9} margin='0 auto'>
            <Videos videos={videos}/>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ChannelDetail;
