import {useState} from 'react'

const AddForm = ({ addNewItem }) => {

const [ newItem, setItem ]= useState({ item: "", price:"", quantity: "" });
const { item, price, quantity } = newItem; // destructures item object into variables

// Submit Handler
  function submitHandler(e){
    e.preventDefault(); //prevents default form reset
    addNewItem(newItem) // sends new item to app.js state
    setItem({ item: "", price:"", quantity: "" }) // 'manually' resets state
  };
  
  //changeHandler, appends new values to existing state in app.js
  function changehandler(e){
    setItem({
      ...newItem,
      [e.target.name] : e.target.value
    })
  };

  return (
      <form id = "item-form" onSubmit={(e)=>submitHandler(e)}>
        <label htmlFor="item">Item</label>
        <input type="text" id="item" name="item" value = {item} onChange={e => changehandler(e)}/>
        
        <label htmlFor="price">Price</label>
        <input type="text" id="price" name="price" value = {price} onChange={e => changehandler(e)}/>
        
        <label htmlFor="quantity">Quantity</label>
        <input type="text" id="quantity" name="quantity" value = {quantity} onChange={e => changehandler(e)}/>
        
        <button className="btn submit" type="submit">Add Item</button>
      </form>
  )
};

export default AddForm;
