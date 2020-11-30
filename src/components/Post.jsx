import React from "react";
import guyimg from "../images/guy.png";
import {Row,Col} from "react-bootstrap";

function Post(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="post">
    <Row>
    <Col sm={1}>
     <img src={guyimg} alt=""/>
     </Col>
     <Col sm={11}>
     <h6>Username</h6>
      <p>{props.content}</p>
      </Col>
      </Row>
      <button onClick={handleClick}>
        Delete
      </button>
    </div>
  );
}

export default Post;
