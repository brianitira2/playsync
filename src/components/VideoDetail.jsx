import React, { useEffect, useState } from 'react';
import { fetchFromApi } from '../utils/Api';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Box, Typography, Paper, Grid } from '@mui/material';
import Videos from './Videos';

const VideoDetail = () => {
  const { id } = useParams();
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    fetchFromApi(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]));

    fetchFromApi(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setVideos(data.items));
  }, [id]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Box width="100%" maxWidth="800px" margin="0 auto">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}`}
            width="100%"
            height="auto"
            controls={true}
            config={{
              youtube: {
                playerVars: {
                  controls: 0,
                  modestbranding: 1,
                  showinfo: 0,
                },
              },
            }}
          />
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        {videoDetail && (
          <Paper elevation={3} sx={{ p: 2, backgroundColor: '#f0f0f0', borderRadius: '8px', padding: '20px' }}>
            <Typography variant="h5" style={{ color: '#333' }}>
              {videoDetail.snippet.title}
            </Typography>
            <Typography variant="body2" style={{ color: '#666' }}>
              {videoDetail.snippet.description}
            </Typography>
          </Paper>
        )}
      </Grid>
      <Grid item xs={12}>
        <Videos videos={videos} />
      </Grid>
    </Grid>
  );
};

export default VideoDetail;
