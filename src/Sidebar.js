import { EmojiEventsOutlined, ExploreOutlined, GraphicEqOutlined, Home, KeyboardArrowDownOutlined, OndemandVideoOutlined, RestoreOutlined, SportsEsportsOutlined, Subscriptions, ThumbUpOutlined, VideoLibraryOutlined } from '@mui/icons-material';
import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';

function Sidebar() {
  return (
    <div className='sidebar'>
        <SidebarRow selected Icon={Home} title='Home' />
        <SidebarRow Icon={ExploreOutlined} title='Trending' />
        <SidebarRow Icon={Subscriptions} title='Subscriptions' />
        <hr />
        <SidebarRow Icon={VideoLibraryOutlined} title='Library' />
        <SidebarRow Icon={OndemandVideoOutlined} title='Your videos' />
        <SidebarRow Icon={RestoreOutlined} title='Watch later' />
        <SidebarRow Icon={ThumbUpOutlined} title='Liked videos' />
        <SidebarRow Icon={KeyboardArrowDownOutlined} title='Show more' />
        <hr />
        <SidebarRow Icon={SportsEsportsOutlined} title='Gaming' />
        <SidebarRow Icon={GraphicEqOutlined} title='Live' />
        <SidebarRow Icon={EmojiEventsOutlined} title='Sports' />

    </div>
  )
}

export default Sidebar