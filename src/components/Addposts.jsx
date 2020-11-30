import React,{useState} from 'react';
import windows from "../images/windows.png";
import school from "../images/school.png";
import cog from "../images/cog.png";
import Images from "./Images";
import CreateArea from "./CreateArea";
import Post from "./Post";
import { Link, withRouter } from 'react-router-dom'

const About = () => {

  const[posts,setPosts]=useState([]);

  function addPost(newPost){
    setPosts(prevPosts => {
      return [...prevPosts,newPost];
    });
  }

  function deletePost(id)
  {
    setPosts(prevPosts => {
      return prevPosts.filter((postItem, index) => {
        return index !== id;
      });
    });
  }
    return (
       <div>

       <div className="first">
          <Link to='/'>
       <div className="rectangle">
       <Images name={windows} text="Dashboard"/>
       </div>
           </Link>
         <Link to='/addposts'>
           <Images class="school" name={school} cl="University" text="Lorem" />
           </Link>
       <Images class="cog" name={cog} cl="System" text="Ipsum"/>
       </div>
       <CreateArea onAdd={addPost} />
       <div className="multiple">
      {posts.map((postItem, index) => {
        return (
          <Post
            key={index}
            id={index}
            title={postItem.title}
            content={postItem.content}
            onDelete={deletePost}
          />
        );
      })}
      </div>
       </div>
    );
}

export default withRouter(About);
