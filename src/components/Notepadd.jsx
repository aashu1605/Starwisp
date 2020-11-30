import React,{useState} from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function Notepad()
{
const [items,setItems]=useState([]);

function addItem(inputText) {
setItems(prevItems => {
  return [...prevItems, inputText];
});}
function deleteItem(id) {
    setItems(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

return(
  <div>
  <InputArea onAdd={addItem} />
  <div>
        <div>
          {items.map((todoItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={todoItem}
              onChecked={deleteItem}
            />
          ))}
        </div>
      </div>
      </div>
);
}
export default Notepad;
