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

  const preventSway = (item) => {
    const aspectRatio = '16:9'; // Set the desired aspect ratio (e.g., 16:9 for widescreen)

    return (
      <div
        style={{
          position: 'relative',
          paddingBottom: `calc(100% * ${aspectRatio.split(':')[1]} / ${aspectRatio.split(':')[0]})`,
        }}
      >
        <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: 0 }}>
          {item.id && item.id.videoId && <VideoCard video={item} />}
          {item.id && item.id.channelId && <ChannelCard channelDetail={item} />}
        </div>
      </div>
    );
  };

  return (
    <Grid container spacing={1}>
      {videos.map((item, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          {preventSway(item)}
        </Grid>
      ))}
    </Grid>
  );
};

export default Videos;
