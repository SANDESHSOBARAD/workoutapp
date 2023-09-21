import React from 'react'
import {Box, Stack, Typography} from '@mui/material'
import HeroBannerImage from '../assets/images/banner1.jpeg';
const HeroBanner = () => {
  return (
    <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
        <Typography color="#DF26AA" fontWeight="600" fontSize="30px">
            Fitness Club
        </Typography>
        <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px" color="#65686A">
            <span style={{ color: '#F50513' }}>BLOOD, </span>
            <span style={{ color: '#05B7F5' }}>SWEAT</span> <br />
            And RESPECT
            </Typography>
    <Typography fontSize="26px" fontFamily="Alegreya" lineHeight="35px" color="#D25A07">
      The first two you Give, The last one you EARN...
    </Typography>
    <Stack>
      <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#1498fd', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '20px' }}>Explore Exercises</a>
    </Stack>
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" style={{ borderBottomLeftRadius: '190px' }}/>

    </Box>
  )
}

export default HeroBanner