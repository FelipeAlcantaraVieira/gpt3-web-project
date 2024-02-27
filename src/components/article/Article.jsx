import React from 'react';
import './article.css';

const Article = (imgURL) => {
  return (
    <div className='gpt3__blog-container_article'>
      <div className='gpt3__blog-container_article-image'>
        <img src={imgURL} alt="blog img" />
      </div>
    </div>
  )
}

export default Article