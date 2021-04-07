const listItem = ({num, item, price, quantity, delItem, updateQuant}) => {

  return (
   <tr className = "list-item">
     <td>{num}</td> 
     <td className="description">{item}</td> 
     <td>£{parseFloat(price).toFixed(2)}</td> 
     <td>{quantity}</td> 
     <td>£{parseFloat(quantity * price).toFixed(2)}</td> 
     <td>
       <button className="item-btn add" name = "increment" onClick = { (e) => updateQuant(e.target.name)}>+</button>
       <button className="item-btn minus" name = "decrement" onClick = { (e) => updateQuant(e.target.name) } >-</button>
       <button className="item-btn delete" onClick = { () => delItem() }>x</button>
     </td> 
   </tr>
  )
}

export default listItem;

