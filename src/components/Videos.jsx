import React, { useState, useEffect } from 'react';
import { Grid, CircularProgress } from '@mui/material';

import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';

const Videos = ({ videos }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (videos) {
      setIsLoading(false);
    }
  }, [videos]);

  if (isLoading) {
   
    return <CircularProgress />;
  }

  return (
    <Grid container spacing={1} >
      {videos.map((item, index) => (
        <Grid key={index}>
          {item.id && item.id.videoId && <VideoCard video={item} />}
          {item.id && item.id.channelId && <ChannelCard channelDetail={item} />}
        </Grid>
      ))}
    </Grid>
  );
};

export default Videos;
