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
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        marginBottom: 16, // Add margin to separate cards
        maxWidth: "100%", // Allow the card to take full width
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{
            width: "100%",
            paddingTop: "56.25%",
            objectFit: "cover", // Prevent swaying by ensuring the image fits
          }}
        />
      </Link>

      <CardContent
        sx={{
          backgroundColor: "#161e16",
          padding: "16px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            color="#2ecc71"
            sx={{ fontSize: { xs: 16, md: 18 } }}
          >
            {snippet?.title.slice(0, 60)}
          </Typography>
        </Link>

        <Link
          to={
            snippet?.channelId
              ? `/channel/${snippet?.channelId}`
              : demoChannelUrl
          }
        >
          <Typography
            variant="subtitle2"
            fontWeight="bold"
            color="gray"
            sx={{ display: "flex", alignItems: "center" }}
          >
            {snippet?.channelTitle.slice(0, 60)}
            <CheckCircle sx={{ fontSize: 18, color: "white", ml: "10px" }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
