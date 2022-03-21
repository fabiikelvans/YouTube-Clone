import { Apps, Menu, Notifications, Search, VideoCall } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [inputSearch, setInputSearch] = useState("");
  return (
    <div className='header'>
      <div className="header__left">
      <Menu/>
      <Link to='/'>
        <img className='header__logo' src="/youtube.svg" alt="" />
        </Link>
      </div>
        
      <div className="header__input">
      <input value={inputSearch} onChange = {e => setInputSearch(e.target.value)} placeholder='Search' type="text" />

      <Link to={`/search/${inputSearch}`}>
        <Search  className='input-btn'/>
        </Link>
      </div>
      
      <div className="header__icons">
      <VideoCall  className='header-icon'/>
        <Apps className='header-icon'/>
        <Notifications className='header-icon'/>
        <Avatar alt='Fabii Kelvans'  
        src='https://images2.minutemediacdn.com/image/upload/c_fill,w_180,ar_1:1,f_auto,q_auto,g_auto/shape/cover/entertainment/mm-user-avatar-male-c5a9b6db28d293c7381495271bdda4ad.png'
        />
      </div>
       
    </div>
  )
}

export default Header