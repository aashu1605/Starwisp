import React from "react";
import{Row,Col} from "react-bootstrap";

function Cards(props)
{
    return(
      <div className="cards">
      <Row>
      <Col sm={2}>
      <img src={props.name} alt=""/>
      </Col>
      <Col sm={10}>
      <h5>{props.text}</h5>
      <p>{props.desc}</p>
        <small>{props.time}</small>
      </Col>
      </Row>
      </div>
    )
}
export default Cards;
