import React from "react";

function Datefiles(props)
{
  return(
    <div>
    <div className={props.class}>
    <div className={props.first}>{props.firstname}</div>
    <div className={props.second}>{props.secondname}</div>
    </div>
    </div>
  )
}
export default Datefiles;
