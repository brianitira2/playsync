import React from 'react';
import { Stack, Box } from '@mui/material';

import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';

const Videos = ({ videos }) => {
  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      justifyContent="center"
      gap={2}
      sx={{
        '@media (max-width: 600px)': {
          '& > div': {
            width: '100%', // Display 1 item per row on mobile phones
          },
        },
        '@media (min-width: 601px) and (max-width: 1024px)': {
          '& > div': {
            width: '50%', // Display 2 items per row on tablets
          },
        },
        '@media (min-width: 1025px)': {
          '& > div': {
            width: '25%', // Display 4 items per row on laptops and big screens
          },
        },
      }}
    >
      {videos.map((item, index) => (
        <Box key={index}>
          {item.id && item.id.videoId && <VideoCard video={item} />}
          {item.id && item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
