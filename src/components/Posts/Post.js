import React from 'react';
import Comments from '../Comments/Comments';
import LikeSection from './LikeSection';
import PostHeader from './PostHeader';

const Post = props => { 
  const { post, likePost } = props;
  //console.log(post)

  return (
    <div className='post-border'>
      <PostHeader
        username={post.username}
        thumbnailUrl={post.thumbnailUrl}
      />
      <div className='post-image-wrapper'>
        <img
          alt='post thumbnail'
          className='post-image'
          src={post.imageUrl}
        />
      </div>
     
      <LikeSection likePost={() => likePost(post.id)}  numberOfLikes={post.likes} />
      
      <Comments comments={post.comments}/>
    </div>
     //之所以是 () => likePost(post.id)的形式，主要是因为likePost(post.id)直接是得到setPost（），这种会立刻改变state的value，所以需要
     //加入一个function将其包裹起来，仅click的时候才调用
  );
};

export default Post;
