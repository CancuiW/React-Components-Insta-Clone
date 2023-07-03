import React from 'react';
import Post from './Post';
import './Posts.css';

const Posts = (props) => {
 
  const { likePost, posts } = props;

  return (
    <div className='posts-container-wrapper'>
      {
        posts.map(x=>{
          return <Post  post={x} key={x.id} likePost={likePost}/>
        })
      }
      
    </div>
  );
};

export default Posts;
