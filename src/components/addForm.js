import React from 'react'

const AddForm = () => {
  return (
 
      <form>
        <label htmlFor="item">Item</label>
        <input type="text" id="item"/>
        <br/>
        <label htmlFor="price">Price</label>
        <input type="text" id="price"/>
        <br/>
        <label htmlFor="quantity">Quantity</label>
        <input type="text" id="quantity"/>
        <br/>
        <button type="submit">Add</button>
      </form>

  )
}

export default AddForm
