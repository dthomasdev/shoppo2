const listItem = ({num, item, price, quantity, delItem, updateQuant}) => {

  return (
   <tr>
     <td>{num}</td> 
     <td>{item}</td> 
     <td>£{parseFloat(price).toFixed(2)}</td> 
     <td>{quantity}</td> 
     <td>£{parseFloat(quantity * price).toFixed(2)}</td> 
     <td>
       <button className="item-btn" name = "increment" onClick = { (e) => updateQuant(e.target.name)}>+</button>
       <button className="item-btn" name = "decrement" onClick = { (e) => updateQuant(e.target.name) } >-</button>
       <button className="item-btn" onClick = { () => delItem() }>x</button>
     </td> 
   </tr>
  )
}

export default listItem;

