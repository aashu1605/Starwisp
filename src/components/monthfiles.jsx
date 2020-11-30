import React from "react";

function Monthfiles(props)
{
  return(
    <div className={props.class}>
           <p className="monthtext">{props.text}</p>
           <hr className="hr"/>
           <p className="color">{props.text1}</p>
           <img className="imgcurve"src={props.name} alt="" />
    </div>
  );
}
export default Monthfiles;
