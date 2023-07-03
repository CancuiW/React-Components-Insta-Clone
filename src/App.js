/* 
  Start here and work your way down the nested components.
  Not all files in the project need code added.
  Look at each file to see what props need to be passed!
*/
import SearchBar from './components/SearchBar/SearchBar';
import Posts from './components/Posts/Posts';
import dummyData from './dummy-data';
import React ,{useState}from 'react';
import './App.css';

const App = () => {
  const [searchBox, setSearchBox] = useState("")
  const [posts, setPosts] = useState(dummyData)
  
  
  const likePost = postId => {
    /*
      This function serves the purpose of increasing the number of likes by one, of the post with a given id.

      The state of the app lives at the top of the React tree, but it wouldn't be fair for nested components not to be able to change state!
      This function is passed down to nested components through props, allowing them to increase the number of likes of a given post.

      Invoke `setPosts` and pass as the new state the invocation of `posts.map`.
      The callback passed into `map` performs the following logic:
        - if the `id` of the post matches `postId`, return a new post object with the desired values (use the spread operator).
        - otherwise just return the post object unchanged.
     */
    //当需要click一个button来实现一个文字部分的改变时，直接将state中的value值（array）储存在一个新的变量中
    //如newLike（）function所示，将array中的每一个与button所在处的ID相比较（因为ID是唯一值），如果两个ID相同，则改变当前ID中需要改变的文本值
    //其他的变量保持不变。
    //最后将完整的新array放入state中对应的set function中，改变state的值，rerender(重新渲染)，实时更新（update）数据
    const newLike=posts.map(x=>{
      if (x.id===postId){
        return {...x, likes:(x.likes)+1}
      }else{
        return x
      }
    })
    setPosts(newLike)
  };

  //下面的searchChange（）function板块是为了将input 中的文字拿出来（newContent），在无文字输入的时候保持posts不变，
  //若存在文字时，就要与posts中的每一个object中的name相对比，只要含有一个单词存在name中，就显示此整条object，并输出
  //这样就能达到input 输入框中实时输入并显现name匹配的内容
  const searchChange=()=>{
    const newContent=searchBox.trim().toLowerCase()
    if (!newContent){
      return posts
    }else{
      return posts.filter(x=>{
        return x.username.toLowerCase().includes(newContent)
      })
    }
  }



  return (
    <div className='App'>
      <SearchBar setSearchBox={setSearchBox}/>
      <Posts posts={searchChange()} likePost={likePost}/>
    </div>
  );
};

export default App;
