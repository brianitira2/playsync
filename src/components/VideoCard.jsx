import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import {
  demoThumbnailUrl,
  demoChannelUrl,
  demoVideoTitle,
  demoChannelTitle,
  demoVideoUrl,
} from "../utils/constants";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return(
  <Card>
    <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
      <CardMedia image={snippet?.thumbnails?.high?.url }alt={snippet?.title} sx={{width: 400, height: 200}}  />
    </Link>

    <CardContent sx={{backgroundColor: '#161e16', height: '110px'}}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>

            <Typography variant="subtitle1" fontWeight='bold' color='#2ecc71'>
                {snippet?.title.slice(0, 60)}
            </Typography>

        </Link>


        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>

            <Typography variant="subtitle2" fontWeight='bold' color='gray'>
                {snippet?.channelTitle.slice(0, 60)}
                <CheckCircle sx={{fontSize: 18, color: 'white', ml: '10px'}}/>
            </Typography>

        </Link>
    </CardContent>
  </Card>
  )
};

export default VideoCard;
