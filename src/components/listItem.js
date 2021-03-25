const listItem = ({num, item, price, quantity, delItem, updateQuant}) => {

  return (
   <tr>
     <td>{num}</td> 
     <td>{item}</td> 
     <td>£{parseFloat(price).toFixed(2)}</td> 
     <td>{quantity}</td> 
     <td>£{parseFloat(quantity * price).toFixed(2)}</td> 
     <td>
       <button name = "increment" onClick = { (e) => updateQuant(e.target.name) } >+1</button>
       <button name = "decrement" onClick = { (e) => updateQuant(e.target.name) } >-1</button>
       <button onClick = { () => delItem() }>Delete</button>
     </td> 
   </tr>
  )
}

export default listItem;

