import React, { Component } from 'react'
import Header from './Header';
import RecommendedVideos from './Recommended';
import Sidebar from './Sidebar';

export default class Home extends Component {
  render() {
    return (
      <div>
          <Header/>
     <div className="app__page">
       <Sidebar />
       <RecommendedVideos/>
     </div>
      </div>
    )
  }
}
