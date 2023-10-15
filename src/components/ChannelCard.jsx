import React from 'react'
import {Box, CardContent, CardMedia, Typography} from '@mui/material'
import {Link} from "react-router-dom"
import { CheckCircle } from '@mui/icons-material'



const ChannelCard = ({channelDetail}) => {
  return (
    <Box sx={{boxShadow: 'none', borderRadius: '20px'}}>
        <Link to={`/channel/${channelDetail?.id?.channelId}`}>
            <CardContent sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', color: 'white'}}>

            </CardContent>
        </Link>

    </Box>
  )
}

export default ChannelCard

