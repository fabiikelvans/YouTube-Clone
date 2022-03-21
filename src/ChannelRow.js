import {  CheckCircle } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import React from 'react';
import './ChannelRow.css';

function ChannelRow(
    {image,
        channel,
        subs,
        noOfVideos,
        description,
        verified}
) {
  return (
    <div className='channel__row'>
        <Avatar className='channel__row-logo' alt='Avatar' src={image} />
        <div className="channel__row-text">
            <h4>{ channel } <span> {verified && <CheckCircle/>} </span></h4>
            <p className='channel__row-subs'>
                {subs} subscribers . {noOfVideos} videos
            </p>
            <p> {description} </p>
        </div>
    </div>
  )
}

export default ChannelRow