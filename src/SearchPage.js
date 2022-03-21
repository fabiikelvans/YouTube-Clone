import { TuneOutlined } from '@mui/icons-material';
import React from 'react';
import ChannelRow from './ChannelRow';
import './SearchPage.css';
import VideoRow from './VideoRow';

function SearchPage() {
  return (
    <div className='search__page'>
        <div className="search__page-filter">
            <TuneOutlined/>
            <h2>FILTERS</h2>
        </div>
        <hr />
        <ChannelRow
        image = "https://yt3.ggpht.com/ql0B19qH4Fa027W_O5YaowJqgveGRgwiC3zdJ1Lqcl-ry2_za4qEQIrT8lBaHrC1QWyHtPXM-w=s176-c-k-c0x00ffffff-no-rj-mo"
        channel = "GaryVee"
        verified
        subs = "3.77M"
        noOfVideos = {1239}
        description = "Gary is an entrepreneur at heart — he builds businesses. Today, he helps Fortune 1000 brands leverage consumer attention through his full-service advertising agency, VaynerMedia which has offices in NY, LA, London, Mexico City, LATAM and Singapore.  VaynerMedia is part of the VaynerX holding company which also includes VaynerProductions, VaynerNFT, Gallery Media Group, The Sasha Group, Tracer, VaynerSpeakers, VaynerTalent, and VaynerCommerce. Gary is also the Co-Founder of VaynerSports, Resy and Empathy Wines."
        />
        <hr />

        <VideoRow
        views="1.4M"
        subs="3.5M"
        description = "I think that if you make everything your fault (without beating yourself up, of course), then you are also the person with the power to change things around."
        timestamp = "2 days ago"
        channel = "Gary Vee"
        title="Here's where UNHAPPINESS begins..."
        image="https://i.ytimg.com/vi/xSR7_WM6PM4/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDT6HHhBNe_rpnE_-yJuP39zu8XYA"
        />

        <VideoRow
        views="453K"
        subs="3.5M"
        description = "FUCK IT … this had to be said."
        timestamp = "5 days ago"
        channel = "GaryVee"
        title="4 Minutes That Might CHANGE YOUR LIFE"
        image="https://i.ytimg.com/an_webp/ffI_p11IPQo/mqdefault_6s.webp?du=3000&sqp=CJSi4JEG&rs=AOn4CLCPTCRzBTWP_AnTa4s4bhZCRojatQ"
        />

    </div>
  )
}

export default SearchPage