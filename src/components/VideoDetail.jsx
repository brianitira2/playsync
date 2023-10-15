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
    // Fetch video details
    fetchFromApi(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]));

    // Fetch related videos
    fetchFromApi(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setVideos(data.items));
  }, [id]);

  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={6} >
        <Box width="100%" maxWidth="1000px">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}`}
            width="100%"
            height="700px"
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
      <Grid item xs={12} sm={12} md={6} margin='0 auto'>
        {videoDetail && (
          <Paper elevation={3} sx={{ p: 2, backgroundColor: 'white', borderRadius: '8px' }}>
            <Typography variant="h5">{videoDetail.snippet.title}</Typography>
            <Typography variant="body2">{videoDetail.snippet.description}</Typography>
          </Paper>
        )}
      </Grid>
      <Box sx={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Grid container spacing={-1}>
          <Grid item xs={12} sm={8} md={9} margin='0 auto'>
            <Videos videos={videos}/>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};

export default VideoDetail;
