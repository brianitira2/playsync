import React from "react";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { CheckCircle } from "@mui/icons-material";

const ChannelCard = ({ channelDetail }) => {
  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: { xs: "356px", md: "320px" },
        height: "326px",
        margin: "auto",
      }}
    >
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            color: "white",
          }}
        >
          <CardMedia
            image={channelDetail?.snippet?.thumbnails?.high?.url}
            alt={channelDetail?.snippet?.title}
            sx={{ borderRadius: "50%", height: "200px", width: "200px" }}
          />

          <Typography>
            {channelDetail?.snippet?.title}
            <CheckCircle sx={{ fontSize: 18, color: "white", ml: "10px" }} />
          </Typography>
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
