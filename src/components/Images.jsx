import React from "react";

function Images(props)
{
  return(
    <div>
  <img className={props.class} src={props.name} alt=""/>
  <h2 className={props.cl}>{props.text}</h2>
</div>);
}
export default Images;
