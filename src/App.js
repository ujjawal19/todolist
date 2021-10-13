import "./App.css";
import React, { useState } from "react";
import ListItems from "./ListItems";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
library.add(faTrash);

function App() {
  const [items, setItems] = useState([]);
  const [currItems, setcurrItems] = useState({
    text: "",
    key: "",
  });
  const addItem = (e) => {
    e.preventDefault();
    const newItem = currItems;
    if (newItem.text !== "") {
      console.log(newItem);
      const newItems = [...items, newItem];
      setItems(newItems);
      setcurrItems({
        text: "",
        key: "",
      });
    }
  };
  const handleInput = (e) => {
    setcurrItems({
      text: e.target.value,
      key: Date.now(),
    });
  };
  
  const deleteItem = (key) => {
    const filteredItems = items.filter((item) => item.key !== key);
    setItems(filteredItems);
  };
  const updateItem = (text,key) =>{
      const i = [...items]; 
      i.forEach( item =>{
        if(item.key === key){
          item.text = text
        }
      })
      setItems(i)
  }
  return (
    <div className="App">
      <header>
        <form id="to-do-form" onSubmit={addItem}>
          <input
            type="text"
            placeholder="Enter text"
            value={currItems.text}
            onChange={handleInput}
          />
          <button type="submit">Add</button>
        </form>
      </header>
      <ListItems items={items} deleteItem={deleteItem} updateItem={updateItem}>
        {" "}
      </ListItems>
    </div>
  );
}

export default App;
