import React from 'react';
import { Grid } from '@mui/material';

import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';

const Videos = ({ videos }) => {
  return (
    <Grid container spacing={1} justifyContent="center" >
      {videos.map((item, index) => (
        <Grid item xs={12} sm={6} lg={3} key={index} >
          {item.id && item.id.videoId && <VideoCard video={item} />}
          {item.id && item.id.channelId && <ChannelCard channelDetail={item} />}
        </Grid>
      ))}
    </Grid>
  );
};

export default Videos;
