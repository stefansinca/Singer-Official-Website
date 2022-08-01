import React from 'react';

import './BlogPageComponent.css';

const BlogPageComponent = () => {
  return (
    <div className='parent-div'>
      <main className='main-blog'>
      <img src={require("..//..//media/under-construction.png")} alt=""  className='homepage-img'/>
      </main>
      <h1 className='h1-blog'>Page under Development...</h1>
    </div>
    
  )
}

export default BlogPageComponent