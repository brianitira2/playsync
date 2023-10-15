import React, { useState, useEffect } from "react";
import { Box, Typography, Grid } from "@mui/material";

import { useParams } from "react-router-dom";


import Videos from "./Videos";

import { fetchFromApi } from "../utils/Api";

const SearchFeed = () => {


  const {searchTerm} = useParams()

  const [videos, setVideos] = useState([])

  useEffect(() => {

    fetchFromApi(`search?part=snippet&q=${searchTerm}`)

    .then((data) => setVideos(data.items))

  }, [searchTerm])

  return(
    <Box sx={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={8} md={9} margin='0 auto'>
            <Videos videos={videos}/>
          </Grid>
        </Grid>
      </Box>
  )
  
}

 
 

export default SearchFeed;
