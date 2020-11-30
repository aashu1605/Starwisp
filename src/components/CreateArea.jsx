import React, { useState } from "react";
import vector from "../images/vector.png";


function CreateArea(props) {

  const [post, setPost] = useState({
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setPost(prevPost => {
      return {
        ...prevPost,
        [name]: value
      };
    });
  }

  function submitPost(event) {
    props.onAdd(post);
    setPost({
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-post">
        <textarea
          name="content"
          onChange={handleChange}
          value={post.content}
          placeholder="Share something with your class...."
        />
        <div className="attach"><img src={vector} alt=""/></div>
        <button onClick={submitPost}>Share</button>
      </form>
    </div>
  );
}

export default CreateArea;
