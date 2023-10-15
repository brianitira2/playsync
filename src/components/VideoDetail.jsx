import React, { useEffect, useState } from 'react';
import { fetchFromApi } from '../utils/Api';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Box, Typography, Paper } from '@mui/material';

const VideoDetail = () => {
  const { id } = useParams();
  const [videoDetail, setVideoDetail] = useState(null);

  useEffect(() => {
    fetchFromApi(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]));
  }, [id]);

  return (
    <Box minHeight="95vh" display="flex" flexDirection="column">
      <Box mt={2} flex="1" display="flex" position='sticky'>
        <div style={{ width: '100%', maxWidth: '900px' }}>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}`}
            width="100%"
            height="100%"
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
        </div>
      </Box>
      <Box mt={-0.1} flex="1" maxWidth="900px" >
        {videoDetail && (
          <Paper elevation={3} sx={{ p: 2, color: 'green' }}>
            <Typography variant="h5">{videoDetail.snippet.title}</Typography>
            <Typography variant="body2">{videoDetail.snippet.description}</Typography>
          </Paper>
        )}
      </Box>
    </Box>
  );
};

export default VideoDetail;
