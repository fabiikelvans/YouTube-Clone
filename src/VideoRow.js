import React from 'react';
import './VideoRow.css';

function VideoRow({
    views, subs, description, timestamp, channel, title, image
}) {
  return (
    <div className='video__row'>
        <img src={image} alt="" />
        <div className="video__row-text">
            <h3>{title}</h3>
            <p className='video__row-headline'>
                {channel} . <span className='video__row-subs'><span className='video__row-sub'> {subs}</span> Subscribers </span> {views} views . {timestamp}
            </p>
            <p className='video__row-description'>{description}</p>
        </div>
    </div>
  )
}

export default VideoRow