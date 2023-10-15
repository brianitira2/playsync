import React from 'react'
import { Stack, useMediaQuery } from '@mui/material'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'

const Navbar = () => {
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  return (
    <Stack
      direction={isSmallScreen ? 'column' : 'row'} 
      alignItems="center"
      p={2}
      sx={{
        position: 'sticky',
        background: '#000',
        top: 0,
        justifyContent: 'space-between',
      }}
    >
      <Link to='/' style={{ display: 'flex', alignItems: 'center' }}>
        <img src="https://i.ibb.co/nRDyPkh/logo1.png" alt="logo1" height={65} />
      </Link>

      <SearchBar />
    </Stack>
  );
}

export default Navbar;
