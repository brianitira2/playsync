import React, { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";

import Sidebar from "./Sidebar";
import Videos from "./Videos";

import { fetchFromApi } from "../utils/Api";

const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState('Films')
  const [videos, setVideos] = useState([])

  useEffect(() => {

    fetchFromApi(`search?part=snippet&q=${selectedCategory}`)
    .then((data) => setVideos(data.items)

    )

  }, [selectedCategory])

  return(
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
  <Box
    sx={{
      height: { sx: "auto", md: "92vh" },
      borderRight: "1px solid #3d3d3d",
      px: { sx: 0, md: 2 },
    }}
  >
    <Sidebar  
    selectedCategory={selectedCategory}
    setSelectedCategory={setSelectedCategory} 
    />

<Typography
   className="copyright"
   variant="body2"
   sx={{ mt: 1.5, color: "#fff" }}
 >
   © 2023 StreamPulse - Elevating Your Video Experience. <br></br>
   All Rights Reserved. Created by Brian Itira
 </Typography>

  </Box>

  <Box p={2} sx={{flex: 2, height: '90vh', overflowY: 'auto'}}>
    <Typography variant="h4" sx={{ fontWeight: "bold", color: "white" }}>
     {selectedCategory}
      <span style={{ color: "orange" }}>Videos</span>
    </Typography>

    <Videos videos={videos} />


    
  </Box>
</Stack>
  )
  
}

 
 

export default Feed;
