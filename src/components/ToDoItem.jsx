import React from "react";



function ToDoItem(props) {
  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <div className="box">{props.text}</div>
    </div>
  );
}

export default ToDoItem;
