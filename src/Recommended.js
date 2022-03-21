import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import React from 'react';
import './Recommended.css';
import VideoCard from './VideoCard';

function RecommendedVideos() {
  const handleClick = () => {
    console.info('You clicked the Chip.');
  }
  return (
    <div className='recommended'>
        <div className="chips">
          <Stack className='chips__wrapper' direction="row" spacing={1}>
          <Chip className='chip chip-select' label="All" onClick={handleClick} />
          <Chip className='chip chip-i' label="Music" variant="outlined" onClick={handleClick} />
          <Chip className='chip chip-i' label="Podcast" variant="outlined" onClick={handleClick} />
          <Chip className='chip chip-i' label="User Interface Design" variant="outlined" onClick={handleClick} />
          <Chip className='chip chip-i' label="Coding" variant="outlined" onClick={handleClick} />
          <Chip className='chip chip-i' label="Design" variant="outlined" onClick={handleClick} />
          <Chip className='chip chip-i' label="JavaScript" variant="outlined" onClick={handleClick} />
          <Chip className='chip chip-i' label="React JS" variant="outlined" onClick={handleClick} />
          <Chip className='chip chip-i' label="Sports" variant="outlined" onClick={handleClick} />
          </Stack>
        </div>

        
        <div className="recommended__videos">

        <VideoCard
        title='Jurassic World Dominion - Official Trailer 4K'
        views='3.6M Views'
        timestamp='1 month ago'
        image='https://i.ytimg.com/vi/TWQn896YyHs/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBxRjn6rhXCxzB7LvdRhlT8VETJvw'
        channel='Indoraptor Prototype'
        channelImg='https://yt3.ggpht.com/ytc/AKedOLRbnd3RWtRuAKQC9Vlq5hksFvYKyzMzyjvgzqYC=s48-c-k-c0x00ffffff-no-rj'
        />

        
<VideoCard
        title='10 TikTok Hacks For Those Who Dont Dance'
        views='923.4K Views'
        timestamp='2 weeks ago'
        image='https://i.ytimg.com/an_webp/xlaKgJOOyzM/mqdefault_6s.webp?du=3000&sqp=COyF4JEG&rs=AOn4CLATboNUWkSeMjOEwrZkiFXjTvTBBQ'
        channel='GaryVee'
        channelImg='https://yt3.ggpht.com/ql0B19qH4Fa027W_O5YaowJqgveGRgwiC3zdJ1Lqcl-ry2_za4qEQIrT8lBaHrC1QWyHtPXM-w=s48-c-k-c0x00ffffff-no-rj'
        />



        
<VideoCard
        title='Grant Cardone vs Jordan Belfort | Sales Training Heavyweight Match'
        views='2.1M Views'
        timestamp='2 years ago'
        image='https://i.ytimg.com/an_webp/-Ls3KDa7PMY/mqdefault_6s.webp?du=3000&sqp=CKKa4JEG&rs=AOn4CLCSYVMaCgvtM-a-QS57eGEdw69AHQ'
        channel='The Wolf of Wall Street'
        channelImg='https://yt3.ggpht.com/ytc/AKedOLRjgpyzlBPVTgQ_mElcnix8gTbpDTpRneDYqOJN5w=s48-c-k-c0x00ffffff-no-rj'
        />


        
<VideoCard
        title='Wolf Of Wall Street Jordan Belfort Talks The Art Of Sales, Quaaludes & More'
        views='2.5M Views'
        timestamp='3 years ago'
        image='https://i.ytimg.com/an_webp/GGBxsS3fNPQ/mqdefault_6s.webp?du=3000&sqp=CLyH4JEG&rs=AOn4CLA_opuI4lM3DBlRbSALwegEZ_3YGg'
        channel='
        Breakfast Club Power 105.1 FM
        '
        channelImg='https://yt3.ggpht.com/ytc/AKedOLSnVQ2AiA8bMnK6c9ct6Tli0aiZpVO1j3_nLqYTgw=s48-c-k-c0x00ffffff-no-rj'
        />

      </div>
    </div>
  )
}

export default RecommendedVideos