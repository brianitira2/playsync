import React, { useEffect, useState } from 'react';
import Videos from './Videos';
import { fetchFromApi } from '../utils/Api';
import { Stack, Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import YouTube from 'react-youtube';

const VideoDetail = () => {
  const { id } = useParams();
  const [videoDetail, setVideoDetail] = useState(null);
  const [videoUrl, setVideoUrl] = useState('');

  useEffect(() => {
    fetchFromApi(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => {
        setVideoDetail(data.items[0]);
        setVideoUrl(data.items[0].snippet.videoUrl);
      });
  }, [id]);

  const handleDownloadButtonClick = async () => {
    const response = await fetch(videoUrl);
    const blob = await response.blob();

    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${videoDetail.snippet.title}.mp4`;
    link.click();
  };

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: 'column', md: 'row' }}>
        <Box sx={{ width: '100%' }}>
          <YouTube
            videoId={id}
            opts={{
              playerVars: {
                controls: 0,
                modestbranding: 1,
                showinfo: 0,
              },
            }}
          />
        </Box>
      </Stack>
      <button onClick={handleDownloadButtonClick}>Download Video</button>
    </Box>
  );
};

export default VideoDetail;
