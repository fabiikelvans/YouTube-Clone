import { Avatar } from '@mui/material';
import React from 'react';
import './VideoCard.css';

function VideoCard({ image, title, channel, views, timestamp, channelImg}) {
  return (
    <div className='video'>
        <img className='video__thumbnail' src={image} alt="" />
        <div className="video__info">
            <Avatar className='video__avatar' alt={channel} src={channelImg} />
            <div className="video__info-text">
                <h4>{title}</h4>
                <p>{channel}</p>
                <p>{views} . {timestamp}</p>
            </div>
        </div>
    </div>
  )
}

export default VideoCard